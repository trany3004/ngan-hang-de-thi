import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hocsinh',
  templateUrl: './hocsinh.component.html',
  styleUrls: ['./hocsinh.component.css']
})
export class HocsinhComponent implements OnInit {

  content = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$"
  constructor() { }
  ngOnInit(): void {
  }

}
