<template>
    <div class="container mx-auto">
        <div class="hidden md:flex w-full justify-end items-center px-[60px]  md:py-[27px] text-[20px] font-[500] gap-[33px]">
             <router-link to='/'><p>Home</p></router-link>   
             <router-link to='/works'><p>Works</p></router-link>   
             <router-link to='/blog'><p>Blog</p></router-link>   
             <router-link to='/contact'><p>Contact</p></router-link>
        </div>
        <i class='bx bx-menu text-[26px] sm:hidden flex justify-end px-[10px] py-[10px] items-center'></i>   
    </div>  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style lang="" scoped>

</style>