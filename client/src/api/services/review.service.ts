import { apiClient } from '../client';

export const createReview = async (payload: any, token: string) => {
  return apiClient.post('/reviews', payload);
};

export const getReviewsByItem = async (itemId: string) => {
  return apiClient.get(`/reviews/item/${itemId}`);
};

export const getReviewsByUser = async (userId: string) => {
  return apiClient.get(`/reviews/user/${userId}`);
};

export const updateReview = async (reviewId: string, payload: any, token: string) => {
  return apiClient.put(`/reviews/${reviewId}`, payload);
};

export const deleteReview = async (reviewId: string, token: string) => {
  return apiClient.delete(`/reviews/${reviewId}`);
};

export const getItemRating = async (itemId: string) => {
  return apiClient.get(`/reviews/item/${itemId}/rating`);
};