<template>
    <nav class=" text-white p-4 flex justify-end w-2xl">
        
        <div class="search-filter p-2 border-1 rounded-full">
                <label for="">Search by title:</label>
                <input type="text" class="text-grey-900" 
                    placeholder="Search by title"
                    v-model="searchQuery"

                
                />
                
            </div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        
        

        </nav>

  

</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>

</style>