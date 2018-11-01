<script>
import {Animation} from 'ui/Animation';
import {prompt} from 'ui/dialogs';
import {Color} from 'tns-core-modules/color';
import {connectionType, getConnectionType} from 'tns-core-modules/connectivity';
import User from '../models/User';
import alert from '../utilities/alert';
import feedback from '../utilities/feedback';
import * as validator from 'email-validator';

export default {
    name: 'login-main',
    props: {
        visible: Boolean
    },
    data() {
        return {
            isLoggingIn: true,
            isAuthenticating: false,
            user: new User(),
            confirmPassword: ""
        }
    },
    watch : {
        visible: function (val) {
            // when element turns visible, start animations
            if (val) {
                const animations = [];
                animations.push({target: this.$refs.mainContainer.nativeView, opacity: 1, duration: 500});

                //slide up the form controls and sign up container
                animations.push({
                    target: this.$refs.signUpStack.nativeView,
                    translate: {x: 0, y: 0},
                    opacity: 1,
                    delay: 500,
                    duration: 150
                });
                animations.push({
                    target: this.$refs.formControls.nativeView,
                    translate: {x: 0, y: 0},
                    opacity: 1,
                    delay: 650,
                    duration: 150
                });

                // kick off the animation queue
                new Animation(animations, false).play();
            }
        }
    },
    methods: {
        toggleDisplay() {
            this.isLoggingIn = !this.isLoggingIn;
            let mainContainer = this.$refs.mainContainer.nativeView;
            mainContainer.animate({
                // backgroundColor: this.isLoggingIn ? new Color("#F3F3F3") : new Color("#FFFFFF"),
                backgroundColor: new Color("#F3F3F3"),
                duration: 200
            });
        },
        focusPassword() {
            this.$refs.password.nativeView.focus();
        },
        submit() {
            this.isAuthenticating = true;
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.signUp();
            }
        },
        navigate() {
            this.$changeRoute('home', {clearHistory: true});
        },
        login() {
            if (getConnectionType() === connectionType.none) {
                feedback("No Connection", "Beerdex requires an internet connection to log in.", "error");
                 this.isAuthenticating = false;
                return;
            }

            if(!this.user.email || !this.user.password) {
                 feedback("Invalid Login", "Please provide both an email address and password.", "error");
                 this.isAuthenticating = false;
                return;
            }

            return this.$authService
                .login(this.user)
                .then(() => {
                    this.isAuthenticating = false;
                    navigate();
                })
                .catch((error) => {
                    console.error(error);
                    feedback("Invalid Login", "We could not find your account, please check your credentials.", "error");
                    this.isAuthenticating = false;
                });
        },
        signUp() {
            if (getConnectionType() === connectionType.none) {
                feedback("No Connection", "Beerdex requires an internet connection to register.", "error");
                return;
            }

            if(!this.user.email || !this.user.password || !this.confirmPassword) {
                feedback("Invalid Signup", "Please provide an email address, password, and confirm your password.", "error");
                this.isAuthenticating = false;
                return;
            }

            if(!validator.validate(this.user.email)) {
                feedback("Invalid Email", "Please enter a valid email address.", "error");
                this.isAuthenticating = false;
                return;
            }

            if(this.user.password !== this.confirmPassword) {
                feedback("Invalid Password", "Your passwords do not match.", "error");
                this.isAuthenticating = false;
                return;
            }

            this.$authService
            .register(this.user)
            .then(() => {
                feedback("", "Your account was successfully created.", "success");
                this.isAuthenticating = false;
                this.toggleDisplay();
            })
            .catch(error => {
                feedback("Error", error, "error");
                this.isAuthenticating = false;
            });
        },
        forgotPassword() {
            prompt({
                title: "Forgot Password",
                message: "Enter the email address you used to register for Beerdex to reset your password.",
                defaultText: "",
                okButtonText: "Ok",
                cancelButtonText: "Cancel"
            }).then((data) => {
                if (data.result) {
                    this.isAuthenticating = true;
                    this.$authService
                        .resetPassword(data.text.trim())
                        .then(() => {
                            feedback("", "Your password was successfully reset. Please check your email for instructions on choosing a new password.", "success");
                            this.isAuthenticating = false;
                        })
                        .catch((error) => {
                            feedback("", "An error occured resetting your password.", "error");
                            this.isAuthenticating = false;
                            console.log("Error resetting your password: " + error);
                        })
                }
            })
        }
    },
    mounted() {
        console.log('LoginMain mounted')
    }
}
</script>

<template>
    <StackLayout ref="mainContainer" class="main-container" :visibility="visible?'visible':'collaspe'">
        <Label class="main-label" text="Beerdex" :color="isLoggingIn? 'black' : 'white'"></Label>

        <StackLayout ref="formControls" class="form-controls" translateY="50">
            <TextField
                hint="Email Address"
                keyboardType="email"
                returnKeyType="next"
                @returnPress="focusPassword()"
                v-model="user.email"
                :isEnabled="!isAuthenticating"
                autoCorrect="false"
                autoCapitalizationType="none"
                :class="{ light: !isLoggingIn }"></TextField>
            <TextField
                ref="password"
                hint="Password"
                secure="true"
                returnKeyType="done"
                @returnPress="submit()"
                v-model="user.password"
                :isEnabled="!isAuthenticating"
                :class="{ light: !isLoggingIn }"></TextField>
            <TextField
                ref="confirmPassword"
                hint="Confirm Password"
                secure="true"
                returnKeyType="done"
                @returnPress="submit()"
                v-model="confirmPassword"
                :isEnabled="!isAuthenticating"
                :class="{ light: !isLoggingIn }"
                :visibility="!isLoggingIn ?'visible':'hidden'"></TextField>

            <ActivityIndicator :busy="isAuthenticating" rowSpan="2"></ActivityIndicator>
        </StackLayout>
        <Button
            :text="isLoggingIn ? 'Login' : 'Sign up'"
            :isEnabled="!isAuthenticating"
            class="submit-button"
            @tap="submit()"></Button>

        <Label 
            class="forgot-password-label"
            text="Forgot password?"
            @tap="forgotPassword()"
            :opacity="isLoggingIn ? 1 : 0"></Label>

        <StackLayout ref="signUpStack" class="sign-up-stack" @tap="toggleDisplay()" translateY="50">
            <Label :text="isLoggingIn ? 'Sign up here' : 'Back to login'"></Label>
        </StackLayout>
        
    </StackLayout>
</template>

<style scoped>

</style>

