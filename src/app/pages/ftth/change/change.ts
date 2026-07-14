import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeOntSnComponent} from './change-ont-sn/change-ont-sn';
import {ChangeVoicePortComponent} from './change-voice-port/change-voice-port';
import {ChangeOLTClarityComponent} from './change-olt-clarity/change-olt-clarity';

@Component({
  selector: 'app-change',
  imports: [CommonModule, ChangeOntSnComponent, ChangeVoicePortComponent, ChangeOLTClarityComponent],
  templateUrl: './change.html',
  styleUrl: './change.css',
})
export class ChangeComponent {

  @Input() activePage: string = 'change-ont-sn'; //Default page loaded for Change section
  
}
