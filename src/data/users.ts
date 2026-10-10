import { User, UserProfile } from "../types";

export const users: User[] = [
  {
    id: "u1",
    username: "jessica",
    avatar: require("../../assets/images/splashpictures/persongirl.jpg"),
  },
  {
    id: "u2",
    username: "Beatrice",
    avatar: require("../../assets/images/splashpictures/person_smiling.jpg"),
  },
  {
    id: "u3",
    username: "mikecode",
    avatar: require("../../assets/images/splashpictures/personsmiling2.jpg"),
  },
];

export const currentUser: UserProfile = {
  id: "me",
  username: "Raerae",
  avatar: require("../../assets/images/splashpictures/person1.jpg"),
  bio: "SAIT student 📱 | Learning React Native, and many more! I love Software Development!",
  postsCount: 12,
  followers: 531,
  following: 104,
};
