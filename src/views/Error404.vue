<template>
    <PageTitle title="Page Not Found" imgName="error/sleep.png" desc="Code 404" alt="Totoro sleeping."/>
    <div class="container p-centered">

        <div class="element">
            <a @click="$router.go(-1)">
                <img class="img-responsive" src="@/assets/error/back.png">
            </a>
            <h5 class="text-center">Go Back</h5>
        </div>

        <div class="element">
            <router-link to="/home">
                <img class="img-responsive" src="@/assets/error/home.png">
            </router-link>
            <h5 class="text-center">Home</h5>
        </div>

    </div>    
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
    components:{
        PageTitle
    },
    setup() {
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Mulish:wght@500&display=swap');
.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.element{
    cursor: pointer;
    margin-inline: .8rem;
}
img{
    max-height: 70px;
    transition: transform .2s;
}
img:hover{
    transform: scale(.8);
}
h5{
    font-family: 'Mulish', sans-serif;
    color: #141450;
    font-weight: bold;
}
.element:hover h5{
    color: #610f35;
}

</style>