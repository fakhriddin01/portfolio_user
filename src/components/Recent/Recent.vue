<template>
    <div class="px-3 md:px-[148px]  justify-between bg-white mb-[30px] md:mb-[50px]">
            <div class="flex justify-between items-end py-[27px]">
                <h1 class="text-[22px]">Recent posts</h1>
                <router-link to='/blog' class="text-[#00A8CC]">View all</router-link>
            </div>
            <div class="flex flex-col md:flex-row gap-5">
                
                <router-link  v-for="el in posts" :to="{ name: 'blog', params: { id: el.id }}" :key="el.id" @click="openPost(el.id)" class="bg-[#EDF7FA] md:w-[50%] rounded-xl p-[24px]">
                    <h1 class="text-[26px] font-[700]">{{el.title}}</h1>
                    <p class="text-[18px] my-[20px]"> {{el.createdAt.substring(0, 10)}} | <p v-for="(tag, inx) in el.tag.split(' ')" :key="inx" class="inline">{{tag}} &nbsp </p></p>
                    <p>{{el.short}}</p>
                </router-link>
                
            </div>
        </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useInfo} from '../../service/getInfo'
import {useRouter} from 'vue-router'

const router  = useRouter()
const posts = ref([])
onMounted(() => {
     useInfo.getPosts().then((res)=>{
        posts.value = res.data.slice(-2)
    })

   
})

const openPost = (id)=>{
    router.push(`/blog/${id}`)
}
</script>

<style lang="" scoped>

</style>