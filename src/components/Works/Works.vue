<template>
    <div class="px-3 md:px-[148px]  justify-between bg-[#EDF7FA] pb-[50px]">
            <div class="flex justify-between items-end py-[27px]">
                <h1 class="text-[22px]">Featured works</h1>
                <router-link to='/works' class="text-[#00A8CC]">View all</router-link>
            </div>
            <div class="flex flex-col gap-5">
           
                <div v-for="el in projects" :key="el.id" class=" rounded-lg shadow bg-white ">
                    <div class="p-[24px] flex flex-col md:flex-row gap-4">
                        <img :src="el.image" alt="" class="w-full md:w-[250px] md:scaleimg duration-500 ">
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
                </div>
                
            </div>
        </div>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import {useInfo} from '../../service/getInfo'
import {useRouter} from 'vue-router'

const router  = useRouter()
const projects = ref([])
onMounted(() => {
     useInfo.getProject().then((res)=>{
        projects.value = res.data.slice(0,3)
    })

   
})


</script>

<style  scoped>

.scaleimg:hover {
    transform: scale(4);
    transform-origin: top left;
}
</style>