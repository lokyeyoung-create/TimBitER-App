import { apiClient } from '../client';

interface FollowStatsResponse {
  success: boolean;
  followers: number;
  following: number;
}

interface FollowStatusResponse {
  success: boolean;
  isFollowing: boolean;
}

interface FollowersResponse {
  success: boolean;
  followers: any[];
  count: number;
}

interface FollowingResponse {
  success: boolean;
  following: any[];
  count: number;
}

interface FollowActionResponse {
  success: boolean;
  message: string;
  follow?: any;
}

export const followUser = async (userId: string, token: string) => {
  return apiClient.post<FollowActionResponse>(`/follows/${userId}`);
};

export const unfollowUser = async (userId: string, token: string) => {
  return apiClient.delete<FollowActionResponse>(`/follows/${userId}`);
};

export const getFollowers = async (userId: string) => {
  return apiClient.get<FollowersResponse>(`/follows/followers/${userId}`);
};

export const getFollowing = async (userId: string) => {
  return apiClient.get<FollowingResponse>(`/follows/following/${userId}`);
};

export const checkFollowStatus = async (userId: string, token: string) => {
  return apiClient.get<FollowStatusResponse>(`/follows/check/${userId}`);
};

export const getFollowStats = async (userId: string) => {
  return apiClient.get<FollowStatsResponse>(`/follows/stats/${userId}`);
};
