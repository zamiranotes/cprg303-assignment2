import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TextInput, View } from "react-native";
import PhotoGrid from '../../components/photogrid/PhotoGrid';
import { posts } from "../../data/posts";

export default function SearchScreen() {
  return (

    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#8E8E8E" />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <PhotoGrid
        posts={posts}
        onPressPost={(id) => router.push(`/post/${id}`)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff"
   },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 8,
   },
  input: {
     flex: 1, 
     paddingVertical: 10 
    },
});
