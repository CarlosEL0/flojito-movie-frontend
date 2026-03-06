// Archivo: src/components/MovieCard.tsx
import { IMovie } from '../interfaces/movie.interface';

interface Props {
    movie: IMovie;
}

export const MovieCard = ({ movie }: Props) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-700">
            {/* Imagen optimizada con etiqueta img estándar para este caso práctico */}
            {movie.posterPath ? (
                <img 
                    src={movie.posterPath} 
                    alt={`Póster de ${movie.title}`} 
                    className="w-full h-80 object-cover"
                />
            ) : (
                <div className="w-full h-80 bg-gray-900 flex items-center justify-center text-gray-500">
                    Sin imagen
                </div>
            )}
            
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1" title={movie.title}>
                    {movie.title}
                </h3>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                    <span>📅 {movie.releaseDate || 'N/D'}</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded font-bold">
                        ⭐ {movie.rating.toFixed(1)}
                    </span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3 flex-grow">
                    {movie.overview || 'Sin descripción disponible.'}
                </p>
            </div>
        </div>
    );
};