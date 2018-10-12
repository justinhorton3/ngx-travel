import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarOpen: boolean;

  onToggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
