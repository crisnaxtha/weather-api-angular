import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { TestComponent } from './pages/test/test.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterService } from './services/register.service';
import { HttpClientModule , HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { WeatherService } from './services/weather.service';
import { JsonObjectToJsonArrayPipe } from './pipe/json-object-to-json-array.pipe';
import { ChangeCharacterPipe } from './pipe/change-character.pipe';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TestComponent,
    RegisterComponent,
    JsonObjectToJsonArrayPipe,
    ChangeCharacterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule,
  ],
  providers: [RegisterService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
