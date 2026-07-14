import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtthFormComponent } from '../shared/ftth-form/ftth-form';
import { InputFieldComponent } from '../../../shared/input-field/input-field';
import { ButtonComponent } from '../../../shared/button/button';
import { SideTextComponent } from '../shared/side-text/side-text';

@Component({
  selector: 'app-suspend-resume',
  standalone: true,
  imports: [CommonModule, FtthFormComponent, InputFieldComponent, ButtonComponent, SideTextComponent],
  templateUrl: './suspend-resume.html',
  styleUrl: './suspend-resume.css'
})
export class SuspendResumeComponent {}