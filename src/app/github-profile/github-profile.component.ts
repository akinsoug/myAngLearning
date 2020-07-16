import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private myRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.myRout.paramMap
    .subscribe(params => {
      console.log(params);
      let id = +params.get('id');//this return a string but the <+> sign is to convert it into a number
      // Service.getProfile(id);//we do not need this for now
      console.log(id);
    });
  }

}
