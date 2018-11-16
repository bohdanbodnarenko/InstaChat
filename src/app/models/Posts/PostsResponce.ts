export interface tmpData {
  location: {
    name: string;
  };
  images: {
    low_resolution: {
      url: string;
    };
    standard_resolution: {
      url: string;
    };
  };
  caption: {
    text: string;
  };
  likes: {
    count: string;
  };
  comments: {
    count: string;
  };
  user_has_liked: boolean;
}

export class PostsResponce {
  data: tmpData[];
}
