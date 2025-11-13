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
  <button class="h-12 rounded-full px-6 cursor-pointer text-[18px] font-medium" v-bind:class="[current ? 'text-white bg-primary-orange' : 'text-black bg-white']" v-on:click="emit('handle-clicked')">
    {{ props.label }}
  </button>
</template>

<style scoped></style>
