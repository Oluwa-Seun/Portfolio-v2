<template>
  <div id="app">
    <nav-bar/>
    <landing/>
    <Footer />
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";


export default {
  name: 'App',
  metaInfo: {
    title: "Os-Dev | Portfolio",
    meta: [
      {charset: "utf-8"},
      {name: "og:title", content: "Os-Dev | Portfolio"},
      {name: "og:url", content: "https://os-beta.web.app"},
      {name: "og:type", content: "website"},
      {name: "og:image", content: "https://os-beta.web.app/img/logo.png"},
      {name: "og:description", content: "A Software Developers Portfolio of Oluwaseun"},
      {name: "description", content: "A Software Developers Portfolio of Oluwaseun"},
      {name: "theme-color", content: "#FFB037"},
      {name: "keyword", content: "Portfolio, Software Developer, Web Developer, FitBit SmartWatch Developer, ios Developer, Developer, Frontend Developer"}
    ]
  },
  components: {
    NavBar,
    Landing,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(199, 199, 199, 0.1);
}
</style>
