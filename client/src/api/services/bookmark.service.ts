import { apiClient } from '../client';

interface Bookmark {
  _id: string;
  userId: string;
  externalItemId: string;
  externalItemType: string;
  externalItemName: string;
  externalItemImage?: string;
  createdAt: string;
  doctor?: any; // populated doctor details if applicable
}

interface BookmarkCheckResponse {
  success: boolean;
  isBookmarked: boolean;
}

interface BookmarkResponse {
  success: boolean;
  message: string;
  bookmark?: Bookmark;
}

interface BookmarksListResponse {
  success: boolean;
  bookmarks: Bookmark[];
}

export const createBookmark = async (payload: any, token: string) => {
  return apiClient.post<BookmarkResponse>('/bookmarks', payload);
};

export const deleteBookmark = async (bookmarkId: string, token: string) => {
  return apiClient.delete<BookmarkResponse>(`/bookmarks/${bookmarkId}`);
};

export const getUserBookmarks = async (userId: string) => {
  return apiClient.get<BookmarksListResponse>(`/bookmarks/user/${userId}`);
};

export const isBookmarked = async (itemId: string, token: string) => {
  return apiClient.get<BookmarkCheckResponse>(`/bookmarks/check/${itemId}`);
};

export const deleteBookmarkByItem = async (itemId: string, token: string) => {
  return apiClient.delete<BookmarkResponse>(`/bookmarks/item/${itemId}`);
};