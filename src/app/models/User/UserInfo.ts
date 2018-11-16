export interface UserInfo {
    data: {
        id: number;
        username: string;
        profile_picture: string;
        full_name: string;
        counts: {
            media: string;
            follows: string;
            followed_by: string;
        }
    }
    meta: {
        code: number;
    }

}
