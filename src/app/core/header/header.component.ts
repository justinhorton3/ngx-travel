import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: String;
  @Output() hamburgerClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.title = 'Ngx Booking';
  }

  onhambrugerClick(): void {
    this.hamburgerClick.emit(true);
    console.log('HEADER - HamburgerClicked: ', this.hamburgerClick);
  }
}
