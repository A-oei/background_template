<script type="text/jsx">
    export default {
        name: 'iconFont',
        data() {
            return {
                iconLists: []
            }
        },
        methods: {
            generateIconLists() {
                for (let i = 2; i <= 90; i++) {
                    this.iconLists.push(i);
                }
            }
        },
        render(h) {
            return (
                <ul class="aoei-icon-font">
                    {
                        this.iconLists.map(item => {
                            return <li>
                                <span class={`icon iconfont aoei-icon-test${item}`}></span>
                                <p>{`aoei-icon-test${item}`}</p>
                            </li>
                        })
                    }
                </ul>
            )
        },
        created() {
            this.generateIconLists();
        }
    }
</script>
<style lang="scss" scoped>
    .aoei-icon-font {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        > li {
            width: 100px;
            margin-right: 20px;
            margin-bottom: 10px;
            text-align: center;
            span {
                display: block;
                height: 100px;
                width: 100%;
                line-height: 100px;
                text-align: center;
                font-size: 42px;
            }
            p {
                font-size: 12px;
                width: 100%;
                text-align: center;
            }
        }
    }
</style>
