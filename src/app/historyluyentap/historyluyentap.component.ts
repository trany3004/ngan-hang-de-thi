import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historyluyentap',
  templateUrl: './historyluyentap.component.html',
  styleUrls: ['./historyluyentap.component.css']
})
export class HistoryluyentapComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('historyluyentapid >>', this.route.snapshot.params.historyluyentapId)
  }

}
