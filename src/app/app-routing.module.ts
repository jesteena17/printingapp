import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploaddesignsComponent } from './printproducts/uploaddesigns/uploaddesigns.component';
import { DigitalproductsComponent } from './digitalproducts/digitalproducts.component';
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
import { PrintproductsComponent } from './printproducts/printproducts.component';
const routes: Routes = [

  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent },
  {path:'item',component:PrintproductsComponent},
  {path:'cards/:id',component:PrintproductsComponent},
  {path:'greetingcards/:id',component:PrintproductsComponent},
  {path:'letterhead/:id',component:PrintproductsComponent},
  {path:'posters/:id',component:PrintproductsComponent},
  {path:'businesscards/:id',component:PrintproductsComponent},
  {path:'uploaddesigns/',component:UploaddesignsComponent},
  {path:'fb/:id',component:DigitalproductsComponent},
  {path:'tw/:id',component:DigitalproductsComponent},
  {path:'ln/:id',component:DigitalproductsComponent},
  {path:'in/:id',component:DigitalproductsComponent},
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
