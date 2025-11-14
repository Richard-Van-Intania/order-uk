<script setup lang="ts"></script>

<template>
    <HomeTopCard v-on:handle-submitted="(inputValue: string) => onClicked(inputValue)"></HomeTopCard>
    <div class="pb-8 pt-8"><HomeAboutCard></HomeAboutCard></div>
    <div class="pb-8"><HomeStatisticCard></HomeStatisticCard></div>
</template>

<style scoped></style>
