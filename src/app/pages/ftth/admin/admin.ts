import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserTaskComponent } from './create-user-task/create-user-task';
import {CreateUserComponent} from './create-user/create-user';
import {DeleteUserComponent} from './delete-user/delete-user';


@Component({
  selector: 'app-admin',
  imports: [CommonModule, CreateUserTaskComponent, CreateUserComponent, DeleteUserComponent],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})

export class AdminComponent {

  @Input() activePage: string = 'create-user-task'; //Default page loaded for admin section
  
}


