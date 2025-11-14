<script setup lang="ts">
const { currentAbout, setNewAbout } = useCurrentAbout();
const { currentFrequent, setNewFrequent } = useCurrentFrequent();
</script>

<template>
    <div class="bg-footer-gray-30 rounded-2xl pl-20 pb-14 pr-14 flex flex-col">
        <div class="flex items-center pt-24 pb-14">
            <div class="text-[32px] font-bold flex-1">Know more about us!</div>
            <HomeAboutOutlineButton label="Frequent Questions" v-bind:current="currentAbout === CurrentAbount.Frequent" v-on:handle-clicked="setNewAbout(CurrentAbount.Frequent)"></HomeAboutOutlineButton>
            <div class="pl-2"><HomeAboutOutlineButton label="Who we are?" v-bind:current="currentAbout === CurrentAbount.Who" v-on:handle-clicked="setNewAbout(CurrentAbount.Who)"></HomeAboutOutlineButton></div>
            <div class="pl-2"><HomeAboutOutlineButton label="Partner Program" v-bind:current="currentAbout === CurrentAbount.Partner" v-on:handle-clicked="setNewAbout(CurrentAbount.Partner)"></HomeAboutOutlineButton></div>
            <div class="pl-2"><HomeAboutOutlineButton label="Help & Support" v-bind:current="currentAbout === CurrentAbount.Help" v-on:handle-clicked="setNewAbout(CurrentAbount.Help)"></HomeAboutOutlineButton></div>
        </div>
        <div class="bg-white rounded-2xl pl-8 pt-8 pb-8 pr-7 flex">
            <div class="flex flex-col items-center w-[1000px]">
                <HomeAboutFilledButton label="How does Order.UK work?" v-bind:current="currentFrequent === CurrentFrequent.How" v-on:handle-clicked="setNewFrequent(CurrentFrequent.How)"></HomeAboutFilledButton>
                <div class="pt-2">
                    <HomeAboutFilledButton label="What payment methods are accepted?" v-bind:current="currentFrequent === CurrentFrequent.What" v-on:handle-clicked="setNewFrequent(CurrentFrequent.What)"></HomeAboutFilledButton>
                </div>
                <div class="pt-2">
                    <HomeAboutFilledButton label="Can I track my order in real-time?" v-bind:current="currentFrequent === CurrentFrequent.Can" v-on:handle-clicked="setNewFrequent(CurrentFrequent.Can)"></HomeAboutFilledButton>
                </div>
                <div class="pt-2">
                    <HomeAboutFilledButton
                        label="Are there any special discounts or promotions available?"
                        v-bind:current="currentFrequent === CurrentFrequent.Are"
                        v-on:handle-clicked="setNewFrequent(CurrentFrequent.Are)"
                    ></HomeAboutFilledButton>
                </div>
                <div class="pt-2">
                    <HomeAboutFilledButton label="Is Order.UK available in my area?" v-bind:current="currentFrequent === CurrentFrequent.Is" v-on:handle-clicked="setNewFrequent(CurrentFrequent.Is)"></HomeAboutFilledButton>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex"></div>
                <div>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
