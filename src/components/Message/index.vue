<template>
    <transition name="slide-fade">
        <div class="aoei-message"
             :class="type?type:'success'"
             v-show="visible"
             role="alert"
        >
            <p>{{message}}</p>
        </div>
    </transition>
</template>
<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";

    @Component({
        mounted() {
            this.startTimer();
        }
    })
    export default class Message extends Vue {

        visible: boolean = false; //是否显示
        duration: number = 3000; //弹窗停留时长
        timer: null = null; //计时器
        closed: boolean = false;//判断消息提示是否关闭
        message: string = '';
        type: string = 'success';

        @Watch('message')
        public handler(n: string, o: string) {

        }

        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(_ => {
                    this.visible = false;
                }, this.duration)
            }
        }

    }
</script>
<style lang="scss" scoped>
    .aoei-message {
        min-width: 380px;
        box-sizing: border-box;
        padding: 15px 15px 15px 20px;
        border-radius: 4px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
        z-index: 2085;
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .success {
        border: 1px solid #e1f3d8;
        background-color: #f0f9eb;
        color: #67C23A;
    }

    .error {
        border: 1px solid #fde2e2;
        background-color: #fef0f0;
        color: #F56C6C;
    }

    .warning {
        border: 1px solid #faecd8;
        background-color: #fdf6ec;
        color: #E6A23C;
    }

    .info {
        border: 1px solid #EBEEF5;
        background-color: #edf2fc;
        color: #909399;
    }

    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: top .5s;
    }

    .slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        top: -60px;
    }
</style>
