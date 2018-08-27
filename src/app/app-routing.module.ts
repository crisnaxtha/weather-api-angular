import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path:'register', component: RegisterComponent },
  { path: 'weather', component: WeatherComponent }
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
