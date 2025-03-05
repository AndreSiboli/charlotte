import { StaticImageData } from "next/image";

type ContentType =
  | {
      type: "img";
      content: {
        src: StaticImageData;
        alt: string;
      };
    }
  | {
      type: "title";
      content: {
        title: string;
      };
    }
  | {
      type: "text";
      content: {
        text: string;
      };
    }
  | {
      type: "quote";
      content: {
        text: string;
        author?: string;
      };
    };

export interface PostType {
  id: string;
  title: string;
  author: {
    name: string;
    src: StaticImageData;
  };
  readingTime: string;
  thumbnail: StaticImageData;
  createdAt: string;
  vizualization: number;
  votes: number;
  content: ContentType[];
}

export interface PostComments {
  id: string;
  user: {
    src: string;
    name: string;
  };

  replies: CommentsReply[];
}

export interface CommentsReply {
  id: string;
  user: {
    src: string;
    name: string;
  };
  replyingTo: string;
}
