import { FlatList, StyleSheet, Text, View } from "react-native";
import { User } from "../../types";
import Avatar from '../avatar/Avatar';

type StoriesRowProps = {
  users: User[];
};

export default function StoriesRow({ users }: StoriesRowProps) {
  return (
    <FlatList
      horizontal
      data={users}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.story}>
          <View style={styles.ring}>
            <Avatar source={item.avatar} size={62} />
          </View>
          <Text style={styles.name} numberOfLines={1}>
            {item.username}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingHorizontal: 10, 
    paddingVertical: 12,
     gap: 14 
    },
  story: { alignItems: "center", 
    width: 74 
  },
  ring: {
    padding: 3,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#E1306C",
  },
  name: { fontSize: 12, 
    marginTop: 4 
  },
});
