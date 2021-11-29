import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private auth: BaseService) { }

  ngOnInit(): void {
  }

  noLogin() {
    return !localStorage.getItem('token')
  }

  username() {
    return JSON.parse(localStorage.getItem('user')).username
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    document.location.reload();
  }

}
