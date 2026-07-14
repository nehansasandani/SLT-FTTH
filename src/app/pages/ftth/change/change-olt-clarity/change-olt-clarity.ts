import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtthFormComponent } from '../../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../../shared/input-field/input-field';
import { InputDropdownComponent } from '../../../../shared/input-dropdown/input-dropdown';
import { ButtonComponent } from '../../../../shared/button/button';
import { SideTextComponent } from '../../shared/side-text/side-text';

@Component({
  selector: 'app-change-olt-clarity',
  standalone: true,
  imports: [CommonModule, FtthFormComponent, InputFieldComponent, ButtonComponent, SideTextComponent, InputDropdownComponent],
  templateUrl: './change-olt-clarity.html',
  styleUrl: './change-olt-clarity.css',
})

export class ChangeOLTClarityComponent {

  selectedVP: string = '';
}
