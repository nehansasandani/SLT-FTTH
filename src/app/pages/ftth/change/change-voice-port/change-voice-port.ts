import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FtthFormComponent } from '../../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../../shared/input-field/input-field';
import { ButtonComponent } from '../../../../shared/button/button';
import { SideTextComponent } from '../../shared/side-text/side-text';
import { InputDropdownComponent } from '../../../../shared/input-dropdown/input-dropdown';

@Component({
  selector: 'app-change-voice-port',
  standalone: true,
  imports: [CommonModule, FormsModule, FtthFormComponent, InputFieldComponent, ButtonComponent, SideTextComponent, InputDropdownComponent],
  templateUrl: './change-voice-port.html',
  styleUrl: './change-voice-port.css'
})
export class ChangeVoicePortComponent {

  selectedVP: string = '';
  
}
