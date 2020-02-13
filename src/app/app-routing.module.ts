import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'career' , component: CareersComponent},
  {path: 'details' , component: DetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
