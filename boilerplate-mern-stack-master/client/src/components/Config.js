//SERVER ROUTES
export const USER_SERVER = '/api/users';

// Handling Duplicate URLs
export const API_URL = 'https://api.themoviedb.org/3/';

export const API_KEY = process.env.TMDB_API_KEY;
console.log("콘피그 파일 키 확인중",process.env.TMDB_API_KEY);
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';