<template>
    <div class="mx-2 table-div">
  <table class="table table-striped table-hover text-center" id="ghibli_table">
  <thead>
    <tr>
      <th>#</th>
      <th v-for="(head,key) in heads" :key="key">
        {{head}}
        <div class="arrows">
          <i class="icon icon-upward" :id="'asc_' + key" @click="combine('asc',key,heads[key])"></i>
          <i class="icon icon-downward" :id="'desc_' + key" @click="combine('desc',key,heads[key])"></i>
        </div>
      </th>  
    </tr>
  </thead>
  <tbody>
    <tr v-for="(dataObj,key) in dataObjs" :key="key">
      <td>{{key + 1}}</td>
      <td v-for="(head,key) in heads" :key="key" >
        <router-link v-if="head == clickable"  :to = "{ name:'Details' , query: { id: dataObj[linkID] },
        params: {title: dataObj[normalize(head)]} }"
        class="link">{{dataObj[normalize(head)]}}</router-link>
        <section v-else>{{dataObj[normalize(head)]}}</section>
        </td>
    </tr>
  </tbody>
</table>
</div>
    
</template>

<script>
export default {
    name: 'ViewTable',
    props:{
        dataObjs: {
            type: Object,
            required: true
        },
        heads: {
            type: Object,
            required: true
        },
        clickable: {type: String},
        link: {type: String},
        linkID: {type: String}
    },
    emits: ['listen'],
    setup(props, { emit }) {
        function normalize(field){
          var a = String(field)
          var my_field = a.toLowerCase().replace(/\s+/g,"_");
          return my_field
        }
        function arrowStyle(arrow,key){
          var targetId = arrow +'_'+ key;
            var arrows = document.getElementsByClassName('icon');
            for (var i = 0; i < arrows.length; i++){
              if(arrows[i].style.color == "orange"){
                arrows[i].style.color = "";
              }
            }
            document.getElementById(targetId).style.color = "orange";
        }
        function combine(arrow,key,title){
          arrowStyle(arrow,key);
          emit('listen',title,arrow);
        }
        return {normalize,arrowStyle,combine}
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
i{
    cursor: pointer;
    font-size: small;
    padding-inline: .5rem;
}
.arrows{
  display: inline-flex;
}
.table-div{
  overflow-x:auto;
  padding-bottom: 1rem;
}
table{
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: 'Roboto Slab', serif;
  color: #141450;
  font-size: large;
}
th{
  background-color: #610f35;
  color: white;
}
.link{
  color:#610f35;
  text-decoration: underline;
  font-weight: 600;
}
</style>