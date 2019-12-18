<template>
    <label>
        {{label}}
        <input v-on="inputListeners"/>
    </label>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        computed: {
            inputListeners() {
                let vm = this;
                return Object.assign({},
                    this.$listeners,
                    {
                        focus(event) {
                            vm.$('focus', event)
                        },
                        input(event) {
                            vm.$emit('input', event.target.value)
                        }
                    }
                )
            }
        }
    })
    export default class Test extends Vue {
        @Prop(String) label: string;
    }
</script>
