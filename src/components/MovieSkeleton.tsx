// Archivo: src/components/MovieSkeleton.tsx
export const MovieSkeleton = () => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse flex flex-col h-full">
            {/* Espacio de la imagen */}
            <div className="w-full h-80 bg-gray-700"></div>
            {/* Contenido */}
            <div className="p-5 flex-grow flex flex-col gap-3">
                <div className="h-6 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                <div className="h-4 bg-gray-600 rounded w-full mt-2"></div>
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
            </div>
        </div>
    );
};