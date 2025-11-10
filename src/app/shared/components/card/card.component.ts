import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  @Input()
  title : string | null = null;
  @Input()
  content : string | null = null;
  
  @Output()
  readMoreClicked = new EventEmitter<string>();

  ShowAlert(): void{
    if (this.title) {
      this.readMoreClicked.emit(this.title);
    }
  }
}
