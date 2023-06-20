<template>
    <Header/>
    <div class="container mx-auto px-[265px] py-[80px]">
       <div class="flex justify-between items-end pb-[47px]">
                <h1 class="text-[32px] font-bold">Blog</h1>
        </div>
            <div class="flex flex-col gap-20">
                
                <router-link  v-for="el in posts" :to="{ name: 'blog', params: { id: el.id }}" :key="el.id" @click="openPost(el.id)" class="">
                    <h1 class="text-[26px] font-[700]">{{el.title}}</h1>
                    <p class="text-[18px] my-[20px]"> {{el.createdAt.substring(0, 10)}} | <p v-for="(tag, inx) in el.tag.split(' ')" :key="inx" class="inline text-gray-400">{{tag}} &nbsp </p></p>
                    <p>{{el.short}}</p>
                    <hr class="mt-5 border border-gray-500">
                </router-link>
                
            </div>
    </div>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import {onMounted, ref} from 'vue'
import {useInfo} from '../service/getInfo'
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

<style lang="scss" scoped>

</style>