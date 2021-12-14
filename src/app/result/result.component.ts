import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: any = {};
  @Input() chude: any = {};
  @Input() thoigian: any = 0;
  constructor(

  ) { }

  ngOnInit(): void {

  }

  msToTime() {
    if (this.thoigian < 0) this.thoigian = 0;
   const tglb = this.result.time-this.thoigian;
    let milliseconds = Math.floor((tglb % 1000) / 100);
    let seconds = Math.floor((tglb / 1000) % 60) as number | string;
    let minutes = Math.floor((tglb / (1000 * 60)) % 60) as number | string;
    let hours = Math.floor((tglb / (1000 * 60 * 60)) % 24) as number | string;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
 }

}
