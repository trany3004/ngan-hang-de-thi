import { ChuDeService } from './../services/chude.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathContent } from '../math/math-content';

// import { MathContent } from '../math/math/content';
import { ONTAPTOANHOC, ONTAPLICHSU, ONTAPVATLY, ONTAPSINHHOC, ONTAPHOAHOC} from './ontap';

@Component({
  selector: 'app-ontap',
  templateUrl: './ontap.component.html',
  styleUrls: ['./ontap.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class OntapComponent implements OnInit {
  MONHOC = {
    TOAN: 'toan-hoc',
    LICHSU: 'lich-su',
    VATLY: 'vat-ly',
    SINHHOC: 'sinh-hoc',
    HOAHOC: 'hoa-hoc'
  }
  chudeDetail: any = {

  }
  mathMl: MathContent = {
    /**change this code */
    mathml: `<p>In elementary algebra, the <strong>quadratic formula</strong> is the solution of the quadratic equation.</p><p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math></p>`
  };
  ontapContent:any;
  monHoc: string = '';
  constructor(
    private route: ActivatedRoute,
    private chuDeService: ChuDeService
  ) { }


  ngOnInit(): void {
    console.log('ontapid >>', this.route.snapshot.params.ontapId)
    const {ontapId} = this.route.snapshot.params;
    console.log('ontap Id', ontapId);
    // this.ontapContent = this.loadMonHoc();

    this.chuDeService.getChuDeByCondition({
      id: ontapId
    }).subscribe((chude) => {
      console.log('chu de >>>>>', chude)
      this.chudeDetail = chude && chude.length ? chude[0] : null;
    })
  }

  loadMonHoc() {
    switch(this.monHoc) {
      case this.MONHOC.TOAN:
        return ONTAPTOANHOC;
      case this.MONHOC.LICHSU:
        return ONTAPLICHSU;
      case this.MONHOC.VATLY:
        return ONTAPVATLY;
      case this.MONHOC.SINHHOC:
        return ONTAPSINHHOC;
      case this.MONHOC.HOAHOC:
        return ONTAPHOAHOC;

      default:
        return null;
    }
  }

}
