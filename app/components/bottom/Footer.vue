<script setup lang="ts">
const inputValue = useState<string>(uuidv4(), () => "");
function submitted() {
    onClicked(inputValue.value);
}
</script>

<template>
    <div class="bg-footer-gray-60 p-14 flex items-center">
        <div class="flex flex-col flex-1">
            <div><NuxtImg src="/images/LOGO 2(1).png" height="66"></NuxtImg></div>
            <div><NuxtImg src="/images/Group.png" height="53" class="py-7"></NuxtImg></div>
            <div class="text-[15px]">Company # 490039-445, Registered with House of companies.</div>
        </div>
        <div class="flex flex-col pl-7">
            <div class="footer-head pb-7">Get Exclusive Deals in your Inbox</div>
            <div class="flex items-center rounded-full bg-footer-gray">
                <input v-model="inputValue" type="text" placeholder="youremail@gmail.com" class="border-none outline-none pl-7 pr-4 w-[280px] h-[60px]" v-on:keyup.enter="submitted()" />
                <button type="submit" class="h-[60px] bg-primary-orange rounded-full px-10 text-[18px] font-medium text-white cursor-pointer" v-on:click="submitted()">Subscribe</button>
            </div>
            <div class="pt-2 pl-7 text-[12px] text-primary-black"><span>we wont spam, read our&nbsp;</span><span class="underline cursor-pointer" v-on:click="onClicked('holaaa')">email policy</span></div>
            <div class="pt-7 pl-7 flex items-center gap-x-4">
                <Icon name="ri:facebook-circle-fill" style="color: black" size="40px" class="cursor-pointer" v-on:click="onClicked('holaaa')"></Icon>
                <Icon name="ri:instagram-fill" style="color: black" size="40px" class="cursor-pointer" v-on:click="onClicked('holaaa')"></Icon>
                <Icon name="ri:tiktok-fill" style="color: black" size="40px" class="cursor-pointer" v-on:click="onClicked('holaaa')"></Icon>
                <Icon name="ri:snapchat-line" style="color: black" size="40px" class="cursor-pointer" v-on:click="onClicked('holaaa')"></Icon>
            </div>
        </div>
        <div class="flex flex-col pl-10">
            <div class="footer-head">Legal Pages</div>
            <NuxtLink to="/" class="footer-link">Terms and conditions</NuxtLink>
            <NuxtLink to="/" class="footer-link">Privacy</NuxtLink>
            <NuxtLink to="/" class="footer-link">Cookies</NuxtLink>
            <NuxtLink to="/" class="footer-link">Modern Slavery Statement</NuxtLink>
        </div>
        <div class="flex flex-col pl-10">
            <div class="footer-head">Important Links</div>
            <NuxtLink to="/" class="footer-link">Get help</NuxtLink>
            <NuxtLink to="/" class="footer-link">Add your restaurant</NuxtLink>
            <NuxtLink to="/" class="footer-link">Sign up to deliver</NuxtLink>
            <NuxtLink to="/" class="footer-link">Create a business account</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.footer-link {
    color: black;
    font-size: 15px;
    text-decoration: underline;
    padding-top: 14px;
}

.footer-head {
    color: var(--color-primary-black);
    font-size: 18px;
    font-weight: bold;
}
</style>
