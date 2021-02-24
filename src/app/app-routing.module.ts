import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploaddesignsComponent } from './printproducts/uploaddesigns/uploaddesigns.component';
import { FacebookComponent } from './digitalproducts/facebook/facebook.component';
import { TwitterComponent } from './digitalproducts/twitter/twitter.component';
import { LinkedinComponent } from './digitalproducts/linkedin/linkedin.component';
import { InstagramComponent } from './digitalproducts/instagram/instagram.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelpComponent } from './help/help.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { MylibraryComponent } from './account/mylibrary/mylibrary.component';
import { MyordersComponent } from './account/myorders/myorders.component';
import { SwitchcompanyComponent } from './account/switchcompany/switchcompany.component';
import { SwitchclientComponent } from './account/switchclient/switchclient.component';
import { ItemComponent } from './printproducts/item/item.component';
const routes: Routes = [

  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent },
  {path:'item',component:ItemComponent},
  {path:'cards/:id',component:ItemComponent},
  {path:'greetingcards/:id',component:ItemComponent},
  {path:'letterhead/:id',component:ItemComponent},
  {path:'posters/:id',component:ItemComponent},
  {path:'businesscards/:id',component:ItemComponent},
  {path:'uploaddesigns/',component:UploaddesignsComponent},
  {path:'fb',component:FacebookComponent},
  {path:'tw',component:TwitterComponent},
  {path:'ln',component:LinkedinComponent},
  {path:'in',component:InstagramComponent},
  {path:'ssmanagement',component:SocialmediaComponent},
  {path:'ourservices',component:OurservicesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'help',component:HelpComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
