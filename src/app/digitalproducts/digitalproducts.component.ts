import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigitalproductService } from './digitalproduct.service';

@Component({
  selector: 'app-digitalproducts',
  templateUrl: './digitalproducts.component.html',
  styleUrls: ['./digitalproducts.component.css']
})
export class DigitalproductsComponent implements OnInit {

  digitalproductService: DigitalproductService;
  product_id:number;
  // productUpdated = new Subject<void>();
  product : any;

  constructor( digitalproductService : DigitalproductService,private actRoute: ActivatedRoute) { 
    this.digitalproductService = digitalproductService;
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.digitalproductService.getProducts(this.product_id).then(data=>{
    console.log(data);
    this.product = data
  })

  }


}
