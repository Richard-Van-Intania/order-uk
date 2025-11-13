<script setup lang="ts"></script>

<template>
  <div class="bg-footer-gray p-14 flex items-center">
    <div class="flex flex-col">
      <div><NuxtImg src="/images/LOGO 2(1).png" height="66"></NuxtImg></div>
      <div><NuxtImg src="/images/Group.png" height="53" class="py-7"></NuxtImg></div>
      <div class="text-[15px]">Company # 490039-445, Registered with House of companies.</div>
    </div>
    <div class="flex-1"></div>
    <div class="flex flex-col pl-14"><div class="footer-head">Get Exclusive Deals in your Inbox</div></div>
    <div class="flex flex-col pl-14">
      <div class="footer-head">Legal Pages</div>
      <NuxtLink to="/" class="footer-link">Terms and conditions</NuxtLink>
      <NuxtLink to="/" class="footer-link">Privacy</NuxtLink>
      <NuxtLink to="/" class="footer-link">Cookies</NuxtLink>
      <NuxtLink to="/" class="footer-link">Modern Slavery Statement</NuxtLink>
    </div>
    <div class="flex flex-col pl-14">
      <div class="footer-head">Important Links</div>
      <NuxtLink to="/" class="footer-link">Get help</NuxtLink>
      <NuxtLink to="/" class="footer-link">Add your restaurant</NuxtLink>
      <NuxtLink to="/" class="footer-link">Sign up to deliver</NuxtLink>
      <NuxtLink to="/" class="footer-link">Create a business account</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.footer-link {
  color: black;
  font-size: 15px;
  text-decoration: underline;
  padding-top: 14px;
}

.footer-head {
  color: var(--color-primary-black);
  font-size: 18px;
  font-weight: bold;
}
</style>
