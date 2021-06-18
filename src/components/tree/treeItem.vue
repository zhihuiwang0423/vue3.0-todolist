<template>
  <li class="subItem">
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder" class="fr"
        ><i
          :class="
            !isOpen ? 'el-icon-circle-plus-outline' : 'el-icon-remove-outline'
          "
        ></i
      ></span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
      <li class="add" @click="$emit('add-item', item)"><i class="el-icon-plus"></i></li>
    </ul>
  </li>
</template>
<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "treeItem",
  props: {
    item: { type: Object },
  },
  emits: ["make-folder", "add-item"],
  setup(props, ctx) {
    let isFolder = computed(() => {
      return props.item.children && props.item.children.length;
    });
    let isOpen = ref(false);
    let toggle = () => {
      if (isFolder.value) {
        isOpen.value = !isOpen.value;
      }
    };
    let makeFolder = () => {
      if (!isFolder.value) {
        isOpen.value = true;
        ctx.emit("make-folder", props.item);
      }
    };
    return {
      isFolder,
      isOpen,
      toggle,
      makeFolder,
    };
  },
});
</script>
<style scoped lang="scss">
.subItem {
  list-style: none;
  .fr {
    float: right;
  }
}
.add{
  list-style:none;
}
</style>