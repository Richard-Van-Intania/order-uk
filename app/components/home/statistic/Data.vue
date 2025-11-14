<script setup lang="ts">
const props = defineProps({
    stat: { type: Number, required: true },
    label: { type: String, required: true },
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div>{{ props.stat }}+</div>
        <div>{{ props.label }}</div>
    </div>
</template>

<style scoped></style>
