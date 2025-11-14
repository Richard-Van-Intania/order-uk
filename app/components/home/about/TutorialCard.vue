<script setup lang="ts">
const props = defineProps({
    top: { type: String, required: true },
    source: { type: String, required: true },
    bottom: { type: String, required: true },
});
</script>

<template>
    <div class="bg-footer-gray rounded-2xl w-60 flex flex-col items-center py-7 px-4">
        <div class="text-[18px] font-bold">{{ props.top }}</div>
        <div class="py-4"><NuxtImg v-bind:src="props.source" height="136"></NuxtImg></div>
        <div class="text-[16px] font-medium text-center">{{ props.bottom }}</div>
    </div>
</template>

<style scoped></style>
