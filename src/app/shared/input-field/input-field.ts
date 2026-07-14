import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFieldComponent),
    multi: true
  }]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() label: string = '';

  value: string = '';
  isFocused: boolean = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  get isFloating(): boolean {
    return this.isFocused || this.value.length > 0;
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  onFocus() { this.isFocused = true; }
  onBlur() { this.isFocused = false; this.onTouched(); }

  writeValue(val: string) { this.value = val || ''; }
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}