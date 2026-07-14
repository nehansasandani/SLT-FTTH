import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpenSignal = signal<boolean>(true); // Start open by default

  get isOpen() {
    return this.isOpenSignal.asReadonly();
  }

  toggle() {
    this.isOpenSignal.set(!this.isOpenSignal());
  }

  setOpen(open: boolean) {
    this.isOpenSignal.set(open);
  }
}
