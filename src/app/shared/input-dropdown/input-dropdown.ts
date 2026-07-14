import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { InputFieldComponent } from '../input-field/input-field';

@Component({
  selector: 'app-input-dropdown',
  standalone: true,
  imports: [InputFieldComponent, NgIf, NgFor],
  templateUrl: './input-dropdown.html',
  styleUrls: ['./input-dropdown.css']
})
export class InputDropdownComponent {
  @Input() label: string = '';
  @Input() selectedOption: string = '1';
  @Input() options: string[] = [];

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
}

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}