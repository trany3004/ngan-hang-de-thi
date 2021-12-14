import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChuDeService } from '../services/chude.service';
import { BaiKiemTraService } from '../services/baikiemtra.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {
  startest: any = {}
  ontap: any = null;
  hideDapAn = false;
  nopBai = false;
  timer;
  intervalTime;
  timerId;
  intervalId;

  constructor(private route: ActivatedRoute,
    private chuDeService: ChuDeService,
    private baiKiemTraService: BaiKiemTraService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
     console.log('starttestid >>', this.route.snapshot.params.starttestId)
    const starttestId = this.route.snapshot.params.starttestId;
    this.chuDeService.getChuDeByCondition({
      id: starttestId
    }).subscribe((chude) => {
      console.log('chu de >>>>>', chude)
      this.startest = chude && chude.length ? chude[0] : null;
    })
    this.getData();
  }

  startTimer() {
    this.timerId = setTimeout(() => {
      this.toastr.info('', 'Đã hết thời gian làm bài, bài của bạn đã tự động được nộp!')
      this.xemDapAn();
    }, this.timer)
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.intervalTime -= 1000;
      if (this.intervalTime <0 ) {
        this.intervalTime = 0;
       clearInterval(this.intervalId);
      }
    }, 1000)
  }

  msToTime() {
    if (this.intervalTime < 0) this.intervalTime = 0;
    let milliseconds = Math.floor((this.intervalTime % 1000) / 100);
    let seconds = Math.floor((this.intervalTime / 1000) % 60) as number | string;
    let minutes = Math.floor((this.intervalTime / (1000 * 60)) % 60) as number | string;
    let hours = Math.floor((this.intervalTime / (1000 * 60 * 60)) % 24) as number | string;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
 }

 getValueProgress() {
   return Math.round((this.intervalTime/this.timer) * 100)
 }

  getData() {
    const query = {
      chude: this.route.snapshot.params.starttestId
    };

    this.baiKiemTraService.fetch(query).subscribe(
      (rs) => {
        this.ontap = rs;
        this.intervalTime = this.timer = rs.time;
        this.startTimer();
        this.startInterval();
          this.ontap?.cauhoi.forEach((cauHoi) => {
            cauHoi.dapAn = cauHoi.dapAn.map((e) => ({
              noidung: e,
              selected: false,
            }));
          })
      },
    );
  }

  drop(event: CdkDragDrop<string[]>, element: any) {
    moveItemInArray(
      element.dapAn,
      event.previousIndex,
      event.currentIndex
    );
  }


  changeDapAn(index, element) {
    element.dapAn.forEach((e) => (e.selected = false));
    element.dapAn[index].selected = true;
  }

  xemDapAn() {
    clearTimeout(this.timerId);
    clearInterval(this.intervalId)
    const payload = this.ontap.cauhoi.map((e) => {
      if (!e.isDrapDrop) {
        const dapAnDung = e.dapAn
        .filter((e) => e.selected)
        .map((e) => e.noidung);
        const payload = {
          id: e._id,
          dapAn: dapAnDung,
        };
        return payload
      } else {
        const dapAnDung = e.dapAn
        .map((e) => e.noidung);
        const payload = {
          id: e._id,
          dapAn: dapAnDung,
        };
        return payload;
      }
    })
    this.nopBai = true;
    this.baiKiemTraService.submitAnswer({
      chude: this.route.snapshot.params.starttestId,
      cauhoi:payload}).subscribe((rs) => {
      this.hideDapAn = true;
      this.ontap = rs;
    });



  }



}
