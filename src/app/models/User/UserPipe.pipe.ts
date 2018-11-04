import {
    Pipe,
    PipeTransform
} from '@angular/core';
import {
    UserInfo
} from './UserInfo';
import {
    User
} from './User';

@Pipe ({
    name: 'userPipe'
})

export class UserPipe implements PipeTransform {
    public transform(responce: UserInfo): User {
        let result = new User;
        result.userName = responce.data.username;
        result.imgSrc = responce.data.profile_picture;
        result.fullName = responce.data.full_name;
        result.countMedia = responce.data.counts.media;
        result.countFollowers = responce.data.counts.followed_by;
        result.countFollowing = responce.data.counts.follows;
        return result;
    }
}
