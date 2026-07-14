import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './layout/side-nav/side-nav';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../../sidebar.service';

import { AdminComponent } from './admin/admin';
import { SuspendResumeComponent } from './suspend-resume/suspend-resume';
import { ChangeComponent } from './change/change';
import { ListDetailsComponent } from './list-details/list-details';

@Component({
  selector: 'app-ftth',
  standalone: true,
  imports: [CommonModule, SideNavComponent, AdminComponent, SuspendResumeComponent, ChangeComponent, ListDetailsComponent],
  templateUrl: './ftth.html',
  styleUrl: './ftth.css'
})
export class FTTHComponent {
  sidebarService = inject(SidebarService);
  showSideNav = false;
  activeNavItem: string = 'list';
  activePage: string = 'list-details';

  constructor(private router: Router) {
    this.updateRouteState(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteState(event.urlAfterRedirects);
      }
    });
  }

  private updateRouteState(url: string) {
    this.showSideNav = url === '/ftth' || url.startsWith('/ftth?');
  }

  onPageSelected(payload: string) {
    try {
      const { section, key } = JSON.parse(payload);
      this.activeNavItem = section;
      this.activePage = key;

  } catch {
      this.activeNavItem = payload;
      this.activePage = payload;
  }
}
}

