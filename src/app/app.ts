import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav';
import { RouterOutlet, Router } from '@angular/router';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TopNavComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarService = inject(SidebarService);
  router = inject(Router);

  isSidebarVisible(): boolean {
    const url = this.router.url;
    return this.sidebarService.isOpen() && url !== '/login';
  }
}