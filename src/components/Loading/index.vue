<template>
    <div class="aoei-loading"/>
</template>
<style lang="scss" scoped>
    .aoei-loading {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #ffffff;
        animation: loading .8s linear infinite;
    }

    @keyframes loading {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
