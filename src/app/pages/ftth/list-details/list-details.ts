import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtthFormComponent } from '../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../shared/input-field/input-field';
import { ButtonComponent } from '../../../shared/button/button';

@Component({
  selector: 'app-list-details',
  standalone: true,
  imports: [CommonModule, FtthFormComponent, InputFieldComponent, ButtonComponent],
  templateUrl: './list-details.html',
  styleUrl: './list-details.css'
})
export class ListDetailsComponent {}