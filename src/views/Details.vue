<template>
    <h1 class="text-center">{{film.title}}</h1>
    <h2 class="text-center">{{film.original_title}}</h2>
    <h3 class="text-center"><i>{{film.original_title_romanised}}</i></h3>
    <div class="container content">
        <div>
            <img v-if="film.title != undefined" :src="require('@/assets/posters/' + normTitle() + '.jpg')" class="img-responsive poster"
            :alt = "film.title + ' japanese poster.'">
        </div>
        <div class="body-text p-centered">
            <p>{{film.description}}</p>
            <ul class="text-left">
                <li><b>Release Date</b> {{film.release_date}}</li>
                <li><b>Director</b> {{film.director}}</li>
                <li><b>Producer</b> {{film.producer}}</li>
                <li><b>Running Time</b> {{film.running_time}}</li>
                <li><b>Rotten Tomatos Score</b> {{film.rt_score}}</li>

            </ul>
            <div v-if="film.title != undefined" class="video-responsive video-responsive-16-9">
                <iframe :src="youtubeLink(film.title)" :title="film.title + ' trailer.'" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import {onMounted,reactive,toRefs} from 'vue'
import api from '@/services/api'

export default {
    name: 'Details',
    props:{
    id: {
      //http://localhost:8080/films/details?id=1
      type: String,
      default: null
    },
    },
    setup(props) {
        const data = reactive({
        film: {},
    })
    const route = useRoute()

    console.log(route)
    onMounted(async () => {
        const response = await api.filmDetails(props.id)
        data.film = response.data
        })

    function normTitle(){ //convert title to lowercase and replacing spaces by _
      var new_title = this.film.title
      new_title = new_title.toLowerCase().replace(/\s+/g,'_')
      return new_title
    }
        return {...toRefs(data),normTitle}
    },

    data(){
        return{
            video: [
                {title: 'Arrietty' , link: 'https://www.youtube.com/embed/9CtIXPhPo0g'},
                {title: 'Castle in the Sky' , link: 'https://www.youtube.com/embed/8ykEy-yPBFc'},
                {title: 'From Up on Poppy Hill' , link: 'https://www.youtube.com/embed/9nzpk_Br6yo'},
                {title: 'Grave of the Fireflies' , link: 'https://www.youtube.com/embed/4vPeTSRd580'},
                {title: "Howl's Moving Castle" , link: 'https://www.youtube.com/embed/iwROgK94zcM'},
                {title: "Kiki's Delivery Service" , link: 'https://www.youtube.com/embed/4bG17OYs-GA'},
                {title: 'My Neighbor Totoro' , link: 'https://www.youtube.com/embed/92a7Hj0ijLs'},
                {title: 'My Neighbors the Yamadas' , link: 'https://www.youtube.com/embed/1C9ujuCPlnY'},
                {title: 'Only Yesterday' , link: 'https://www.youtube.com/embed/OfkQlZArxw0'},
                {title: 'Pom Poko' , link: 'https://www.youtube.com/embed/_7cowIHjCD4'},
                {title: 'Ponyo' , link: 'https://www.youtube.com/embed/CsR3KVgBzSM'},
                {title: 'Porco Rosso' , link: 'https://www.youtube.com/embed/awEC-aLDzjs'},
                {title: 'Princess Mononoke' , link: 'https://www.youtube.com/embed/4OiMOHRDs14'},
                {title: 'Spirited Away' , link: 'https://www.youtube.com/embed/ByXuk9QqQkk'},
                {title: 'Tales from Earthsea' , link: 'https://www.youtube.com/embed/8hxYx3Jq3kI'},
                {title: 'The Cat Returns' , link: 'https://www.youtube.com/embed/Gp-H_YOcYTM'},
                {title: 'The Red Turtle' , link: 'https://www.youtube.com/embed/FRFAujm3rik'},
                {title: 'The Tale of the Princess Kaguya' , link: 'https://www.youtube.com/embed/W71mtorCZDw'},
                {title: 'The Wind Rises' , link: 'https://www.youtube.com/embed/RzSpDgiF5y8'},
                {title: 'When Marnie Was There' , link: 'https://www.youtube.com/embed/ksNEwaQN53g'},
                {title: 'Whisper of the Heart' , link: 'https://www.youtube.com/embed/0pVkiod6V0U'},
            ]    
            }
    },
    methods:{
        youtubeLink: function(movie){ //https://usefulangle.com/post/3/javascript-search-array-of-objects
            var a = this.video
            var my_title = movie
            // eslint-disable-next-line no-unused-vars
            var result = a.find(function(x,index) {
                if(x.title == my_title)
                return true
            })
            if(result != undefined){
                return result.link
            }else{
                return null
            }
            
        }
    }
    
  

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
.body-text{
    max-width: 800px;
    font-size: larger;
}
h1, .body-text{
    padding-top: 1rem;
}
.poster{
    display: block;
    margin-inline: auto;
    max-height: 500px;
}
ul{
    list-style: none;
    margin-left: 0!important;
}
.content{
    padding-bottom: 1rem;
}
b, h1{
    color: #610f35;
}
h2,h3, .body-text{
    color: #3b3364;
    font-family: 'Roboto Slab', serif;
}

</style>