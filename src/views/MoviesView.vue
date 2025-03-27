<template>
    <section>
      <div class="hero-section">
        <div class="hero-container-text pl-8 pt-45">
            <h1 class="text-4xl text-white font-bold">
                {{ movies[2].title }}
            </h1>
            <p class="text-gray-300">{{ movies[2].genre }}</p>
            <button class="bg-amber-200 rounded-full px-4 py-2  text-gray-600 ">Click me, why not! Jack Sparrow</button>
        </div>
      </div>



            <div class="MovieCardsRow flex flex-wrap justify-center gap-8 z-1 !-mt-28 relative">

            <!-- movie card for repeating - start-->
                <div class="movieCard relative w-1/4 h-128 flex flex-col justify-end text-white " v-for="(movie, index) in filteredMovies" :key="movie">
                   <div @mouseenter="toggleMovieData(index)" @mouseleave="toggleMovieData(index)" class=" bg-gray-700/70 p-5 fade-effect">

                     <h2 class="text-2xl !font-bold"> {{ movie.title }}</h2>
                    <img class="absolute inset-0 -z-1 bg-cover w-full h-full" :src="movie.movieCover" alt="movie cover" />

                    <!--  <h2>description: {{ movie.description }}</h2> -->

                    <div class="fade-effect" v-show="isMovieDataVisible[index]">
                    <h2>Duration: {{ movie.duration }}</h2>
                    <h2> {{ movie.genre }}</h2>
                    <h2>Rating: {{ movie.rating }}</h2>
                    </div>

                    <!-- <h2>publisher: {{ movie.publisher }}</h2>
                    <h2>ageRecommendation: {{ movie.ageRecommendation }}</h2>
                    <h2>director: {{ movie.director }}</h2> -->
                    <!--  <h2>releaseDate: {{ movie.releaseDate }}</h2> -->
                    <!--  <h2>Top Cast: {{ movie.actors}}</h2> -->

                   </div>
                   
                </div>
            <!-- movie card for repeating - end-->
            </div>
            
            <div class="genre-filter p-4">
                <label for="genre" class="text-grey-700">Filter by genre:</label>
                <select id="genre" class="ml-2 p-2 rounded" v-model="selectedGenre">
                    <option value="">All</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Drama">Drama</option>
                </select>

            </div>

            <!-- <div class="search-filter p-4">
                <label for="">Search by title:</label>
                <input type="text" class="text-grey-900" 
                    placeholder="Search by title"
                    v-model="searchQuery"

                
                />
                
            </div> -->

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// destructuring the useMoviesDatabase function from the module
import { useMoviesDatabase } from '../modules/useMoviesDatabase'

const { movies } = useMoviesDatabase()

const selectedGenre = ref('')
const searchQuery = ref('')

const filteredMovies = computed(() => {
    let result = selectedGenre.value
    
    ? movies.value.filter((movie) => movie.genre === selectedGenre.value)
    : movies.value

    if(searchQuery.value) {
        result = result.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())) 
    }
    
    return result
})

// const filteredMovies = computed(() => {
//     return selectedGenre.value 
//     ? movies.value.filter((movie) => movie.genre === selectedGenre.value)
//     : movies.value
// })

let isMovieDataVisible = ref([])

const toggleMovieData = (index) => {
    isMovieDataVisible.value[index] = !isMovieDataVisible.value[index]
}

</script>

<style>
.hero-section {
    width: 100%;
    height: 500px;
    background-image: url(https://wallpapers.com/images/hd/up-movie-wallpaper-8hpa6zvsngyyiaul.jpg);
    background-size: cover; 
    background-repeat: no-repeat;

}

.fade-effect {
    transition: 1s;
}
</style>