<script setup lang="ts">
const emit = defineEmits<{
    (e: "handle-clicked"): void;
}>();
</script>

<template>
    <button class="h-15 rounded-full px-7 cursor-pointer bg-primary-black flex justify-center items-center" v-on:click="emit('handle-clicked')">
        <Icon name="ri:account-circle-fill" size="24px" class="text-primary-orange"></Icon>
        <div class="pl-3 text-[18px] font-medium text-white">Login/Signup</div>
    </button>
</template>

<style scoped></style>
