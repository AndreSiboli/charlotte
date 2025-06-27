import { StaticImageData } from "next/image";

type ContentType =
  | {
      type: "img";
      property: {
        src: StaticImageData;
        alt: string;
      };
    }
  | {
      type: "title";
      property: {
        title: string;
      };
    }
  | {
      type: "text";
      property: {
        text: string;
      };
    }
  | {
      type: "quote";
      property: {
        quote: string;
        author?: string;
      };
    }
  | {
      type: "sub-title";
      property: {
        title: string;
      };
    }
  | {
      type: "list";
      property: {
        items: string[];
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
  visualization: number;
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
