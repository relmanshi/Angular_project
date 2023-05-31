import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { UserComponent } from './components/user/user.component';
import { ImgComponent } from './components/img/img.component';
const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "user/:id", component: UserComponent},
  {path: "user/:id/albums/:albumId", component: ImgComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
