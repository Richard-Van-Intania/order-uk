<script setup lang="ts">
const props = defineProps({
    stat: { type: Number, required: true },
    label: { type: String, required: true },
});
</script>

<template>
    <div class="flex flex-col items-center text-white">
        <div class="text-[64px] font-light leading-none">{{ formatNumber(props.stat) }}+</div>
        <div class="text-[24px] font-bold">{{ props.label }}</div>
    </div>
</template>

<style scoped></style>
