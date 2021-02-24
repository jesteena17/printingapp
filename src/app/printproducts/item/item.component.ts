import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from '../../shared.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  sharedService : SharedService;

  // productUpdated = new Subject<void>();
  product : any;

  constructor(sharedService : SharedService) { 
    this.sharedService = sharedService;
  }

  ngOnInit(): void {
    this.sharedService.getProducts(2).then(data=>{
    console.log(data);
    this.product = data
  })

  }

}
