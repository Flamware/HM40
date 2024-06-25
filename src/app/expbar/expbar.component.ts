import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-exp-bar',
  templateUrl: './expbar.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./expbar.component.css']
})
export class ExpBarComponent {
  @Input() value: number = 0;
  @Input() maxValue: number = 100;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  onValueChanged(event: Event) {
    const newValue = parseInt((event.target as HTMLInputElement).value, 10);
    this.value = Math.min(Math.max(newValue, 0), this.maxValue);
    this.valueChange.emit(this.value);
  }
}
