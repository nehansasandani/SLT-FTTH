import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.css'
})
export class TopNavComponent {
  sidebarService = inject(SidebarService);

  sections = [

        {label: 'Home', route: '/'},
        {label: 'PSTN', route: '/pstn'},
        {label: 'FTTH', route: '/ftth'},
        {label: 'VoLT', route: '/volt'},
        {label: 'VoBB', route: '/vobb'},
        {label: 'IP-Endpoint', route: '/ip-endpoint'},
        {label: 'Change ONT', route: '/change-ont'}

  ];
}