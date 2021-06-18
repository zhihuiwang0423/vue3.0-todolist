<template>
  <h1>树形视图</h1>
  <!-- the demo root element -->
  <ul id="demo">
    <tree-item
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    ></tree-item>
  </ul>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import TreeItem from "@/components/tree/treeItem";
export default defineComponent({
  name: "tree",
  components: {
    TreeItem,
  },
  setup() {
    // demo data
    let index = ref(0);
    let treeData = reactive({
      name: "My Tree",
      children: [
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [
            {
              name: "child folder",
              children: [{ name: "hello" }, { name: "wat" }],
            },
            { name: "hello" },
            { name: "wat" },
            {
              name: "child folder",
              children: [{ name: "hello" }, { name: "wat" }],
            },
          ],
        },
      ],
    });
    let makeFolder = (item) => {
      item.children = [];
      addItem(item);
    };

    let addItem = (item) => {
      item.children.push({
        name: "我是刚加入的" + index.value++,
      });
    };
    return {
      treeData,
      makeFolder,
      addItem,
      index,
    };
  },
});
</script>

<style scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style: none;
  text-align: left;
  border: 1px solid #eee;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}
</style>