import { router } from "expo-router";
import { FlatList } from "react-native";
import PostCard from '../../components/posts/PostsCard';
import StoriesRow from '../../components/stories/StoriesRow';
import { posts } from "../../data/posts";
import { currentUser, users } from "../../data/users";

export default function HomeScreen() {
  const storyUsers = [currentUser, ...users];

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<StoriesRow users={storyUsers} />}
      renderItem={({ item }) => (
        <PostCard post={item} onPress={() => router.push(`/post/${item.id}`)} />
      )}
      style={{ backgroundColor: "#fff" }}
    />
  );
}
