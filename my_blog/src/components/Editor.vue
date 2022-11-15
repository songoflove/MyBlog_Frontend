<template>
 <div class="editor" :style="{width: width + 'px'}">
 
 </div>

 <el-icon><Back /></el-icon>
</template>

<script setup>
import { Back } from "@element-plus/icons-vue";
import {ref} from "vue"

const width = ref(window.innerWidth - 470);

</script>

<style lang="scss">
.editor {
    position: absolute;
    top: 190px;
    left: 100px;
    width: 100%;
    height: calc(100vh - 180px);
    background-color: #FCF3CF;
}
</style>