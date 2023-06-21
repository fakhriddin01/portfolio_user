<template>
    <Header/>
    <div class="container mx-auto px-3 min-h-[calc(100vh-190px)] lg:px-[265px] py-4 lg:py-[80px]">
        <h1 class="text-[34px] lg:text-[44px] font-[700]">Works</h1>
        <div>
              <div class="flex flex-col my-3 lg:my-6 gap-5">
                <div v-for="el in projects" :key="el.id" class=" rounded-lg shadow bg-white ">
                    <div class="p-2 lg:p-[24px] flex flex-col lg:flex-row lg:gap-5">
                        <img :src="el.image" alt="" class="w-full lg:w-[260px] lg:hover:scale-[4] lg:origin-left duration-500 ">
                        <div class="flex flex-col gap-2">
                            <h1 class="text-[26px] font-[700]">{{el.name}}</h1>
                            <p class="text-[20px]">{{el.description}}</p>
                            <div>
                                <p v-for="(tag, inx) in el.tag.split(' ')" :key="inx" class="text-[18px] text-gray-400 my-[20px] inline"> {{tag}} |&nbsp</p>
                            </div>
                        </div>
                    </div>
                    <div class=" px-[24px] flex justify-between items-center mb-2">
                        <a :href='el.link' target="blank" class="text-blue-800">View Code <i class='bx bx-right-arrow-alt'></i></a>
                        <a v-if="el.workLink" :href="el.workLink" target="blank" class="text-blue-800 font-bold">Live Preview</a>
                    </div>
                    <hr class="">   
                </div>
                
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
import {useRouter} from 'vue-router'

const router  = useRouter()
const projects = ref([])
onMounted(() => {
     useInfo.getProject().then((res)=>{
        projects.value = res.data
    })

   
})
</script>

<style scoped>
.scaleimg:hover {
    transform: scale(4);
    transform-origin: top left;
}
</style>