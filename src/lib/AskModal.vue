<template>
  <VModal :isActive="isActive" @click-modal="cancel">
    <transition name="item">
      <div class="block">
        <div class="inner-block"><slot></slot></div>
        <VButton @click="ok">OK</VButton>
        <VButton class="danger" @click="cancel">Cancel</VButton>
      </div>
    </transition>
  </VModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isActive: Boolean
  },
  emits: ["ok", "cancel"],
  methods: {
    ok() {
      this.$emit("ok", true);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
});
</script>
<style lang="scss" scoped>
.inner-block {
  margin-bottom: 20px;
}
.block {
  padding: 40px;
}
input {
  margin-bottom: 5px;
}
.item-enter-active {
  transition: all 0.8s ease;
}
.item-leave-active {
  transition: all 0.3s ease;
}
.item-enter,
.item-leave-to {
  opacity: 0;
}
</style>
