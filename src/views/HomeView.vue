<template>
    <Header/>
    <div class="container mx-auto">
        <div class="px-3 lg:px-[148px] flex flex-col justify-between mb-[30px]">
            <div class="flex justify-between flex-col-reverse lg:flex-row">
                <div class="lg:w-[55%] text-[#21243D] pt-[40px]">
                    <h1 class="text-[34px] lg:text-[44px] text-center lg:text-left font-[700]">Hi, I am Fakhriddin,</h1>
                    <h1 class="text-[34px] lg:text-[44px] text-center lg:text-left font-[700] mb-[25px]">Full-Stack Web Developer</h1>
                    <p class="text-[14px] text-justify"> Full-Stack Web Developer with a proven track record at <b>COSCOM LLC</b>, enhancing in-house app functionality and performance through expertise in <b>JavaScript</b>, <b>Vue.js</b>, and <b>Node.js</b>. Skilled in API integration and adept at problem-solving to support and add new features to an internal tool for a telecommunications company. Excels in team building and professional communication, ensuring project success and customer satisfaction. Experienced in both frontend and backend development, with hands-on involvement in data collection, report preparation, map development, and the creation of diverse tools for the in-house website. </p>
                    
                     <div class="flex justify-between items-center py-5">
                        <div >
                            <h1 class="text-[22px] my-3 font-[500]">Skills</h1>
                            <div class="flex flex-wrap gap-4">
                                <Badge v-for="el in skills" :key="el.id" :skill="el.name"/>
                            </div>

                            <h1 class="text-[22px] mt-8 mb-3 font-[500]">Languages</h1>
                            <div class="flex flex-wrap gap-4">
                                <Badge v-for="el in languages" :key="el.id" :skill="el.name"/>
                            </div>
                        </div>

                    
                    </div>
                        
                </div>
                <div class="lg:w-[35%] flex flex-col justify-start items-center pt-[40px]">
                    <div class="w-[280px] h-[280px] bg-[url('../assets/blur_image.jpg')] bg-cover bg-center rounded-full bg-no-repeat border-8 shadow-xl border-[#dff2f9]">
                        
                    </div>
                  
                    <div class="text-[24px] mt-[30px] flex gap-5">
                        <a v-for="el in network" :key="el.id" :href="el.name === 'Gmail' ? `mailto:${el.link}` : el.link" target="_blank"><i :class="el.icon"></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1pj94aeVX0cBf4ihoXqy0RFrW1CUvDsEC/view?usp=drive_link" target="blank" class="bg-[#489dc289] hover:bg-[#ff8080fd]  text-white px-5 py-2 rounded-lg mt-[15px] flex items-center gap-2"><i class='bx bx-cloud-download text-[22px]'></i>Download CV</a>

                </div>
            </div>
        </div>

        <Experience/>
        <Works/>
        <!-- <Recent/> -->
    </div>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import Badge from '../components/Badge/Badge.vue'
import Recent from '../components/Recent/Recent.vue'
import Experience from '../components/Experience/Experience.vue'
import Works from '../components/Works/Works.vue'
import {onMounted, ref} from 'vue'
import {useInfo} from '../service/getInfo'

const network = ref([])
const skills = ref([])
const languages = ref([])
onMounted(() => {
     useInfo.getContact().then((res)=>{
        network.value = res.data
    })

     useInfo.getSkills().then((res)=>{
        skills.value = res.data
    })
     useInfo.getLanguages().then((res)=>{
        languages.value = res.data
    })
})


</script>

<style lang="scss" scoped>

</style>