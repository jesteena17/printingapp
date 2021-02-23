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
import { CardsComponent } from './printproducts/cards/cards.component';
import { GreetingcardsComponent } from './printproducts/greetingcards/greetingcards.component';
import { LetterheadsComponent } from './printproducts/letterheads/letterheads.component';
import { PostersComponent } from './printproducts/posters/posters.component';
import { BusinesscardsComponent } from './printproducts/businesscards/businesscards.component';
import { UploaddesignsComponent } from './printproducts/uploaddesigns/uploaddesigns.component';
import { FacebookComponent } from './digitalproducts/facebook/facebook.component';
import { TwitterComponent } from './digitalproducts/twitter/twitter.component';
import { LinkedinComponent } from './digitalproducts/linkedin/linkedin.component';
import { InstagramComponent } from './digitalproducts/instagram/instagram.component';
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
import { ItemComponent } from './printproducts/item/item.component';
import { ItemListComponent } from './printproducts/item/item-list/item-list.component';
import { ItemSingleComponent } from './printproducts/item/item-single/item-single.component';
import { ItemcategoryComponent } from './printproducts/item/itemcategory/itemcategory.component';
import { ItemfilterComponent } from './printproducts/item/itemfilter/itemfilter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    GreetingcardsComponent,
    LetterheadsComponent,
    PostersComponent,
    BusinesscardsComponent,
    UploaddesignsComponent,
    FacebookComponent,
    TwitterComponent,
    LinkedinComponent,
    InstagramComponent,
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
    ItemComponent,
    ItemListComponent,
    ItemSingleComponent,
    ItemcategoryComponent,
    ItemfilterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedService,{provide: APP_BASE_HREF, useValue: 'http://localhost:4200/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
