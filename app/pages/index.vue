<script setup lang="ts"></script>

<template>
    <HomeTopCard v-on:handle-submitted="(inputValue: string) => onClicked(inputValue)"></HomeTopCard>
    <div class="py-7"><HomeStatisticCard></HomeStatisticCard></div>
</template>

<style scoped></style>
