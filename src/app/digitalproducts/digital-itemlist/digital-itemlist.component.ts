import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-itemlist',
  templateUrl: './digital-itemlist.component.html',
  styleUrls: ['./digital-itemlist.component.css']
})
export class DigitalItemlistComponent implements OnInit {
  @Input() productData;
  constructor() { }

  ngOnInit(): void {
  }

}
