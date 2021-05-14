<template>
    <div class="card">
    <div class="card-image">
      <img :src="require('@/assets/posters/' + normTitle(title) + '.jpg')" class="img-responsive poster" :alt="title + ' japanese poster.'">
    </div>
    <div class="card-header text-center">
      <div class="card-title h5"><b>{{title}}</b></div>
      <div class="card-subtitle"><i>{{romanji}}</i></div>
    </div>
    <div class="card-body itens">
      <ul>
        <li><b>Year:</b> {{year}}</li>
        <li><b>Director:</b> {{director}}</li>
      </ul>
    </div>
    <div class="card-footer">
      <router-link :to="{name:'Details', query: { id: id }, params: {title: title}}">
        <button class="btn p-centered">Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {type: String},
    romanji: {type: String},
    year: {type: String},
    director: {type: String},
    id: {type: String},
  },
  setup() {
    function normTitle(x){ //convert title to lowercase and replacing spaces by _
      var new_title = x.toLowerCase().replace(/\s+/g,'_')
      return new_title
    }
    return {normTitle}
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
.card{
  font-family: 'Roboto Slab', serif;
  height: 100%;
  max-height: 650px;
  width: 280px;
  background: transparent;
  border-color: #4c2c5c;
  border-radius: 5px;
  border-width: 1px;
}
.card-header{
  padding-top: .2rem ;
}
.card-image{
  height: 60%;
}
.poster{
  height: 100%;
  object-fit: fill;
  width: -webkit-fill-available;
}
.card-body{
  padding: .5rem;
}
.card-title, b{
  color:#5c1c4b;
}
.card-subtitle, li{
  color:#3b3364;
}

.card-footer{
  padding-top: 0!important;
}
.itens{
  padding-top: 0!important;
  padding-inline: 0.1rem;
}
ul{
  list-style-type: none;
}
.btn{
  background-color: #4c2c5c;
  color: white;
  border-color: transparent;
  border-radius: 5px;
}
.btn:hover{
  background-color: #74cc66;
}

</style>