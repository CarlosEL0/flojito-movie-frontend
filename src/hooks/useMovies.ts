// Archivo: src/hooks/useMovies.ts
import { useState, useEffect } from 'react';
import { IMovie, IMoviesResponse } from '../interfaces/movie.interface';

export const useMovies = () => {
    // Definición de los 3 estados obligatorios de la rúbrica
    const [movies, setMovies] = useState<IMovie[]>([]); // Success
    const [isLoading, setIsLoading] = useState<boolean>(true); // Loading
    const [error, setError] = useState<string | null>(null); // Error

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Petición al API Gateway usando la variable de entorno
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/movies/popular`);
                
                if (!response.ok) {
                    throw new Error('No se pudo conectar con el API Gateway');
                }

                const result: IMoviesResponse = await response.json();

                if (result.success) {
                    setMovies(result.data);
                } else {
                    throw new Error(result.message || 'Error desconocido en el servidor');
                }
            } catch (err: any) {
                setError(err.message || 'Ocurrió un error al cargar las películas. Intenta de nuevo más tarde.');
            } finally {
                // Sin importar si falla o tiene éxito, detenemos el estado de carga
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, isLoading, error };
};