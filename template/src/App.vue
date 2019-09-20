<template>
  <div id="app">
    <el-menu 
      :default-active="activeIndex" 
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/demo">
        <template slot="title">test</template>
        <el-menu-item index="/demo/test">test</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view class="main-route"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data(): any {
    return {
      activeIndex: '/',
    };
  },
  watch: {
    '$route.path'(val) {
      this.$nextTick(() => {
        if (this.activeIndex !== val) {
          this.activeIndex = val;
        }
      });
    },
  },
});
</script>
