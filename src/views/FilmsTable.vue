<template>
    <PageTitle title="Table of Films" imgName="title/walk.png" desc="1986 - 2016" alt="Totoro, mini Totoro and forest spirit walking in line."/>
    <ViewFilter :fields="heads()" @filter="onFilter"/>
    <ViewTable :dataObjs="films" :heads="heads()" clickable="Title" link='/films/details?id=' @listen="onListen" linkID="id"/>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ViewFilter from '@/components/ViewFilter'
import ViewTable from '@/components/ViewTable'
import {onMounted, reactive, toRefs} from 'vue'
import api from '@/services/api'
import {filter,sort} from '@/functions/TableFunctions'
export default {
    name: 'FilmsTable',
    components:{
        PageTitle,
        ViewFilter,
        ViewTable
    },
    setup() {
    const data = reactive({
      films: {},
      original: {}
    })
  onMounted(async () => {
      const response = await api.all()
      data.films = response.data
      data.original = response.data
    })
    function heads(){
      var ar = ['Title','Original Title','Original Title Romanised','Release Date','Running Time','RT Score']
      return ar
    }
    function onListen(title,arrow){
      data.films = sort(title,arrow,data.films)
    }
    function onFilter(field,term){
      console.log(field + ' ' + term)
      data.films = filter(field,term,data.original)
    }
    return {...toRefs(data),heads,onListen,onFilter}  
    },
}
</script>