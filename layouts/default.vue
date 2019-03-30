<template>
  <div>
    <Toolbar/>
    <nuxt/>
  </div>
</template>

<script>
import Toolbar from "~/components/Toolbar.vue";
export default {
  name: "default",
  components: {
    Toolbar
  }
};
</script>

<style>
</style>
