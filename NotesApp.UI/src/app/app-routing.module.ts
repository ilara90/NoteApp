import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { NotesCardComponent } from './components/notes/notes-card/notes-card.component';

const routes: Routes = [
  {
    path: '',
    component: NotesCardComponent
  },
  {
    path: 'notes',
    component: NotesCardComponent
  },
  {
    path: 'notes/add',
    component: AddNoteComponent
  },
  {
    path: 'notes/edit/:id',
    component: EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
