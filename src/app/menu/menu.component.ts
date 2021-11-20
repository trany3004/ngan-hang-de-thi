import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  noLogin() {
    return !localStorage.getItem('token')
  }

  username() {
    return JSON.parse(localStorage.getItem('user')).username
  }

}
