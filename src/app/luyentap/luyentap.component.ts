import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CauHoiService} from '../services/cauhoi.service';

@Component({
  selector: 'app-luyentap',
  templateUrl: './luyentap.component.html',
  styleUrls: ['./luyentap.component.css']
})
export class LuyentapComponent implements OnInit {
  cauHoiDetail: any = null;
  detailId: string = ''
  hideDapAn: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private cauHoiService: CauHoiService
  ) { }

  ngOnInit(): void {
    this.detailId = this.route.snapshot.params.levelId;


    //get detail => 1 => id: 1, title: TOan dai so,
  }
  changeDapAn(index) {
    this.cauHoiDetail.dapAn.forEach((e) => e.selected = false);
    this.cauHoiDetail.dapAn[index].selected = true;

  }
  getQuestion(mucDo) {
    this.hideDapAn = false;
    this.cauHoiService.getCauHoiRandom(this.detailId, mucDo)
    .subscribe((cauHoi) => {
      this.cauHoiDetail = cauHoi;
      this.cauHoiDetail.dapAn = cauHoi.dapAn.map((e) => ({
        noidung: e,
        selected: false
      }))
    })
  }

  checkXemDapAn() {
    if (!this.cauHoiDetail.isDrapDrop) {
      return this.cauHoiDetail.dapAn.find((e) => e.selected)
    }

    return true;
  }

  xemDapAn() {
    this.hideDapAn = true;
    if (!this.cauHoiDetail.isDrapDrop) {
      const listSelected = this.cauHoiDetail.dapAn.filter((e) => e.selected).map((e) => e.noidung)
      if (this.cauHoiDetail.multipleAnswer) {
        const level1 = this.cauHoiDetail.dapAnDung.find((e) => !listSelected.includes(e))
        const level2 = listSelected.find((e) => !this.cauHoiDetail.dapAnDung.includes(e))
        return level1 && level2
      } else {
        return this.cauHoiDetail.dapAnDung.includes(listSelected[0])
      }
    }
  }
}
