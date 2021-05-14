<template>
<header class="navbar">
    <div id="nav" class="fullsize">
    <router-link to="/home" class="title">Ghibli Database</router-link>
    <router-link to="/home" class="link">Home</router-link>
    <router-link to="/films" class="link">Films</router-link>
    <router-link to="/characters" class="link">Characters</router-link>
    <router-link to="/films/table" class="link">Films Table</router-link>
    <a href="https://pablosiqueira.github.io/" target="_blank" class="link author">by Pablo Siqueira</a>
    </div>
    <i class="icon icon-menu" @click="expand()"></i>
</header>

  <div class="container banner">
    <img alt="Studio Ghibli logo" class="p-centered img-main img-responsive" src="@/assets/banner/ghibli.png" id="">
  </div>

</template>

<script>
export default {
    setup() {
        function expand(){
            var nav = document.getElementById('nav')
            if (nav.className === 'fullsize'){
                nav.className += ' responsive'
            }else{
                nav.className = 'fullsize'
            }
        }
        return {expand}
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Mulish:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
.img-main{
    max-height: 200px;
}
.banner{
    background-color: #1C77A3FF;
    padding-top: 2rem;
}
header{
    background-color: #610f35;
    position: fixed;
    width: 100%;
    min-height: 40px;
    overflow: hidden;
}
i{
    display: none;
    color: white;
}
.fullsize{
    display: flex;
    padding-top: .3rem;
}
a, .link, .title{
    color: white;
    margin-inline: .4rem;
}
a:hover{
    color: #e2dd3f;
    text-decoration: none;
}
a:visited{
    text-decoration: none;
}
.link{
    margin-top: .06rem;
}
.title{
    font-family: 'Fredoka One', cursive;
    font-size: larger;
}
.author{
    font-style: italic;
}
a{
    font-family: 'Roboto Slab', serif;
    font-size: large;
}
@media screen and (min-width: 701px) {
    .author {
        position: absolute;
        right: 0;
    }
}
@media screen and (max-width: 700px) {
    .link {display: none;}
    .title{white-space: nowrap;}
    .icon {
    float: right;
    display: block;
    margin-right: .6rem;
    margin-top: .6rem;
  }
}
@media screen and (max-width: 600px) {
  .responsive {position: relative;}
  .responsive {
      flex-direction: column;
  }
  .responsive .link {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>