<script setup lang="ts">
const { currentAbout, setNewAbout } = useCurrentAbout();
</script>

<template>
    <div class="bg-footer-gray-30 rounded-2xl pl-20 pb-14 pr-14 flex flex-col">
        <div class="flex items-center pt-24 pb-14">
            <div class="text-[32px] font-bold flex-1">Know more about us!</div>
            <HomeAboutOutlineButton label="Frequent Questions" v-bind:current="currentAbout === CurrentAbount.Frequent" v-on:handle-clicked="setNewAbout(CurrentAbount.Frequent)"></HomeAboutOutlineButton>
            <div class="pl-1"><HomeAboutOutlineButton label="Who we are?" v-bind:current="currentAbout === CurrentAbount.Who" v-on:handle-clicked="setNewAbout(CurrentAbount.Who)"></HomeAboutOutlineButton></div>
            <div class="pl-1"><HomeAboutOutlineButton label="Partner Program" v-bind:current="currentAbout === CurrentAbount.Partner" v-on:handle-clicked="setNewAbout(CurrentAbount.Partner)"></HomeAboutOutlineButton></div>
            <div class="pl-1"><HomeAboutOutlineButton label="Help & Support" v-bind:current="currentAbout === CurrentAbount.Help" v-on:handle-clicked="setNewAbout(CurrentAbount.Help)"></HomeAboutOutlineButton></div>
        </div>
        <div class="h-[526px] bg-white rounded-2xl pl-8 pt-8 pb-8 pr-7 flex"></div>
    </div>
</template>

<style scoped></style>
