import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  siteKey: string ;
  constructor() {
    this.siteKey = '6LemOxUcAAAAAGJ8gvv5wQ15DoRW2TpDMHAsGC0S';
  }

  ngOnInit(): void {
  }

}
