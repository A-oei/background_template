<script type="text/jsx">
    export default {
        name: 'home',
        render(h) {
            return (
                <div class="home">
                    <top-bar/>
                    <div class='aoei-home'>
                        <aoei-sidebar activeTextColor="#409EFF" class="home-sidebar"/>
                        <div class="home-view">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            )
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
        background-color: #F7F8FB;
        padding: 0 20px;
        .aoei-home {
            width: 100%;
            height: calc(100% - 60px);
            display: flex;
            .home-view {
                width: calc(100% - 180px);
                padding-left: 30px;
                overflow-y: auto;
                &::-webkit-scrollbar {
                    display: none
                }
            }
        }
    }
</style>
