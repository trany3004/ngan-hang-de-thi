import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-luyentap',
  templateUrl: './luyentap.component.html',
  styleUrls: ['./luyentap.component.css']
})
export class LuyentapComponent implements OnInit {

  constructor( private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log('leveid >>', this.route.snapshot.params.levelId)
  }

}
