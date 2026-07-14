import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FtthFormComponent } from '../../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../../shared/input-field/input-field';
import { ButtonComponent } from '../../../../shared/button/button';
import { SideTextComponent } from '../../shared/side-text/side-text';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, FtthFormComponent, InputFieldComponent, ButtonComponent, SideTextComponent],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.css',
})
export class DeleteUserComponent {}
