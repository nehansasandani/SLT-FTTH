import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtthFormComponent } from '../../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../../shared/input-field/input-field';
import { ButtonComponent } from '../../../../shared/button/button';
import { SideTextComponent } from '../../shared/side-text/side-text';

@Component({
  selector: 'app-change-ont-sn',
  standalone: true,
  imports: [CommonModule, FtthFormComponent, InputFieldComponent, ButtonComponent, SideTextComponent],
  templateUrl: './change-ont-sn.html',
  styleUrl: './change-ont-sn.css',
})

export class ChangeOntSnComponent {}
