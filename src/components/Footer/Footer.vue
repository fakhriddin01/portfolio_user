<template>
    <div class="container mx-auto ">
       <div class="flex flex-col justify-center items-center bg-[#EDF7FA] h-[120px]">
            <div class="text-[24px] flex justify-center items-center gap-5">
                <a v-for="el in network" :key="el.id" :href="el.link" target="blank"><i :class="el.icon"></i></a>

            </div>
            <p>Copyright ©2023 All rights reserved </p>                             
       </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useInfo} from '../../service/getInfo'

const network = ref([])
onMounted(() => {
     useInfo.getContact().then((res)=>{
        network.value = res.data
    })

     
})
</script>

<style lang="scss" scoped>

</style>