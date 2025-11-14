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
    <button type="button" class="rounded-full cursor-pointer text-[18px] font-bold py-5 px-7" v-bind:class="[current ? 'bg-primary-orange' : 'bg-white']" v-on:click="emit('handle-clicked')">{{ props.label }}</button>
</template>

<style scoped></style>
