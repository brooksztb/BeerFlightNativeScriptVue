<script>

</script>

<template>
    <FlexboxLayout class="page">
        <StackLayout class="form">
            <StackLayout class="input-field">
                <TextField class="input"></TextField>
            </StackLayout>

            <StackLayout class="input-field">
                <TextField class="input"></TextField>
            </StackLayout>

            <Button text="Log In" class="btn btn-primary"></Button>
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