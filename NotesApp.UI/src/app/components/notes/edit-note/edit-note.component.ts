import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  noteDetails: Note = {
    id: '',
    title: '',
    description: '',
    colorHex: '',
    dateCreated: new Date()
  };

  constructor(private route: ActivatedRoute, private noteService: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.noteService.getNote(id)
            .subscribe({
              next: (response) => {
                this.noteDetails = response;
              }
            })
        }
      }
    })
  }

  updateNote() {
    this.noteService.updateNote(this.noteDetails.id, this.noteDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['notes'])
        }
      });
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['notes'])
        }
      });
  }

}
