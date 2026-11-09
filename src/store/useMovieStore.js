import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useMovieStore = create(
    devtools(
        persist(
            (set) => ({
                // Initial state
                movies: [
                    {
                        id: 1,
                        title: "Interstellar",
                        genre: "Sci-Fi",
                        watched: false,
                    },
                    {
                        id: 2,
                        title: "The Dark Knight",
                        genre: "Action",
                        watched: true,
                    },
                ],

                // Add a new movie
                addMovie: (title, genre) =>
                    set(
                        (state) => ({
                            movies: [
                                ...state.movies,
                                {
                                    id: Date.now(),
                                    title,
                                    genre,
                                    watched: false,
                                },
                            ],
                        }),
                        false,
                        "movie/add"
                    ),

                // Change watched status
                toggleWatched: (id) =>
                    set(
                        (state) => ({
                            movies: state.movies.map((movie) =>
                                movie.id === id
                                    ? {
                                        ...movie,
                                        watched: !movie.watched,
                                    }
                                    : movie
                            ),
                        }),
                        false,
                        "movie/toggleWatched"
                    ),

                // Remove a movie
                removeMovie: (id) =>
                    set(
                        (state) => ({
                            movies: state.movies.filter(
                                (movie) => movie.id !== id
                            ),
                        }),
                        false,
                        "movie/remove"
                    ),

                // Hydration status
                hasHydrated: false,

                setHasHydrated: (value) =>
                    set({ hasHydrated: value }),
            }),
            {
                name: "movie-watchlist-storage",

                // Avoid hydration mismatch in Next.js
                skipHydration: true,

                onRehydrateStorage: () => (state) => {
                    state?.setHasHydrated(true);
                },
            }
        ),
        {
            name: "Movie Watchlist Store",
        }
    )
);

export default useMovieStore;