import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  checkFollowStatus,
  followUser,
  unfollowUser,
} from "../../api/services/follow.service";

interface Props {
  targetUserId: string;
  onFollowChange?: (isFollowing: boolean) => void;
}

const FollowButton: React.FC<Props> = ({ targetUserId, onFollowChange }) => {
  const { user, token } = useAuth();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!user || !token || user._id === targetUserId) return;
      try {
        const res = await checkFollowStatus(targetUserId, token);
        if (mounted) {
          setIsFollowing(res.isFollowing);
        }
      } catch (e) {
        console.error("Error checking follow status:", e);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [targetUserId, user, token]);

  const toggle = async () => {
    if (!user || !token) return;
    setLoading(true);
    try {
      if (isFollowing) {
        await unfollowUser(targetUserId, token);
        setIsFollowing(false);
        onFollowChange?.(false);
      } else {
        await followUser(targetUserId, token);
        setIsFollowing(true);
        onFollowChange?.(true);
      }
    } catch (e) {
      console.error("Error toggling follow:", e);
    } finally {
      setLoading(false);
    }
  };

  // Don't show follow button if user is viewing their own profile
  if (!user || user._id === targetUserId) return null;

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isFollowing
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
          : "bg-blue-600 text-white hover:bg-blue-700"
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? "..." : isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
