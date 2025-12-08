import { apiClient } from '../client';

interface Review {
  _id: string;
  externalItemId: string;
  externalItemType: string;
  externalItemName: string;
  userId: any; // populated user object
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface ReviewResponse {
  success: boolean;
  message: string;
  review: Review;
}

interface ReviewsListResponse {
  success: boolean;
  reviews: Review[];
}

interface ItemRatingResponse {
  success: boolean;
  averageRating: number;
  totalReviews: number;
}

export const createReview = async (payload: any, token: string) => {
  return apiClient.post<ReviewResponse>('/reviews', payload);
};

export const getReviewsByItem = async (itemId: string) => {
  return apiClient.get<ReviewsListResponse>(`/reviews/item/${itemId}`);
};

export const getReviewsByUser = async (userId: string) => {
  return apiClient.get<ReviewsListResponse>(`/reviews/user/${userId}`);
};

export const updateReview = async (reviewId: string, payload: any, token: string) => {
  return apiClient.put<ReviewResponse>(`/reviews/${reviewId}`, payload);
};

export const deleteReview = async (reviewId: string, token: string) => {
  return apiClient.delete<{ success: boolean; message: string }>(`/reviews/${reviewId}`);
};

export const getItemRating = async (itemId: string) => {
  return apiClient.get<ItemRatingResponse>(`/reviews/item/${itemId}/rating`);
};