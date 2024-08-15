<template>
    <div>
        <ul>
            <li v-for="item in msgList" :key="item.id">
                <!-- <a href="/message1">{{ item.title }}</a> -->
                <router-link :to="`/about/message/detail?id=${item.id}&title=${item.title}`">{{ item.title
                    }}</router-link>
            </li>
        </ul>
        <p>————————————</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            msgList: [
                { id: '001', title: '消息1' },
                { id: '002', title: '消息2' },
                { id: '003', title: '消息3' }
            ]
        }
    }
}

</script>

<style></style>