import NavBar from '@/components/NavBar';
<template>
<div>
  <nav class="navbar navbar-expand-md navbar-light bg-trans fixed-top">
    <div class="container">
      <a class="navbar-brand" href="os-beta.web.app">
        <img src="../assets/logo.svg" alt="logo" width="78px" height="46px">
      </a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  background-color: #fff;
}
</style>
