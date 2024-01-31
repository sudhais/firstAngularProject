import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddListComponent } from './app/add-list/add-list.component';
import { NoteDetailComponent } from './app/note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddListComponent },
  { path: 'note/:id', component: NoteDetailComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
