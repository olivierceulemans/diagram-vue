<template>
  <select :value="modelValue" :multiple="multiple" @change="onChange($event)">
    <option class="placeholder" :value="null" disabled>
      {{ placeholder }}
    </option>
    <slot></slot>
  </select>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VSelect",
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    onChange(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
});
</script>
<style lang="scss" scoped>
select {
  border: 1px solid #eeeeee;
  padding: 5px 10px;
  background: transparent;
  option {
    padding: 5px;
  }
  .placeholder {
    display: none;
  }
}
</style>
