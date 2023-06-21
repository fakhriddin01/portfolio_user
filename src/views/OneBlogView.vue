<template>
    <Header/>

    <div class="container mx-auto px-3 md:px-[148px] ">
        <div class="flex justify-between items-end py-[27px]">
                <router-link to='/blog' class="text-[#00A8CC] ">Back</router-link>
            </div>
            <div class=" gap-5">
                
                <div class="mb-[40px]">
                        <h1 class="text-[32px] font-[700] md:pl-4 mb-5">{{post.title}}</h1>
                        <p class="text-[15px] my-[20px] flex flex-wrap items-center"> {{post.createdAt.substring(0,10)}} | <p v-for="(tag, inx) in post.tag.split(' ')" :key="inx" class="inline border-2 px-2 py-[2px] ml-1 text-[#27778f] border-[#27778f] rounded-full">{{tag}} </p></p>
                    <div id="content" class="leading-6"></div>
                </div>
                
            </div>
    </div>
    <Footer/>

</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import {onMounted, ref} from 'vue'
import {useInfo} from '../service/getInfo'
import {useRouter, useRoute} from 'vue-router'

const router  = useRouter()
const route = useRoute()

const post = ref({
    title: '',
    tag: '',
    createdAt: '',

})
const post_id = route.params.id
onMounted(() => {
    useInfo.getOnePost(post_id).then((res)=>{
        post.value = res.data
        const div = document.getElementById('content')
        div.innerHTML = post.value.content
    })

   
})
</script>

<style lang="scss" scoped>

</style>