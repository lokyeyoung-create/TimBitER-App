import { apiClient } from '../client';

export const createBookmark = async (payload: any, token: string) => {
  return apiClient.post('/bookmarks', payload);
};

export const deleteBookmark = async (bookmarkId: string, token: string) => {
  return apiClient.delete(`/bookmarks/${bookmarkId}`);
};

export const getUserBookmarks = async (userId: string) => {
  return apiClient.get(`/bookmarks/user/${userId}`);
};

export const isBookmarked = async (itemId: string, token: string) => {
  return apiClient.get(`/bookmarks/check/${itemId}`);
};

export const deleteBookmarkByItem = async (itemId: string, token: string) => {
  return apiClient.delete(`/bookmarks/item/${itemId}`);
};