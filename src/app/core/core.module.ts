import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-check';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  // constructor(
  //   @Optional()
  //   @SkipSelf()
  //   parentModule: CoreModule
  // ) {
  //   throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }
}
