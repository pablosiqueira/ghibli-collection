<template>
    <PageTitle title="Characters" imgName="title/characters.png" alt="Main characters from the Ghibli movies."/>
    <ViewFilter :fields="head()" @filter="onFilter"/>
    <ViewTable :dataObjs="base" :heads="head()" clickable="Film" link='/films/details?id=' @listen="onListen" linkID="film_id"/>


</template>

<script>
import {onMounted, reactive, toRefs} from 'vue'
import api from '@/services/api'
import PageTitle from '@/components/PageTitle'
import ViewTable from '@/components/ViewTable'
import ViewFilter from '@/components/ViewFilter'
import {filter,sort} from '@/functions/TableFunctions'
export default {
    name: 'Characters',
    components:{
      PageTitle,
      ViewTable,
      ViewFilter
    },
    setup(){
    const data = reactive({
      base: {},
      original: {}
    })
    onMounted(async () => {
      const response = await api.people()
      data.base = response.data
      data.original = response.data
      for(var i = 0; i < data.base.length; i++){ //adding film based on the field films
        var movie_url = data.base[i].films[0]
        const movie = await api.fullurl(movie_url)
        var a = movie.data.title
        var film_id = movie.data.id
        data.base[i].film = a
        data.base[i].film_id = film_id
      }
    })
    function head(){
      var ar = ['Name','Gender','Age','Eye Color','Hair Color','Film']
      return ar
    }
    function onListen(title,arrow){
      data.base = sort(title,arrow,data.base)
    }
    function onFilter(field,term){
      data.base = filter(field,term,data.original)
    }
    return {...toRefs(data),head,onListen,onFilter}
    }
    
}
</script>

<style scoped>
.main-img{
  max-height: 300px;
  display: block;
  margin-inline: auto;
}
</style>