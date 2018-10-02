<script>
import database from '@/services/database'

export default {
    name: 'signup',
    data () {
        return {
            email: '',
            password: '',
            error: '',
            success: ''
        }
    },
    methods: {
        async signUp () {
            let result = await database.signUp(this.email, this.password)

            if (result.message) {
                this.error = result.message
            } else {
                this.success = 'User is created'
            }
        }
    }
}
</script>

<template>
    <FlexboxLayout class="page">
        <Label class="message error" v-if="error">
            {{error}}
        </Label>
        <Label v-if="success">
            {{success}}
        </Label>
        <StackLayout class="form" @submit.prevent="signUp">
            <StackLayout class="input-field">
                <TextField class="input" hint="Email" v-model="email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
            </StackLayout>

            <StackLayout class="input-field">
                <TextField class="input" hint="Password" v-model="password"></TextField>
            </StackLayout>

            <StackLayout class="input-field">
                <TextField class="input" hint="Confirm password" v-model="confirmPassword"></TextField>
            </StackLayout>

            <Button text="Sign up" class="btn btn-primary"></Button>
        </StackLayout>

        <Label text="Don’t have an account?"></Label>
    </FlexboxLayout>
</template>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }
</style>