<template>
  <footer class="relative py-6">
    <div
      class="
          absolute
          top-0
          left-0
          w-full
          h-full
          opacity-90
          bg-gradient-to-b
          from-cyan-900
          to-blue-900
        "
    ></div>
    <div
      class="
          relative
          am-section-content
          flex
          justify-between
          gap-8
          text-white text-sm
        "
    >
      <div class="flex gap-8">
        <div class="space-y-2 flex flex-col">
          <p><a class="hover:underline" href="#">About Amava</a></p>
          <p><a class="hover:underline" href="#">Team</a></p>
          <p><a class="hover:underline" href="#">News</a></p>
          <p><a class="hover:underline" href="#">Contact Us</a></p>
          <p><a class="hover:underline" href="#">FAQs</a></p>
          <p><a class="hover:underline" href="#">Gift Card</a></p>
          <p><a class="hover:underline" href="#">Jobs At Amava</a></p>
          <p><a class="hover:underline" href="#">Research</a></p>
        </div>
        <div class="space-y-2 flex flex-col">
          <p><a class="hover:underline" href="#">Class Listing</a></p>
        </div>
      </div>
      <div class="space-y-2 flex flex-col text-right">
        <p class="font-sans uppercase text-xs font-black tracking-widest">
          Connect with Amava
        </p>
        <p><a class="hover:underline" href="#">Facebook</a></p>
        <p><a class="hover:underline" href="#">Instagram</a></p>
        <p><a class="hover:underline" href="#">LinkedIn</a></p>
        <p><a class="hover:underline" href="#">Twitter</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter"
};
</script>
