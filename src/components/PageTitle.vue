<template>
    <div class="divider ctg p-centered up"></div>
    <h1 class="text-center">{{title}}</h1>
    <h3 v-if="desc" class="text-center">{{desc}} <a :href="linkUrl" target="_blank">{{linkTitle}}</a></h3>
    <div class="divider ctg p-centered"></div>
    <img v-if="imgName" :src="require('@/assets/' + imgName)" class="img-responsive main-img" :alt="alt">
</template>

<script>
export default {
    name: 'PageTitle',
    props:{
        title:{type: String},
        desc:{type: String},
        imgName:{type: String},
        linkTitle:{type: String},
        linkUrl:{type: String},
        alt:{type:String}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Mulish:wght@500&display=swap');
h1{
  font-family: 'Fredoka One', cursive;
  font-size: 50px;
  color: #610f35;
}
.divider{
  border-color: #610f35!important ;
  max-width: 600px;
}
.up{
  padding-top: 1rem;
}
.main-img{
  max-height: 300px;
  display: block;
  margin-inline: auto;
}
h3{
  color: #141450;
}
a{
  color: #046684!important;
  text-decoration: underline;
}
a:hover{
  color: #7737a6!important;
}
</style>