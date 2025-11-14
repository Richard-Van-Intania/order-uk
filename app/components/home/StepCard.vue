<script setup lang="ts">
const props = defineProps({
    step: { type: Number, required: true },
    label: { type: String, required: true },
    body: { type: String, required: true },
});
</script>

<template>
    <div class="h-[180px] w-[320px]">
        <div class="relative h-full w-full">
            <div class="selector absolute right-6 top-2">{{ step }}</div>
            <div class="absolute bg-white rounded-2xl bottom-0 left-0 right-0 px-5 py-4 flex">
                <div class="flex flex-col">
                    <div class="pt-1"><NuxtImg src="/images/LOGO 2.png" height="16"></NuxtImg></div>
                    <div class="text-[12px] font-semibold pt-2.5">{{ label }}</div>
                    <div class="text-[12px] text-blk-op-80 pt-0.5">{{ body }}</div>
                </div>
                <div class="flex-1"></div>
                <div class="text-[12px] text-now-gray">now</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.selector {
    font-size: 68px;
    font-weight: 600;
    color: transparent;
    -webkit-text-stroke: 1px white;
}
</style>
