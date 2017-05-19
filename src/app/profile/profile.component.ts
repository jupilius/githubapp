import {Component, OnInit} from "@angular/core";
import {GithubService} from "../services/github.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: string[];
  repos: string[];
  username: string;

  constructor(private githubService: GithubService) {
    this.user = [];
  }

  ngOnInit(): void {
  }

  searchUser() {

    this.githubService.updateUser(this.username);

    console.log(this.username);
    // Observables로 받을때는 subscribe 를 사용한다.
    this.githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }


}
