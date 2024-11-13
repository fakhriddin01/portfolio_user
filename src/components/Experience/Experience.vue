<template>
    <div class="px-3 lg:px-[148px]  justify-between bg-[#EDF7FA] pb-[50px]">
            <div class="flex justify-between items-end py-[27px]">
                <h1 class="text-[22px]">Experience</h1>
                <router-link to='/works' class="text-[#00A8CC]">View all</router-link>
            </div>
            <div class="flex flex-col gap-5">
           
                <div v-for="el in formattedExperience" :key="el.id" class=" rounded-lg shadow bg-white ">
                    <div class="p-[24px] flex flex-col lg:flex-row gap-4">
                        <div class="flex flex-col gap-2 ">
                            <p class="text-[18px] font-[400] whitespace-nowrap lg:w-[250px] text-[#27778f]">{{el.startDate}} - {{el.endDate}}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-[20px] font-[700]">{{el.position}} | {{el.company}}</h1>
                            <p class="text-[16px] text-justify">{{el.description}}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
</template>

<script setup>

import {onMounted, ref, computed} from 'vue'
import {useInfo} from '../../service/getInfo'
import {useRouter} from 'vue-router'

const router  = useRouter()
const experience = ref([])
onMounted(() => {
     useInfo.getExperience().then((res)=>{
        experience.value = res.data
    })

   
})

// Computed property to format start and end dates
const formattedExperience = computed(() => {
  return experience.value.map((el) => {
    const options = { year: 'numeric', month: 'long' }; // e.g., "January 2022"
    const startDate = new Date(el.start).toLocaleDateString('en-US', options);
    const endDate = el.end ? new Date(el.end).toLocaleDateString('en-US', options) : 'Present';

    return {
      ...el,
      startDate,
      endDate
    };
  });
});


</script>

<style  scoped>
</style>