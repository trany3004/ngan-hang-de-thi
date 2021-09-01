import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ontap',
  templateUrl: './ontap.component.html',
  styleUrls: ['./ontap.component.css']
})
export class OntapComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    console.log('ontapid >>', this.route.snapshot.params.ontapId)
  }

}
