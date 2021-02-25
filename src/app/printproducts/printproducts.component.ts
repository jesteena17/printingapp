import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { PrintproductService } from './printproduct.service';

@Component({
  selector: 'app-printproducts',
  templateUrl: './printproducts.component.html',
  styleUrls: ['./printproducts.component.css']
})
export class PrintproductsComponent implements OnInit {

  printproductService: PrintproductService;
  product_id:number;
  // productUpdated = new Subject<void>();
  product : any;

  constructor( printproductService : PrintproductService,private actRoute: ActivatedRoute) { 
    this.printproductService = printproductService;
    this.product_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.printproductService.getProducts(this.product_id).then(data=>{
    console.log(data);
    this.product = data
  })

  }


}
