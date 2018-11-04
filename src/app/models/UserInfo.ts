export class UserInfo{
    id : number;
    username : string;
    profile_picture : string;
    full_name : string;
    counts : {
        media : number;
        follows : number;
        followed_by : number;
    }
}