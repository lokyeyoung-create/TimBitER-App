import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  isBookmarked,
  createBookmark,
  deleteBookmarkByItem,
} from "../../api/services/bookmark.service";

interface Props {
  itemId: string;
  itemType?: string;
  itemName?: string;
}

const BookmarkButton: React.FC<Props> = ({
  itemId,
  itemType = "external",
  itemName,
}) => {
  const { user, token } = useAuth();
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!user || !token) return;
      try {
        const res = await isBookmarked(itemId, token);
        if (mounted) {
          setBookmarked(res.isBookmarked);
        }
      } catch (e) {
        console.error("Error checking bookmark status:", e);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [itemId, user, token]);

  const toggle = async () => {
    if (!user || !token) return;
    setLoading(true);
    try {
      if (bookmarked) {
        // Delete bookmark by item ID
        await deleteBookmarkByItem(itemId, token);
        setBookmarked(false);
      } else {
        // Create new bookmark
        await createBookmark(
          {
            externalItemId: itemId,
            externalItemType: itemType,
            externalItemName: itemName,
          },
          token
        );
        setBookmarked(true);
      }
    } catch (e) {
      console.error("Error toggling bookmark:", e);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`px-3 py-1 rounded-md text-sm transition-colors ${
        bookmarked
          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? "..." : bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
};

export default BookmarkButton;
