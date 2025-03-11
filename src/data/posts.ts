import { PostType } from "@/_types/PostsType";
import photographer from "@/assets/photographer/pexels-vario-2149731000-30766044.jpg";

import AAA111 from "@/assets/photos/pexels-alex-azabache-5117913.jpg";
import AAA112 from "@/assets/photos/pexels-vikkirillova-8796459.jpg";
import AAA113 from "@/assets/photos/pexels-joyston-judah-933054.jpg";
import AAA114 from "@/assets/photos/pexels-adit-syahfiar-991235-30756289.jpg";
import AAA115 from "@/assets/photos/pexels-beccacorreiaph-31095847.jpg";

export const posts: PostType[] = [
  {
    id: "AAA111",
    title: "Lorem ipsum dolor",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "1 min de leitura",
    createdAt: "09/24/2024",
    vizualization: 203,
    votes: 198,
    thumbnail: AAA111,
    content: [
      { type: "title", property: { title: "Lorem ipsum dolor" } },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo quo fuga architecto molestias ad.",
        },
      },
      { type: "img", property: { src: AAA111, alt: "" } },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus ipsa necessitatibus quasi vitae eius ratione cumque molestiae. Harum, eligendi? Dolorem rerum neque voluptatum, blanditiis nobis ex quibusdam dolor tempore iste voluptatem quod nisi! Ratione architecto excepturi delectus laborum sint hic laudantium optio. Iste ipsam amet deleniti officia quibusdam perspiciatis dignissimos dicta eos hic perferendis, fuga, dolor quisquam libero atque laboriosam saepe debitis id eius distinctio odit architecto asperiores beatae.",
        },
      },
      {
        type: "quote",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus ipsa necessitatibus quasi vitae eius ratione cumque molestiae. Harum, eligendi?",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus ipsa necessitatibus quasi vitae eius ratione cumque molestiae. Harum, eligendi? Dolorem rerum neque voluptatum, blanditiis nobis ex quibusdam dolor tempore iste voluptatem quod nisi! Ratione architecto excepturi delectus laborum sint hic laudantium optio.",
        },
      },
    ],
  },
  {
    id: "AAA112",
    title: "Lorem ipsum, dolor.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "1 min de leitura",
    createdAt: "10/04/2024",
    vizualization: 156,
    votes: 122,
    thumbnail: AAA112,
    content: [
      { type: "img", property: { src: AAA112, alt: "" } },
      {
        type: "title",
        property: { title: "Lorem ipsum dolor sit amet consectetur." },
      },
      {
        type: "text",
        property: {
          text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi possimus dolorem tenetur, libero minus aspernatur quisquam quos cupiditate ipsam sed laborum cumque ab, autem necessitatibus cum tempora nihil iste consectetur odit itaque quasi? Quia explicabo fugiat, iure aliquid, dolorum dolorem numquam esse iste voluptate deleniti, ex odit delectus velit facilis quasi nisi vero minus perferendis ea voluptas suscipit accusamus!",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit voluptatibus rem quae ea, facere cumque veritatis. Repellat non neque, natus inventore laborum quis sapiente praesentium autem laudantium sed tempora quibusdam quasi tenetur repellendus ad dolorum quos cumque excepturi earum, possimus sequi libero illo animi voluptate. Omnis rem ipsam fugiat neque sequi, similique praesentium! Nisi fugiat quas eligendi esse magni sapiente impedit praesentium magnam consectetur, veniam, ipsum eos, eveniet ad. Accusantium sunt dolores ipsam reprehenderit, dolore optio voluptatum voluptates sed alias animi distinctio, totam incidunt consequatur? Blanditiis tempore fugiat dolore atque impedit quaerat esse exercitationem harum maiores, est deleniti dolorem..",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis error ipsam voluptate, sunt deserunt temporibus.",
        },
      },
    ],
  },
  {
    id: "AAA113",
    title: "Lorem ipsum, consectetur.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "5 min de leitura",
    createdAt: "12/11/2024",
    vizualization: 213,
    votes: 151,
    thumbnail: AAA113,
    content: [
      {
        type: "title",
        property: { title: "Lorem ipsum dolor sit amet consectetur" },
      },
      { type: "img", property: { src: AAA113, alt: "" } },
      { type: "sub-title", property: { title: "Lorem ipsum dolor sit" } },
      {
        type: "text",
        property: {
          text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi possimus dolorem tenetur, libero minus aspernatur quisquam quos cupiditate ipsam sed laborum cumque ab, autem necessitatibus cum tempora nihil iste consectetur odit itaque quasi? Quia explicabo fugiat, iure aliquid, dolorum dolorem numquam esse iste voluptate deleniti, ex odit delectus velit facilis quasi nisi vero minus perferendis ea voluptas suscipit accusamus!",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit voluptatibus rem quae ea, facere cumque veritatis. Repellat non neque, natus inventore laborum quis sapiente praesentium autem laudantium sed tempora quibusdam quasi tenetur repellendus ad dolorum quos cumque excepturi earum, possimus sequi libero illo animi voluptate. Omnis rem ipsam fugiat neque sequi, similique praesentium! Nisi fugiat quas eligendi esse magni sapiente impedit praesentium magnam consectetur, veniam, ipsum eos, eveniet ad. Accusantium sunt dolores ipsam reprehenderit, dolore optio voluptatum voluptates sed alias animi distinctio, totam incidunt consequatur? Blanditiis tempore fugiat dolore atque impedit quaerat esse exercitationem harum maiores, est deleniti dolorem..",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis error ipsam voluptate, sunt deserunt temporibus.",
        },
      },
    ],
  },
  {
    id: "AAA114",
    title: "Lorem ipsum, consectetur.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "5 min de leitura",
    createdAt: "11/09/2024",
    vizualization: 503,
    votes: 162,
    thumbnail: AAA114,
    content: [
      {
        type: "title",
        property: { title: "Lorem ipsum dolor sit amet consectetur" },
      },
      { type: "img", property: { src: AAA114, alt: "" } },
      {
        type: "text",
        property: {
          text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi possimus dolorem tenetur, libero minus aspernatur quisquam quos cupiditate ipsam sed laborum cumque ab, autem necessitatibus cum tempora nihil iste consectetur odit itaque quasi? Quia explicabo fugiat, iure aliquid, dolorum dolorem numquam esse iste voluptate deleniti, ex odit delectus velit facilis quasi nisi vero minus perferendis ea voluptas suscipit accusamus!",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis error ipsam voluptate, sunt deserunt temporibus.",
        },
      },
      { type: "sub-title", property: { title: "Lorem ipsum dolor sit" } },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit voluptatibus rem quae ea, facere cumque veritatis. Repellat non neque, natus inventore laborum quis sapiente praesentium autem laudantium sed tempora quibusdam quasi tenetur repellendus ad dolorum quos cumque excepturi earum, possimus sequi libero illo animi voluptate. Omnis rem ipsam fugiat neque sequi, similique praesentium! Nisi fugiat quas eligendi esse magni sapiente impedit praesentium magnam consectetur, veniam, ipsum eos, eveniet ad. Accusantium sunt dolores ipsam reprehenderit, dolore optio voluptatum voluptates sed alias animi distinctio, totam incidunt consequatur? Blanditiis tempore fugiat dolore atque impedit quaerat esse exercitationem harum maiores, est deleniti dolorem..",
        },
      },
    ],
  },
  {
    id: "AAA115",
    title: "Lorem ipsum, consectetur.",
    author: {
      name: "Charlotte",
      src: photographer,
    },
    readingTime: "4 min de leitura",
    createdAt: "12/16/2025",
    vizualization: 455,
    votes: 303,
    thumbnail: AAA115,
    content: [
      {
        type: "title",
        property: { title: "Lorem ipsum dolor sit amet consectetur" },
      },
      {
        type: "text",
        property: {
          text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi possimus dolorem tenetur, libero minus aspernatur quisquam quos cupiditate ipsam sed laborum cumque ab, autem necessitatibus cum tempora nihil iste consectetur odit itaque quasi? Quia explicabo fugiat, iure aliquid, dolorum dolorem numquam esse iste voluptate deleniti, ex odit delectus velit facilis quasi nisi vero minus perferendis ea voluptas suscipit accusamus!",
        },
      },
      { type: "img", property: { src: AAA115, alt: "" } },
      { type: "sub-title", property: { title: "Lorem ipsum dolor sit" } },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit voluptatibus rem quae ea, facere cumque veritatis. Repellat non neque, natus inventore laborum quis sapiente praesentium autem laudantium sed tempora quibusdam quasi tenetur repellendus ad dolorum quos cumque excepturi earum, possimus sequi libero illo animi voluptate. Omnis rem ipsam fugiat neque sequi, similique praesentium! Nisi fugiat quas eligendi esse magni sapiente impedit praesentium magnam consectetur, veniam, ipsum eos, eveniet ad. Accusantium sunt dolores ipsam reprehenderit, dolore optio voluptatum voluptates sed alias animi distinctio, totam incidunt consequatur? Blanditiis tempore fugiat dolore atque impedit quaerat esse exercitationem harum maiores, est deleniti dolorem.",
        },
      },
      {
        type: "quote",
        property: {
          text: "Repellat non neque, natus inventore laborum quis sapiente praesentium autem laudantium sed tempora quibusdam.",
        },
      },
      {
        type: "text",
        property: {
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis error ipsam voluptate, sunt deserunt temporibus.",
        },
      },
    ],
  },
];
