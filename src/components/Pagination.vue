<template>
 
<ul class="pagination">
  <li class="page-item" id="btn-1" @click="nextPrev(1)" >
    <router-link :to="'/films?page=' + (getPage() - 1) "> <a>Previous</a> </router-link>
  </li>
  <li v-for="(item,key) in pageArray" :key="key" class="page-item" :id="'li_' + (key+1)" @click="clicked(key+1)">
    <router-link :to="'/films?page=' + (key + 1) "> <a :id="'b_' + (key+1)" > {{key + 1}} </a> </router-link>
  </li>
  <li class="page-item" id="btn-3" @click="nextPrev(3)">
    <router-link :to="'/films?page=' + (getPage() + 1) "> <a> Next </a> </router-link>
  </li>
</ul>

</template>

<script>
import {onMounted} from 'vue'
export default {
    name: 'Pagination',
    props:{
        page:{
            type: String
        },
        dataSize:{
            type: Number
        }
    },
    setup(props) {
        onMounted(async () => {
            var a = props.page
            if (props.page == undefined){
                a = 1
            }
            clicked(a)
        })
        function clicked(id){
            for (var i = 0; i < 3; i++){
                if((i+1) == id){
                document.getElementById('li_'+ id).className = "page-item active"
                }else{
                document.getElementById('li_'+ (i+1)).className = "page-item"
                }
            }
            if(id == 1 || id == 3){
                if(id == 1){
                document.getElementById('btn-1').className = "page-item disabled"
                document.getElementById('btn-3').className = "page-item"      
                }else{ 
                document.getElementById('btn-1').className = "page-item"
                document.getElementById('btn-3').className = "page-item disabled"  
                }
            }else{
                document.getElementById('btn-1').className = "page-item"
                document.getElementById('btn-3').className = "page-item"
            }
        }

        function nextPrev(n){
            var btn_clicked = document.getElementById('btn-'+ n)
            if (btn_clicked.className != "page-item disabled"){
                var li
                for (var i = 1; i < 4; i++){
                    li = document.getElementById('li_'+ i)
                    if(li.className == 'page-item active'){
                        if(n == 1){
                            clicked(i-1)
                        }
                        else{ 
                            clicked(i+1) 
                        } 
                        break 
                }
            }
        }    
    }    
        function getPage(){ 
           var my_page = parseInt(props.page, 10);
           if(props.page == undefined){
               my_page = 1
           }
           return my_page 
        }
        return {clicked,nextPrev,getPage}
    },
    data(){
        return{
            pageArray: [1,2,3],
        }
    }
}
</script>

<style scoped>
.pagination{
    align-items: center;
    justify-content: center;
}
.pagination .page-item.active a {
    background-color: #4c2c5c;
    color: #fff;
}
a{
  color: #4c2c5c;
}
</style>