<template>
  <!-- Footer -->
  <footer class="yellow-box">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col col-custom">
            <a href="https://twitter.com/2alifa"><i class="fab fa-twitter fad-pad fa-lg"></i></a>
            <a href="https://github.com/Oluwa-Seun"><i class="fab fa-github fad-pad fa-lg"></i></a>
            <a href="https://www.behance.net/Os-dev/"><i class="fab fa-behance fad-pad fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/oluwaseun-olubiyi-b8763b1ba/"><i class="fab fa-linkedin fad-pad-2 fa-lg"></i></a>
            <h4><a class="mt-2 name-tag footer-link" href="https://www.osdev.xyz" target="_blank">© Os-Dev! 2022</a></h4>
          </div>
        </div>
      </div>
      </div>
      <!-- Grid row -->

  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.fad-pad {
  margin-right: 10px;
  margin-bottom: 10px;
  color: #FFFFFF;
  opacity: 0.7;
  filter: alpha(opacity=70);
}

.fad-pad-2 {
  margin-bottom: 10px;
  color: #FFFFFF;
  opacity: 0.7;
  filter: alpha(opacity=70);
}

.fad-pad-2:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}

.fad-pad:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 24px;
}
h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 8px;
  font-weight: 400;
  font-style: normal;
  color: rgba(255, 255, 255, 0.7);
}

.yellow-box {
   background-color: #000;
  padding: 30px;
  position: absolute;
  height: auto;
  width: 100%;
}

.name-tag {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #FFFFFF;

}

@media only screen and (max-width: 768px) {
  /* For Mobile Devices */
  .yellow-box {
    background-color: #000;
    padding: 20px;
    position: absolute;
    height: auto;
    text-align: center;
    width: 100%;
  }
}

.footer-link {
  text-decoration: none;
}

.col-custom {
  text-align: center;
}


</style>
