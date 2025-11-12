<script setup lang="ts">
const { currentNavigation, setNewNav } = useCurrentNavigation();
</script>

<template>
    <div class="h-16 flex items-center">
        <NuxtImg src="/images/LOGO 1.png" height="56"></NuxtImg>
        <div class="flex-1"></div>
        <div class="pr-3"><TopNavButton label="Home" v-bind:current="currentNavigation === CurrentNavigation.Home" v-on:handle-clicked="setNewNav(CurrentNavigation.Home)"></TopNavButton></div>
        <div class="pr-3"><TopNavButton label="Browse Menu" v-bind:current="currentNavigation === CurrentNavigation.BrowseMenu" v-on:handle-clicked="setNewNav(CurrentNavigation.BrowseMenu)"></TopNavButton></div>
        <div class="pr-3"><TopNavButton label="Special Offers" v-bind:current="currentNavigation === CurrentNavigation.SpecialOffers" v-on:handle-clicked="setNewNav(CurrentNavigation.SpecialOffers)"></TopNavButton></div>
        <div class="pr-3"><TopNavButton label="Restaurants" v-bind:current="currentNavigation === CurrentNavigation.Restaurants" v-on:handle-clicked="setNewNav(CurrentNavigation.Restaurants)"></TopNavButton></div>
        <div class="pr-3"><TopNavButton label="Track Order" v-bind:current="currentNavigation === CurrentNavigation.TrackOrder" v-on:handle-clicked="setNewNav(CurrentNavigation.TrackOrder)"></TopNavButton></div>
        <TopLoginButton v-on:handle-clicked="onClicked('Login')"></TopLoginButton>
    </div>
</template>

<style scoped></style>
