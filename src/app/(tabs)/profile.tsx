import { router } from "expo-router";
import PhotoGrid from "../../components/photogrid/PhotoGrid";
import ProfileHeader from "../../components/profile/ProfileHeader";
import { posts } from "../../data/posts";
import { currentUser } from "../../data/users";

export default function ProfileScreen() {
  return (
    <PhotoGrid
      posts={posts}
      onPressPost={(id) => router.push(`/post/${id}`)}
      header={<ProfileHeader user={currentUser} />}
    />
  );
}
