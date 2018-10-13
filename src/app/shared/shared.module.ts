import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    AutoCompleteModule,
    ToggleButtonModule,
    CalendarModule,
    CardModule,
    AccordionModule
  ],
  declarations: [],
  exports: [
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    ToggleButtonModule,
    CalendarModule,
    CardModule,
    AccordionModule
  ]
})
export class SharedModule { }
