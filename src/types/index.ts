import { ImageSourcePropType } from 'react-native';

export type User = {
  id: string;
  username: string;
  avatar: ImageSourcePropType;
};

export type UserProfile = User & {
  bio: string;
  postsCount: number;
  followers: number;
  following: number;
};

export type Post = {
  id: string;
  user: User;
  image: ImageSourcePropType;
  caption: string;
  likes: number;
};