<template>
    <div class="container p-centered mt-1 ctg">
  <h2 class="text-center"><b>Categories</b></h2>
  <div class="columns">
    <div v-for="(ctg,key) in categories()" :key="key" class="column col-4 col-xs-12">
      <router-link :to="ctgUrl(ctg)">
        <img :src="require('@/assets/categories/' + ctg + '.png')" class="p-centered img-resize img-responsive" :alt="alternative()[key]">
        <h3 class="text-center">{{ctg}}</h3>
      </router-link>
    </div>
  </div>
</div> 
<div class="divider p-centered"></div>
<h4 class="text-center">All Ghibli Films from 1986 - 2016</h4>
</template>

<script>
export default {
    name: 'Categories',
    setup() {
      function categories(){
        var ctgs = ['Films','Characters','Films Table']
        return ctgs
      }
      function alternative(){
        var alt = ['Ghibli movies posters aligned in a grid.',
        'The father and his two daughters riding a bycicle. They are from the movie My Neighbor Totoro.'
        ,"The Howl's moving castle."]
        return alt
      }
      function ctgUrl(name){
        var url = '/' + name.toLowerCase().replace(/\s+/g,"/");
        return url
      }       
      return {categories,ctgUrl,alternative}
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Mulish:wght@500&display=swap');
.divider{
  border-color: #610f35!important;
  max-width: 600px;
}
h3, h2{
  font-family: 'Mulish', sans-serif;
}
h2, h4{
  color: #610f35;
}
.ctg{
  max-width: 1200px;
}
.img-resize{
  max-height: 280px;
  transition: transform .2s;
}
.img-resize:hover{
  transform: scale(1.1);
}
h3{
  padding-top: .9rem;
  color: #141450;
}
</style>