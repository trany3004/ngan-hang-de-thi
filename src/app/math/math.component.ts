import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ChuDeService } from '../services/chude.service';
import { ChuongService } from '../services/chuong.service';
import { KhoiHocService } from '../services/khoihoc.service';
import { MonHocService } from '../services/monhoc.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  chudeList$: Observable<any[]>;
  chuongList$: Observable<any[]>;
  monHocList$: Observable<any[]>;
  khoiHocList$: Observable<any[]>;

  chuDeList: any[] = [];

  formGroup: FormGroup;

  constructor(
    private chuongHocService: ChuongService,
    private fb: FormBuilder,
    private monhocService: MonHocService,
    private khoihocService: KhoiHocService,
    private chuDeService: ChuDeService,
    private router: ActivatedRoute
  ) {
    this.formGroup = this.fb.group({
      monhoc: ['', Validators.required],
      chuong: ['', Validators.required],
      khoihoc: ['', Validators.required],
      chude: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    const monHoc = this.router.snapshot.paramMap.get("monHoc");
    this.initOptions();
    this.monHocList$.subscribe((rs) => {
      const monSelected = rs.find((e) => e.slug === monHoc);
      this.formGroup.get('monhoc').setValue(monSelected._id);
      this.search();
    })
    combineLatest(
      this.formGroup.get("monhoc").valueChanges.pipe(delay(200)),
      this.formGroup.get("khoihoc").valueChanges.pipe(delay(200)),
      this.formGroup.get("chuong").valueChanges.pipe(delay(200))
    ).subscribe(() => {
      this.formGroup.get('chude').setValue('')
      if (!this.disableChuDe()) {
        this.chudeList$ = this.chuDeService.getChuDeByCondition({
          mon: this.formGroup.get("monhoc").value,
          khoi: this.formGroup.get("khoihoc").value,
          chuong: this.formGroup.get("chuong").value,
        });
      }
      if (!this.disableChuong()) {
        this.chuongList$ = this.chuongHocService.get({
          monhoc: this.formGroup.get("monhoc").value,
          khoihoc: this.formGroup.get("khoihoc").value,
        });
      }
    });
    combineLatest(
      this.formGroup.get("monhoc").valueChanges.pipe(delay(200)),
      this.formGroup.get("khoihoc").valueChanges.pipe(delay(200)),
    ).subscribe(() => {
      this.formGroup.get('chude').setValue('')
      if (!this.disableChuong()) {
        this.chuongList$ = this.chuongHocService.get({
          monhoc: this.formGroup.get("monhoc").value,
          khoihoc: this.formGroup.get("khoihoc").value,
        });
      }
    });
  }

  disableChuong() {
    return (
      !this.formGroup.get("monhoc").value ||
      !this.formGroup.get("khoihoc").value
    );
  }
  disableChuDe() {
    return (
      !this.formGroup.get("monhoc").value ||
      !this.formGroup.get("khoihoc").value ||
      !this.formGroup.get("chuong").value
    );
  }

  initOptions() {
    this.monHocList$ = this.monhocService.get();
    this.khoiHocList$ = this.khoihocService.get();
    // this.chuongList$ = this.chuongHocService.get();
  }

  search() {
    const filter = {...this.formGroup.value}
    Object.keys(this.formGroup.value).forEach((key) => {
      if (!filter[key]) {
        delete filter[key];
      }
    })
    this.chuDeService.getChuDeByCondition(filter).subscribe((rs) => {
      this.chuDeList = rs;
    })

  }

}
