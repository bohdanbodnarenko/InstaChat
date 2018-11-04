import {Pipe,PipeTransform} from '@angular/core';
import {  Post} from './Post';
import {  PostsResponce} from './PostsResponce';
@Pipe({
  name: 'PostPipe'
})



export class PostPipe implements PipeTransform {
  public transform(responce: PostsResponce, result: Post[]): void {
    let i = 1;
    responce.data.forEach(element => {
      let tmp: Post = new Post();
      tmp.location = this.checkIfLocationExist(element.location);
      tmp.caption = this.checkIfCaptionExist(element.caption);      
      tmp.imageLow = element.images.low_resolution.url;
      tmp.imageStandart = element.images.standard_resolution.url;
      tmp.likes = element.likes.count;
      tmp.userHasLiked = element.user_has_liked;
      tmp.comments = element.comments.count;
      tmp.id = i++;
      result.push(tmp);
    });


  }
  private checkIfLocationExist(tmp:{name:string}):string{
    if(tmp===null){
      return  "";
    }
    else{
      return tmp.name;
    }
  }
  private checkIfCaptionExist(tmp: {text:string}):string{
    if(tmp === null){
      return '';
    }
    else{
      return tmp.text;
    }
  }
}
