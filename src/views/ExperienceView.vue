<template>
    <Header/>
    <div class="container mx-auto px-3 min-h-[calc(100vh-190px)] lg:px-[265px] py-4 lg:py-[80px]">
        <h1 class="text-[34px] lg:text-[44px] font-[700]">Experience</h1>
        <div>
              <div class="flex flex-col my-3 lg:my-6 gap-5">
                <div v-for="el in formattedExperience" :key="el.id" class=" rounded-lg shadow bg-white ">
                    <div class="p-[24px] flex flex-col lg:flex-row gap-4">
                        <div class="flex flex-col gap-2 ">
                            <p class="text-[18px] font-[400] whitespace-nowrap lg:w-[250px]">{{el.startDate}} - {{el.endDate}}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-[20px] font-[600]">{{el.position}} | {{el.company}}</h1>
                            <p class="text-[16px] text-justify">{{el.description}}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import {onMounted, ref, computed} from 'vue'
import {useInfo} from '../service/getInfo'
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
    const endDate = el.end ? new Date(el.end).toLocaleDateString('en-US', options) : 'Current';

    return {
      ...el,
      startDate,
      endDate
    };
  });
});
</script>

<style scoped>

</style>