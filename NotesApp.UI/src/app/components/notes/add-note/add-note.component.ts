import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  addNoteRequest: Note = {
    id: '',
    title: '',
    description: '',
    colorHex: '',
    dateCreated: new Date()
  };
  constructor(private noteService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }

  addNote() {
    this.noteService.addNote(this.addNoteRequest)
      .subscribe({
        next: (note) => {
          this.router.navigate(['notes']);
        }
      });
  }

}
