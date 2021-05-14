<template>
  <Navbar />
  <router-view/>
  <Footer />

</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  },
  setup(){     
},
watch: {
   // eslint-disable-next-line no-unused-vars
      '$route' (to, from) {
        if(to.params.title){
          document.title = to.params.title
        }else{
          document.title = to.meta.title || 'Ghibli Database'
        }
      },
    },
}  
</script>

<style>
#app{
  background-color: #d4b5a9;
}
</style>