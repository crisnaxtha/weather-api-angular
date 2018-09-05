import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path:'register', component: RegisterComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'test', component: TestComponent},
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
