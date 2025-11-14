<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    current: { type: Boolean, required: true },
});

const emit = defineEmits<{
    (e: "handle-clicked"): void;
}>();
</script>

<template>
    <button type="button" class="h-[60px] rounded-full cursor-pointer w-[200px] text-[16px]" v-bind:class="[current ? 'border border-primary-orange font-bold' : '']" v-on:click="emit('handle-clicked')">{{ props.label }}</button>
</template>

<style scoped></style>
