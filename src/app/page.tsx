// Archivo: src/app/page.tsx
"use client";

import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { MovieSkeleton } from '../components/MovieSkeleton';

export default function Home() {
    const { movies, isLoading, error } = useMovies();

    return (
        <main className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Catálogo SOA <span className="text-blue-500">Movies</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Consumiendo un Gateway Backend orquestado mediante microservicios y TMDB.
                    </p>
                </header>

                {/* ESTADO 1: Error - Muestra un mensaje amigable sin romper la app */}
                {error && (
                    <div className="bg-red-900/50 border border-red-500 text-red-200 p-6 rounded-lg text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-2">¡Ups! Algo salió mal</h2>
                        <p>{error}</p>
                    </div>
                )}

                {/* ESTADO 2 y 3: Loading y Success (Grid de películas) */}
                {!error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {isLoading
                            ? /* Renderiza 8 Skeletons mientras carga */
                              Array.from({ length: 8 }).map((_, index) => (
                                  <MovieSkeleton key={index} />
                              ))
                            : /* Renderiza las tarjetas reales cuando hay éxito */
                              movies.map((movie) => (
                                  <MovieCard key={movie.id} movie={movie} />
                              ))
                        }
                    </div>
                )}
            </div>
        </main>
    );
}