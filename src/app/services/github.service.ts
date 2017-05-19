
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Jsonp, URLSearchParams} from "@angular/http";

@Injectable()
export class GithubService {
  private username: string;

  constructor(private jsonp: Jsonp) {
  }

  getUser() {

    let params = new URLSearchParams();

    params.set('callback', 'JSONP_CALLBACK');
    // 다른 싸이트에 있는 정보를 요청할때 jsonp를 사용한다.
    return this.jsonp.get('https://api.github.com/users/' + this.username, {search: params})
      .map(res => <string[]>res.json().data);
  }

  getRepos() {
    let params = new URLSearchParams();

    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get('https://api.github.com/users/' + this.username + "/repos", {search: params})
      .map(res => <string[]>res.json().data);
  }

  updateUser(username: string): void {
    this.username = username;
  }
}
