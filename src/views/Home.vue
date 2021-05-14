<template>
<PageTitle title="Films Database" desc="Obtained from the open" linkUrl="https://ghibliapi.herokuapp.com/"
linkTitle="Studio Ghibli API"/>
<Categories />

</template>

<script>
import PageTitle from '@/components/PageTitle'
import Categories from '@/components/Categories'

export default {
  name: 'DataTable',
  components: {
    Categories,
    PageTitle
  },
  setup(){

  }
}
</script>

