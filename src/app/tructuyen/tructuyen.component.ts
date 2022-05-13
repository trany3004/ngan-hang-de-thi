import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tructuyen',
  templateUrl: './tructuyen.component.html',
  styleUrls: ['./tructuyen.component.css']
})
export class TructuyenComponent implements OnInit {
  user: any = {}
  
  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

}
