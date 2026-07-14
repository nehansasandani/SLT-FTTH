import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ftth-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ftth-form.html',
  styleUrl: './ftth-form.css'
})
export class FtthFormComponent {
  @Input() header: string = '';
}