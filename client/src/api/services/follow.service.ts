import { apiClient } from '../client';

export const followUser = async (userId: string, token: string) => {
  return apiClient.post(`/follows/${userId}`);
};

export const unfollowUser = async (userId: string, token: string) => {
  return apiClient.delete(`/follows/${userId}`);
};

export const getFollowers = async (userId: string) => {
  return apiClient.get(`/follows/followers/${userId}`);
};

export const getFollowing = async (userId: string) => {
  return apiClient.get(`/follows/following/${userId}`);
};

export const checkFollowStatus = async (userId: string, token: string) => {
  return apiClient.get(`/follows/check/${userId}`);
};

export const getFollowStats = async (userId: string) => {
  return apiClient.get(`/follows/stats/${userId}`);
};