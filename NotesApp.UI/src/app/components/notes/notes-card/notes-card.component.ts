import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.css']
})
export class NotesCardComponent implements OnInit {

  notes: Note[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes()
      .subscribe({
        next: (notes) => {
          this.notes = notes;
        },
        error: (Response) => {
          console.log(Response)
        }
      })
  }

}
