import { Pressable, StyleSheet, Text, View } from "react-native";
import { UserProfile } from "../../types";
import Avatar from '../avatar/Avatar';

type ProfileHeaderProps = {
  user: UserProfile;
};

type StatItemProps = {
  value: number;
  label: string;
};

function StatItem({ value, label }: StatItemProps) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Avatar source={user.avatar} size={80} />
        <View style={styles.stats}>
          <StatItem value={user.postsCount} label="Posts" />
          <StatItem value={user.followers} label="Followers" />
          <StatItem value={user.following} label="Following" />
        </View>
      </View>
      <Text style={styles.username}>{user.username}</Text>
      <Text>{user.bio}</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Share profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 14
   },
  topRow: { flexDirection: "row",
    alignItems: "center",
    gap: 20 
  },
  stats: { flexDirection: "row", 
    flex: 1, 
    justifyContent: "space-around" 
  },
  stat: { alignItems: "center" 
  },
  statValue: { fontWeight: "700", 
    fontSize: 16 
  },
  username: { fontWeight: "700", 
    marginTop: 10 
  },
  buttons: { flexDirection: "row",
    gap: 8,
    marginTop: 12,
    marginBottom: 8 
  },
  button: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { 
    fontWeight: "600" 
  },
});
