<template>
  <VModal :isActive="isActive" @click-modal="cancel">
    <div>
      <textarea
        class="input"
        v-model="tmp"
        required
        placeholder="JSON"
      ></textarea
      ><br />
      <VButton @click="ok">OK</VButton>
      <VButton class="danger" @click="cancel">Cancel</VButton>
    </div>
  </VModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isActive: Boolean,
    text: String
  },
  emits: ["ok", "cancel"],
  watch: {
    text(val) {
      this.tmp = val;
    }
  },
  data() {
    return {
      tmp: ""
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        text: this.tmp
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
});
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
}
</style>
