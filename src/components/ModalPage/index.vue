<script lang="text/jsx">
    export default {
        data() {
            return {}
        },
        methods: {
            closeModal() {
                this.$store.commit('ModalDeletePage')
            }
        },
        computed: {
            openPages() {
                return this.$store.state.modal.pages
            }
        },
        render(h) {
            return h(
                'Dialog',
                {
                    class: {
                        'aoei-dialog111': true
                    },
                    prop: {
                        'visible': true,
                        'title': this.openPages.title,
                    }
                },
                [
                    h(
                        'div',
                        [this.openPages.component],
                    )
                ]
            )
        }
    }
</script>
