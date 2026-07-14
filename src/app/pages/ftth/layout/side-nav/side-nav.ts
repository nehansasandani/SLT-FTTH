import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SIDE_NAV_ITEMS, DEFAULT_ACTIVE_PAGE } from './side-nav.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css'
})
export class SideNavComponent {
  activePage: string = DEFAULT_ACTIVE_PAGE;
  dotColors = ['dot-orange', 'dot-red', 'dot-green', 'dot-blue'];
  navItems: any[] = SIDE_NAV_ITEMS;

  @Output() pageSelected = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer){}

  sanitize(svg: string){
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  toggleItem(item: any) {
  if (item.hasChildren) {
    item.expanded = !item.expanded;
    item.active = item.expanded;

    if(item.expanded && item.defaultPage){
      this.activePage = item.defaultPage;
      this.pageSelected.emit(JSON.stringify({ section: item.label.toLowerCase(), key: item.defaultPage }));
    }
    
    this.navItems.forEach(i => {
      if (!i.hasChildren) i.active = false;
    });
  } else {
    const wasActive = item.active;
    this.navItems.forEach(i => i.active = false);
    item.active = !wasActive;
    if(item.defaultPage){

      this.pageSelected.emit(item.defaultPage);
      
    }
  }
}

  selectPage(child: any, event: Event) {
    event.stopPropagation();
    this.activePage = child.key;
    this.pageSelected.emit(JSON.stringify({ section: child.section, key: child.key }));
  }

  getDotColor(index: number): string {
    return this.dotColors[index % 4];
  }
}