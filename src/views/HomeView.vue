<template>
    <Header/>
    <div class="container mx-auto">
        <div class="px-3 md:px-[148px] flex flex-col justify-between mb-[71px]">
            <div class="flex justify-between flex-col-reverse md:flex-row">
                <div class="md:w-[55%] text-[#21243D] pt-[40px]">
                    <h1 class="text-[34px] md:text-[44px] text-center md:text-left font-[700]">Hi, I am Fakhriddin,</h1>
                    <h1 class="text-[34px] md:text-[44px] text-center md:text-left font-[700] mb-[25px]">Full-Stack Web Developer</h1>
                    <p class="text-[14px] text-justify">I am a highly motivated Junior Web Developer proficient in <b>Node.js</b> and <b>Vue.js</b>. I have hands-on experience with SQL and NoSQL databases, specifically MongoDB and PostgreSql, utilizing frameworks like NEST.js and EXPRESS.js.
                    <br>I am eager to join a dynamic team where I can leverage my skills to contribute to the organization's success. Despite my limited experience in web development, I am confident that the valuable life experience gained from my previous jobs will enhance my growth as an professional, benefiting both the company and myself.</p>
                    
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
                <div class="md:w-[35%] flex flex-col justify-start items-center pt-[40px]">
                    <div class="w-[280px] h-[280px] bg-[url('../assets/blur_image.jpg')] bg-cover bg-center rounded-full bg-no-repeat border-8 shadow-xl border-[#dff2f9]">
                        
                    </div>
                  
                    <div class="text-[24px] mt-[30px] flex gap-5">
                        <a v-for="el in network" :key="el.id" :href="el.link" target="blank"><i :class="el.icon"></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1S5u-sO6PiVb88dLyh_df_rAqHLBDrxPS/view?usp=drive_link" target="blank" class="bg-[#489dc289] hover:bg-[#ff8080fd]  text-white px-5 py-2 rounded-md mt-[15px] flex items-center gap-2"><i class='bx bx-cloud-download text-[22px]'></i>Download CV</a>

                </div>
            </div>
        </div>

        <Works/>
        <Recent/>
        <!-- <Contact/> -->
    </div>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import Badge from '../components/Badge/Badge.vue'
import Recent from '../components/Recent/Recent.vue'
import Works from '../components/Works/Works.vue'
import Contact from '../components/Contact/Contact.vue'
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