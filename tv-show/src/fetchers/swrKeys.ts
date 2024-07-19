const API_URL = 'https://tv-shows.infinum.academy';

export const swrKeys = {
  user: () => `${API_URL}/users/me`,
  login: () => `${API_URL}/users/sign_in`,
  register: () => `${API_URL}/users/`,
  all_shows: () => `${API_URL}/shows`,
  top_rated: () => `${API_URL}/shows/top_rated`,
  show: (id: number) => `${API_URL}/shows/${id}`,
  showReviews: (id: number) => `${API_URL}/shows/${id}/reviews`,
  reviews: () => `${API_URL}/reviews`
};
