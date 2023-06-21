<template>
   <div class="px-3 lg:px-[148px] min-h-[calc(100vh-190px)]  justify-between bg-white py-[15px]">
      
        <div class=" lg:flex bg-[#bdecf9] rounded-xl">
            <div class=" pl-4 lg:pl-[110px] pt-[40px] pb-[150px] lg:pb-[200px] lg:w-[40%] relative flex flex-col justify-between items-start gap-10 text-[20px] ">
                <div class="flex items-center w-full">
                    <h2 class="text-[34px] font-[600]">CONTACT</h2>
                    <div class="border-2 border-black w-full h-[2px]">
                    </div>

                </div>
                <p class="flex items-center"><i class='bx bx-phone text-[24px] mr-3'></i>+998990771689</p>
                <p class="flex items-center"><i class='bx bx-envelope text-[24px] mr-3'></i>a.fakhriddin@gmail.com</p>
                <p class="flex items-center"><i class='bx bx-current-location text-[24px] mr-3'></i> Uzbekistan, Tashkent</p>
                <div class="border-2 border-black w-[70%] h-[2px] absolute bottom-[70px] left-0">
                        
                </div>
            </div>
                    
                <form @submit.prevent="sendMessage" class=" lg:w-[60%] px-4 lg:px-[66px] pt-[10px] lg:pt-[40px] pb-[40px] grid grid-cols-5 gap-[10px]">
                    <div class="col-span-2">
                        <label for="start" class="block mb-2 text-sm font-medium">Your name</label>
                        <input type="text" v-model="message.username" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-3">
                        <label for="start" class="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" v-model="message.email" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-5">
                        <label for="start" class="block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" v-model="message.subject" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 block w-full p-2" placeholder="" required="">
                    </div>
                    <div class="col-span-5">
                        <label for="start" class="block mb-2 text-sm font-medium">Message</label>
                        <textarea rows="5" cols="" v-model="message.message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 block w-full p-2"></textarea>
                    </div>

                    <button type="submit" class=" w-[100px] h-[40px] flex items-center justify-center gap-2 hover:text-white focus:ring-2  bg-[#f29494fd] rounded-lg"><i class='bx bx-mail-send'></i> Send</button>
                </form>
            
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