import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedService } from '../../shared.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  sharedService : SharedService;
  product_id:number;
  // productUpdated = new Subject<void>();
  product : any;

  constructor(sharedService : SharedService,private actRoute: ActivatedRoute) { 
    this.sharedService = sharedService;
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.sharedService.getProducts(this.product_id).then(data=>{
    console.log(data);
    this.product = data
  })

  }

}
