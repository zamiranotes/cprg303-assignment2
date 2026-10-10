import { Post } from "../types";
import { users } from "./users";

export const posts: Post[] = [
  {
    id: "1",
    user: users[0],
    image: require("../../assets/images/splashpictures/beach.jpg"),
    caption: "Beach day!!",
    likes: 124,
  },
  {
    id: "2",
    user: users[1],
    image: require("../../assets/images/splashpictures/candid.jpg"),
    caption: "Caught in the moment",
    likes: 342,
  },
  {
    id: "3",
    user: users[2],
    image: require("../../assets/images/splashpictures/glass.jpg"),
    caption: "Glass",
    likes: 32,
  },
{ id: '4', user: users[0], image: require('../../assets/images/splashpictures/motorcyleraining.jpg'), caption: 'Rainy ride 🏍️', likes: 410 },
  {
    id: "5",
    user: users[1],
    image: require("../../assets/images/splashpictures/random1.jpg"),
    caption: "Unknown vibes",
    likes: 56,
  },
  {
    id: "6",
    user: users[2],
    image: require("../../assets/images/splashpictures/random2.jpg"),
    caption: "Good vibes",
    likes: 234,
  },
  {
    id: "7",
    user: users[0],
    image: require("../../assets/images/splashpictures/random3.jpg"),
    caption: "Mood",
    likes: 178,
  },
  {
    id: "8",
    user: users[1],
    image: require("../../assets/images/splashpictures/street.jpg"),
    caption: "Streets",
    likes: 234,
  },
  {
    id: "9",
    user: users[2],
    image: require("../../assets/images/splashpictures/surfing.jpg"),
    caption: "Catching waves woohoo",
    likes: 143,
  },
  {
    id: "10",
    user: users[0],
    image: require("../../assets/images/splashpictures/water.jpg"),
    caption: "Relax",
    likes: 24,
  },
];
