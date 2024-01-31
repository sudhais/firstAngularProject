import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddListComponent } from './add-list/add-list.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NotesListComponent,AddListComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
