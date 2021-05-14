<template>
<PageTitle title="Films"/>

<div v-if="cut.length == 0" class="container">
<img src="@/assets/title/bits.png" class="img-responsive error-img" alt="Six mini forest spirits aligned in a row.">
<h4  class="text-center">Nothing Here! Please review the page number.</h4>
<button @click="$router.go(-1)" class="btn btn-primary p-centered"><i class="icon icon-back"></i> Go Back</button>
</div>

<div class="container" id = "film-grid">
  <div class="columns">
    <div v-for="(film,key) in cut" :key="key" class="column col-auto col-sm-6 col-xs-12 center">
      <Card :title="film.title" :romanji="film.original_title_romanised" :year="film.release_date" :director="film.director" 
      :id="film.id" />
    </div>
    <div v-for="(placeholder,key) in placeHolderSize()" :key="key" class="column col-auto col-sm-6 col-xs-12 center hide placeholder">
      <Card title="arrietty" romanji="placehoder" year="9999" director="..." id="111"/>
    </div>
  </div>
</div>

<Pagination :page="thisPage()" :dataSize="dataSize()"/>

</template>

<script>
import {onMounted, reactive, toRefs} from 'vue'
import { useRoute } from 'vue-router';
import api from '@/services/api'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
export default {
  name: 'Films',
  components: {
    Card,
    PageTitle,
    Pagination
  },
  props: {
    page: {
      //http://localhost:8080/films?id=1
      type: String,
      default: null
    }, 

  },
  setup() {
    const route = useRoute()
    console.log(route)
    const data = reactive({
      films: {},
      cut: {},
    })
    onMounted(async () => {
      window.scrollTo(0, 0)
      const response = await api.all()
      data.films = response.data
      sliceData()
    })
    function placeHolderSize(){
      var a = Object.keys(this.cut).length
      var rest = 8 - a
      var array = Array(rest).fill(1)
      return array
    }
    function thisPage(){
      var currentPage = route.query.page
      return currentPage
    }
    function dataSize(){
      var size = Object.keys(this.films).length
      return size
    }
    function sliceData(){
      var pageNow = route.query.page
      if(pageNow == undefined){
        pageNow = 1
      }
      var begin = (pageNow-1)*8
      var end = begin + 8 
      data.cut = data.films.slice(begin,end)
    }
    return {...toRefs(data),placeHolderSize,thisPage, dataSize, sliceData}
  },
  watch: {
  '$route' () { //Act when the route changes to show another page
    this.sliceData()
    window.scrollTo(0, 0)
  }
}
}
</script>

<style scoped>
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.column{
  margin-inline: auto;
  padding-top: .5rem;
}
#film-grid{
  max-width: 1300px;
}
.hide{
  visibility: hidden;
  height: 0;
}
.error-img{
  max-height: 300px;
  display: block;
  margin-inline: auto;
}
h4{
  color: red
}
button{
  background-color: red!important;
  border-color: black!important;
}
</style>