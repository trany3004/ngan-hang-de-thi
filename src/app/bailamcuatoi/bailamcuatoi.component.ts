import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChuDeService } from '../services/chude.service';
@Component({
  selector: 'app-bailamcuatoi',
  templateUrl: './bailamcuatoi.component.html',
  styleUrls: ['./bailamcuatoi.component.css']
})
export class BailamcuatoiComponent implements OnInit {
  chuDeDetail: any = {}
  constructor(
    private route: ActivatedRoute,
    private chuDeService: ChuDeService,
  ) {

   }

  ngOnInit(): void {
    console.log('detailid >>', this.route.snapshot.params.detailId)
    const detailId = this.route.snapshot.params.detailId;
    this.chuDeService.getChuDeByCondition({
      id: detailId
    }).subscribe((chude) => {
      console.log('chu de >>>>>', chude)
      this.chuDeDetail = chude && chude.length ? chude[0] : null;
    })
  }

}
