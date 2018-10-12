import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AutoCompleteModule,
    ToggleButtonModule,
    CalendarModule,
    CardModule,
    AccordionModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
