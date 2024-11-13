<template>
    <div class="container mx-auto">
        <div class="flex items-center justify-end h-[85px]">
            <!-- Navbar Links -->
            <div 
                class="flex w-full justify-end items-center px-2 md:px-[60px] md:py-[27px] text-[20px] font-[500] gap-4 md:gap-[33px] transition-all duration-300"
                :class="isHidden ? 'hidden md:flex' : 'block bg-white p-4 shadow-lg absolute top-[85px] right-0 w-full z-10 md:static md:bg-transparent md:shadow-none'"
            >
                <router-link 
                    v-for="(link, index) in links" 
                    :key="index" 
                    :to="link.to" 
                    class="relative"
                    :class="{ 'text-blue-500': $route.path === link.to }" 
                >
                    <p class="hover:text-blue-400 transition duration-300">{{ link.name }}</p>
                </router-link>
            </div>

            <!-- Menu Icon -->
            <i 
                v-if="isHidden" 
                @click="toggleMenu" 
                class="bx bx-menu text-[26px] sm:hidden flex justify-end px-[10px] py-[10px] items-center cursor-pointer"
            ></i>
            <i 
                v-else 
                @click="toggleMenu" 
                class="bx bx-x text-[26px] sm:hidden flex justify-end px-[10px] py-[10px] items-center cursor-pointer"
            ></i>
        </div>
    </div>  
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isHidden = ref(true)
const toggleMenu = () => {
    isHidden.value = !isHidden.value
}

// Links for navigation
const links = [
    { name: 'About', to: '/' },
    { name: 'Experience', to: '/experience' },
    { name: 'Works', to: '/works' },
    // { name: 'Blogs', to: '/blog' },
    { name: 'Contact', to: '/contact' }
]
</script>

<style scoped>
/* Additional styling for active and hover states */
.router-link-active {
    color: #00A8CC;
}


a:hover {
    color: #00A8CC;
}

</style>
