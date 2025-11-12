<script setup lang="ts"></script>

<template>
    <div class="relative">
        <div class="absolute left-0 top-0 right-0 z-10 h-[70px] bg-nav-gray flex items-center border border-blk-op-10 rounded-b-2xl">
            <NuxtImg src="/images/stars.png" height="24" class="pl-8"></NuxtImg>
            <div class="text-base pl-4">Get 5% Off your first order,</div>
            <div class="text-base font-bold text-primary-orange underline pl-1 cursor-pointer" v-on:click="onClicked('Promo: ORDER5')">Promo: ORDER5</div>
            <div class="flex-1"></div>
            <div class="pl-5 pr-4 h-full bg-primary-green rounded-bl-2xl flex justify-center items-center cursor-pointer relative" v-on:click="onClicked('Promo: ORDER5')">
                <Icon name="ri:shopping-basket-fill" style="color: white" size="32px"></Icon>
                <Icon name="ri:checkbox-circle-fill" style="color: white" size="16px" class="absolute right-3 bottom-3 z-10"></Icon>
            </div>
            <div class="px-4 h-full bg-primary-green flex justify-center items-center text-[16px] font-semibold text-white border-l">23 Items</div>
            <div class="px-4 h-full bg-primary-green flex justify-center items-center text-[16px] font-semibold text-white border-x">GBP 79.89</div>
            <div class="px-4 h-full bg-primary-green rounded-br-2xl flex justify-center items-center cursor-pointer" v-on:click="onClicked('Promo: ORDER5')">
                <Icon name="ri:arrow-down-circle-fill" style="color: white" size="32px"></Icon>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
