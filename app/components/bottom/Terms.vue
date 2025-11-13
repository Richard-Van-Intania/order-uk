<script setup lang="ts"></script>

<template>
  <div class="h-[72px] px-14 bg-primary-black flex items-center text-white text-[15px]">
    <div>Order.uk Copyright 2024, All Rights Reserved.</div>
    <div class="flex-1"></div>
    <button class="cursor-pointer" v-on:click="onClicked('Privacy')">Privacy Policy</button>
    <button class="pl-8 cursor-pointer" v-on:click="onClicked('Terms')">Terms</button>
    <button class="pl-8 cursor-pointer" v-on:click="onClicked('Pricing')">Pricing</button>
    <div class="pl-8">Do not sell or share my personal information</div>
  </div>
</template>

<style scoped></style>
