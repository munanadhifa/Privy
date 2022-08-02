<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#FF6E5D",
  },
  height: {
    type: String,
    default: "40px",
  },
  width: {
    type: String,
    default: "auto",
  },
});
</script>

<template>
  <div class="container-toast">
    <div
      class="prx-toast"
      role="toast"
      :style="{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${color}`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-toast {
  @apply absolute left-64 top-28;
}
.prx-toast {
  @apply flex items-center text-white text-sm font-normal px-4 h-12 rounded-lg;
}
</style>
