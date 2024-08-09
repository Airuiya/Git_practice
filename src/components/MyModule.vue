<template>
    <div class="my-module">
        <h2>我开发的页面</h2>
        <h4 @click="toLottery">抽奖功能</h4>
    </div>
</template>

<script>
export default {
    name: 'MyModule',
    data() {
        return {
            url: '',
        }
    },
    methods: {
        toLottery() {
            console.log('点击去抽奖页面');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-module {
    background-color: skyblue;
    margin: 0 auto;
    width: 400px;
    padding: 20px;
    border: 1px solid #4573d5;
    border-radius: 10px;

}
</style>