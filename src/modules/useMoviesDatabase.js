import {ref} from 'vue'

export const useMoviesDatabase = () => {

    const movies = ref([
        {
            title: "Shrek",
            description: "a movie about a green ogre",
            movieCover: "https://picsum.photos/400/600",
            duration: "1h 30m",
            genre: "Comedy",
            rating: 4.5,
            publisher: "DreamWorks Animation",
            ageRecommendation: "7+",
            director: "Andrew Adamson",
            releaseDate: "2001-04-22",
            actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"]
        },
    
        {
            title: "Get Out",
            description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            movieCover: "https://picsum.photos/400/600",
            duration: "1h 44m",
            genre: "Horror",
            rating: 4.7,
            publisher: "Universal Pictures",
            ageRecommendation: "15+",
            director: "Jordan Peele",
            releaseDate: "2017-02-24",
            actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
        },
    
        {
            title: "Fight Club",
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            movieCover: "https://picsum.photos/400/600",
            duration: "2h 19m",
            genre: "Drama",
            rating: 4.8,
            publisher: "20th Century Fox",
            ageRecommendation: "18+",
            director: "David Fincher",
            releaseDate: "1999-10-15",
            actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
        }

        

    ])

    return {movies}
}