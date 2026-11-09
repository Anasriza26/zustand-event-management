"use client";

import { useEffect, useState } from "react";
import useMovieStore from "@/store/useMovieStore";

export default function MovieWatchlist() {
    const movies = useMovieStore((state) => state.movies);
    const hasHydrated = useMovieStore(
        (state) => state.hasHydrated
    );

    const addMovie = useMovieStore(
        (state) => state.addMovie
    );

    const toggleWatched = useMovieStore(
        (state) => state.toggleWatched
    );

    const removeMovie = useMovieStore(
        (state) => state.removeMovie
    );

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");

    useEffect(() => {
        useMovieStore.persist.rehydrate();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !genre.trim()) {
            return;
        }

        addMovie(title.trim(), genre.trim());

        setTitle("");
        setGenre("");
    };

    if (!hasHydrated) {
        return <p>Loading your watchlist...</p>;
    }

    return (
        <main className="mx-auto max-w-2xl p-6">
            <h1 className="mb-6 text-3xl font-bold">
                My Movie Watchlist
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mb-8 space-y-3"
            >
                <input
                    type="text"
                    placeholder="Movie title"
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                    className="w-full rounded border p-3"
                />

                <input
                    type="text"
                    placeholder="Movie genre"
                    value={genre}
                    onChange={(event) =>
                        setGenre(event.target.value)
                    }
                    className="w-full rounded border p-3"
                />

                <button
                    type="submit"
                    className="rounded bg-blue-600 px-5 py-2 text-white"
                >
                    Add Movie
                </button>
            </form>

            <h2 className="mb-4 text-xl font-semibold">
                My Movies ({movies.length})
            </h2>

            <div className="space-y-3">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex items-center justify-between rounded border p-4"
                    >
                        <div>
                            <h3 className="font-semibold">
                                {movie.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {movie.genre}
                            </p>

                            <p className="text-sm">
                                {movie.watched
                                    ? "Watched"
                                    : "Not Watched"}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() =>
                                    toggleWatched(movie.id)
                                }
                                className="rounded bg-green-600 px-3 py-2 text-white"
                            >
                                Toggle
                            </button>

                            <button
                                onClick={() =>
                                    removeMovie(movie.id)
                                }
                                className="rounded bg-red-600 px-3 py-2 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}