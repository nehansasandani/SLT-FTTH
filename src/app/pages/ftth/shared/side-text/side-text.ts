import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-text.html',
  styleUrl: './side-text.css'
})
export class SideTextComponent {
  @Input() text: string = '';
}