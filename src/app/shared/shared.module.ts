import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule
  ],
  declarations: [],
  exports: [
    ButtonModule,
    DropdownModule,
    SidebarModule
  ]
})
export class SharedModule { }
