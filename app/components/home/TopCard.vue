<script setup lang="ts">
const emit = defineEmits<{
    (e: "handle-submitted", value: string): void;
}>();

const inputValue = useState<string>(uuidv4(), () => "");
function submitted() {
    emit("handle-submitted", inputValue.value);
}
</script>

<template>
    <div class="h-[610px] bg-top-gray border border-blk-op-20 rounded-2xl flex flex-col justify-center items-start pl-10 relative">
        <div class="text-primary-black">Order Restaurant food, takeaway and groceries.</div>
        <div class="text-primary-black text-[54px] font-semibold">Feast Your Senses,</div>
        <div class="text-primary-orange text-[54px] font-semibold leading-none">Fast and Fresh</div>
        <div class="text-primary-black text-[13px] pt-10 pb-2">Enter a postcode to see what we deliver</div>
        <div class="bg-white h-14 border-t border-l border-b border-blk-op-40 flex items-center rounded-full z-10">
            <input v-model="inputValue" type="text" placeholder="e.g. EC4R 3TE" class="flex-1 border-none outline-none pl-7 pr-4 w-60" v-on:keyup.enter="submitted()" />
            <button type="submit" class="h-14 bg-primary-orange rounded-full px-16 text-[16px] font-bold text-white cursor-pointer" v-on:click="submitted()">Search</button>
        </div>
        <div class="absolute h-[565px] w-[626px] -bottom-px -right-px bg-primary-orange rounded-br-2xl rounded-tl-[300px]"></div>
        <NuxtImg src="/images/Untitled-2 1.png" height="455" class="absolute -bottom-px right-60"></NuxtImg>
        <NuxtImg src="/images/Untitled-1 1.png" height="537" class="absolute -bottom-px right-[300px]"></NuxtImg>
        <HomeStepCard v-bind:step="1" label="We've received your order!" body="Awaiting Restaurant acceptance" class="absolute right-[90px] top-[45px]"></HomeStepCard>
        <HomeStepCard v-bind:step="2" label="Order Accepted! ✅" body="Your order will be delivered shortly" class="absolute right-6 top-[200px]"></HomeStepCard>
        <HomeStepCard v-bind:step="3" label="Your rider's nearby 🎉" body="They're almost there - get ready!" class="absolute bottom-12 right-14"></HomeStepCard>
    </div>
</template>

<style scoped></style>
