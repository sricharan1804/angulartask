import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Work1Component } from './works/work1/work1.component';
import { Work2Component } from './works/work2/work2.component';


const routes : Routes = [
  {
    path:'',
    component: Work1Component
  },
  {
    path:'work1',
    component: Work1Component
  },
  {
    path:'work2',
    component: Work2Component
  },
  {
    path:'work2',
    component: Work2Component
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
