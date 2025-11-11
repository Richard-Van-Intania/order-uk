<script setup lang="ts"></script>

<template>
    <div class="px-14">
        <TopBanner></TopBanner>
        <div class="h-[70px]"></div>
        <TopNav></TopNav>
        <slot></slot>
    </div>
    <BottomFooter></BottomFooter>
    <BottomTerms></BottomTerms>
</template>

<style scoped></style>
