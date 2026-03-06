// Archivo: src/interfaces/movie.interface.ts
export interface IMovie {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
    rating: number;
}

export interface IMoviesResponse {
    success: boolean;
    data: IMovie[];
    message?: string;
}