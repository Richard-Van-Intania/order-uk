<script setup lang="ts"></script>

<template>
    <div class="bg-primary-orange rounded-2xl px-14 py-7 flex justify-between">
        <HomeStatisticData v-bind:stat="546" label="Registered Riders"></HomeStatisticData>
        <div class="bg-footer-gray w-px"></div>
        <HomeStatisticData v-bind:stat="789900" label="Orders Delivered"></HomeStatisticData>
        <div class="bg-footer-gray w-px"></div>
        <HomeStatisticData v-bind:stat="690" label="Restaurants Partnered"></HomeStatisticData>
        <div class="bg-footer-gray w-px"></div>
        <HomeStatisticData v-bind:stat="17457" label="Food items"></HomeStatisticData>
    </div>
</template>

<style scoped></style>
