<script setup lang="ts"></script>

<template>
    <TopBanner></TopBanner>
    <div class="px-14">
        <div class="h-[70px]"></div>
        <div class="py-8"><TopNav></TopNav></div>
        <slot></slot>
    </div>
    <BottomFooter></BottomFooter>
    <BottomTerms></BottomTerms>
</template>

<style scoped></style>
