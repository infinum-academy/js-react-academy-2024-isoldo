const API_URL = 'https://tv-shows.infinum.academy';

export const swrKeys = {
  user: () => `${API_URL}/users/me`,
  login: () => `${API_URL}/users/sign_in`,
  register: () => `${API_URL}/users/`,
  all_shows: (page?: number, items?: number) => {
    const baseUrl = `${API_URL}/shows`;
    let params = '';
    if(page && items) {
      params = `?page=${page}&items=${items}`
    } else {
      params = page ? `?page=${page}` : items ? `?items=${items}` : '';
    }

    return `${baseUrl}${params}`;
  },
  top_rated: () => `${API_URL}/shows/top_rated`,
  show: (id: number) => `${API_URL}/shows/${id}`,
  showReviews: (id: number) => `${API_URL}/shows/${id}/reviews`,
  reviews: () => `${API_URL}/reviews`,
  review: (id: number | string) => `${API_URL}/reviews/${id}`
};
