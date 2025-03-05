import { PostType } from "@/_types/PostsType";
import photographer from "@/assets/photographer/pexels-vario-2149731000-30766044.jpg";

import AAA111 from "@/assets/photos/pexels-gaidar-iskakov-2149499017-30705516.jpg";
import AAA112 from "@/assets/photos/pexels-apasaric-1285625.jpg";
import AAA113 from "@/assets/photos/pexels-beccacorreiaph-20401301.jpg";
import AAA114 from "@/assets/photos/pexels-adit-syahfiar-991235-30756289.jpg";

export const posts: PostType[] = [
  {
    id: "AAA111",
    title: "Lorem ipsum dolor",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "3 min de leitura",
    createdAt: "04/09/2022",
    vizualization: 203,
    votes: 212,
    thumbnail: AAA111,
    content: [{ type: "img", content: { src: photographer, alt: "" } }],
  },
  {
    id: "AAA112",
    title: "Lorem ipsum, dolor.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "1 min de leitura",
    createdAt: "04/19/2022",
    vizualization: 106,
    votes: 122,
    thumbnail: AAA112,
    content: [{ type: "img", content: { src: photographer, alt: "" } }],
  },
  {
    id: "AAA113",
    title: "Lorem ipsum, consectetur.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "5 min de leitura",
    createdAt: "04/22/2022",
    vizualization: 503,
    votes: 162,
    thumbnail: AAA113,
    content: [{ type: "img", content: { src: photographer, alt: "" } }],
  },
  {
    id: "AAA114",
    title: "Lorem ipsum, consectetur.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "5 min de leitura",
    createdAt: "04/22/2022",
    vizualization: 503,
    votes: 162,
    thumbnail: AAA114,
    content: [{ type: "img", content: { src: photographer, alt: "" } }],
  },
];
