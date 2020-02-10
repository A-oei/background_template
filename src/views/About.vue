<template>
    <div>
       <test>
           <p>88</p>
       </test>
    </div>
</template>

<script>
    export default {
        methods: {
            renderChild ( h ) {
                // 通过 slot 缓存起 vnode 结构
                this.$slots.default = ( <div>Child</div>);
            },
        },
        mounted(){

        }
    };
</script>
