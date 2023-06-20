<template>
    <div class="container mx-auto">
        <div class="flex items-center justify-end">
            <div class="flex w-full justify-end items-center px-2 md:px-[60px]  md:py-[27px] text-[20px] font-[500] gap-[33px] " :class="isHidden ? 'hidden': '' ">
                <router-link to='/'><p>Home</p></router-link>   
                <router-link to='/works'><p>Works</p></router-link>   
                <router-link to='/blog'><p>Blog</p></router-link>   
                <router-link to='/contact'><p>Contact</p></router-link>
            </div>
            <i v-if="isHidden" @click="togleMenu" class='bx bx-menu text-[26px] sm:hidden flex justify-end px-[10px] py-[10px] items-center'></i>
            <i v-else @click="togleMenu" class='bx bx-x text-[26px] sm:hidden flex justify-end px-[10px] py-[10px] items-center'></i>
        </div>
               
    </div>  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'

const isHidden = ref(false)

const togleMenu = () =>{
    isHidden.value = !isHidden.value;
}
</script>

<style lang="" scoped>

</style>