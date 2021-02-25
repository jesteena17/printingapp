import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploaddesignsComponent } from './printproducts/uploaddesigns/uploaddesigns.component';

import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { MylibraryComponent } from './account/mylibrary/mylibrary.component';
import { MyordersComponent } from './account/myorders/myorders.component';
import { SwitchcompanyComponent } from './account/switchcompany/switchcompany.component';
import { SwitchclientComponent } from './account/switchclient/switchclient.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ItemListComponent } from './printproducts/item-list/item-list.component';
import { ItemSingleComponent } from './printproducts/item-single/item-single.component';

import { DigitalproductsComponent } from './digitalproducts/digitalproducts.component';
import { DigitalItemlistComponent } from './digitalproducts/digital-itemlist/digital-itemlist.component';
import { DigitalItemsingleComponent } from './digitalproducts/digital-itemsingle/digital-itemsingle.component';
import { PrintproductsComponent } from './printproducts/printproducts.component';
import { PrintproductService } from './printproducts/printproduct.service';
import { DigitalproductService } from './digitalproducts/digitalproduct.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
   
    UploaddesignsComponent,
   
    SocialmediaComponent,
    OurservicesComponent,
    AboutusComponent,
    HelpComponent,
    MyaccountComponent,
    MylibraryComponent,
    MyordersComponent,
    SwitchcompanyComponent,
    SwitchclientComponent,
    PagenotfoundComponent,
   
    ItemListComponent,
    ItemSingleComponent,
  
    DigitalproductsComponent,
    DigitalItemlistComponent,
    DigitalItemsingleComponent,
    PrintproductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SharedService,PrintproductService,DigitalproductService,
    {provide: APP_BASE_HREF, useValue: 'http://localhost:4200/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
