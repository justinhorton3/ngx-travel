import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() isSidebarOpen: boolean;
  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onSidebarClose() {
    this.closeSidebar.emit(true);
  }
}
