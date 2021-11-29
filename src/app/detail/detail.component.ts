import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChuDeService } from '../services/chude.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
chuDeDetail: any = {}
  constructor(
    private route: ActivatedRoute,
    private chuDeService: ChuDeService,
  ) { }

  ngOnInit(): void {
    console.log('detailid >>', this.route.snapshot.params.detailId)
    const detailId = this.route.snapshot.params.detailId;
    this.chuDeService.getChuDeByCondition({
      id: detailId
    }).subscribe((chude) => {
      console.log('chu de >>>>>', chude)
      this.chuDeDetail = chude && chude.length ? chude[0] : null;
    })

    




    //get detail => 1 => id: 1, title: TOan dai so,
  }

}
