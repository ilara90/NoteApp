import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesCardComponent } from './components/notes/notes-card/notes-card.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesCardComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
