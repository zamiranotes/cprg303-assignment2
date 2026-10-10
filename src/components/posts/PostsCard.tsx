import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Post } from "../../types";
import Avatar from '../avatar/Avatar';

type PostCardProps = {
  post: Post;
  onPress?: () => void;
};

export default function PostCard({ post, onPress }: PostCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Avatar source={post.user.avatar} />
        <Text style={styles.username}>{post.user.username}</Text>
        <Ionicons name="ellipsis-horizontal" size={20} style={styles.more} />
      </View>
      <Pressable onPress={onPress}>
        <Image source={post.image} style={styles.image} />
      </Pressable>
      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={26} />
        <Ionicons name="chatbubble-outline" size={24} />
        <Ionicons name="paper-plane-outline" size={24} />
        <Ionicons name="bookmark-outline" size={24} style={styles.bookmark} />
      </View>

      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.user.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16,
     backgroundColor: "#fff" 
    },
  header: { flexDirection: "row", 
    alignItems: "center", 
    padding: 10, 
    gap: 10 
  },
  username: { fontWeight: "600" 
  },
  more: { marginLeft: "auto" 
  },
  image: { width: 385,
    height: 400,
    alignSelf: "center",
    resizeMode: "cover" 
  },
  actions: { flexDirection: "row", 
    gap: 14, 
    padding: 10 
  },
  bookmark: { marginLeft: "auto" 
  },
  likes: { fontWeight: "600", 
    paddingHorizontal: 10 
  },
  caption: { paddingHorizontal: 10, 
    marginTop: 4 
  },
});
