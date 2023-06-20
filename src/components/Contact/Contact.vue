<template>
   <div class="px-[148px]  justify-between bg-white py-[37px]">
      
        <div class="flex bg-[#99def2] rounded-xl flex">
            <div class="pl-[110px] pt-[80px] pb-[200px] w-[40%] relative flex flex-col justify-between items-start gap-10 text-[20px] ">
                <div class="flex items-center w-full">
                    <h2 class="text-[34px] font-[600]">CONTACT</h2>
                    <div class="border-2 border-black w-full h-[2px]">
                        
                    </div>


                </div>
                <p class="flex items-center"><i class='bx bx-phone text-[24px] mr-3'></i> +998990771689</p>
                <p class="flex items-center"><i class='bx bx-envelope text-[24px] mr-3'></i>a.fakhriddin@gmail.com</p>
                <p class="flex items-center"><i class='bx bx-current-location text-[24px] mr-3'></i> Uzbekistan, Tashkent</p>
                <div class="border-2 border-black w-[70%] h-[2px] absolute bottom-[70px] left-0">
                        
                </div>
            </div>
            <!-- <div class="w-[60%] px-[66px] py-[80px] grid grid-cols-5 gap-[55px]">  -->
                    
                <form @submit.prevent="sendMessage" class="w-[60%] px-[66px] py-[80px] grid grid-cols-5 gap-[30px]">
                    <div class="col-span-2">
                        <label for="start" class="block mb-2 text-sm font-medium">Your name</label>
                        <input type="text" v-model="message.username" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-3">
                        <label for="start" class="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" v-model="message.email" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-5">
                        <label for="start" class="block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" v-model="message.subject" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-5">
                        <label for="start" class="block mb-2 text-sm font-medium">Message</label>
                        <textarea rows="5" cols="" v-model="message.message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-600 block w-full p-2"></textarea>
                        <!-- <textarea type="text" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-600 block w-full p-2" placeholder="" required=""> -->
                    </div>
                    <button type="submit" class="w-[100px] flex items-center justify-center gap-2 hover:text-white focus:ring-2 py-2 bg-[#ff8080fd] rounded-md"><i class='bx bx-mail-send'></i> Send</button>

                </form>
            <!-- </div> -->
            
        </div>
    </div>
</template>

<script setup>
import { useBot } from '../../service/bot';
import {reactive} from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const message = reactive({
    username: '',
    email: '',
    subject: '',
    message: ''
})

const sendMessage = () => {
    const newMessage = {
        username: message.username,
        email: message.email,
        subject: message.subject,
        message: message.message
    }

    try {
        useBot.send(newMessage).then((res)=>{
            if(res.data == true){
                message.username = '',
                message.email = '',
                message.subject = '',
                message.message = ''
                toast.success("Thank you for your email!!!",{ autoClose: 1300})
            }
            else{
                toast.error("Can not sent email ")
            }
        })
    } catch (error) {
            toast.error("Can not sent email ")
        
    }

}

</script>

<style lang="scss" scoped>

</style>