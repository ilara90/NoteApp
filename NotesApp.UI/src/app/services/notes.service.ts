import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Note } from '../components/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseApiUrl + '/api/notes');
  }

  addNote(addNoteRequest: Note): Observable<Note> {
    addNoteRequest.id = '00000000-0000-0000-0000-000000000000';
    addNoteRequest.dateCreated = new Date();
    return this.http.post<Note>(this.baseApiUrl + '/api/notes', addNoteRequest);
  }

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.baseApiUrl + '/api/notes/' + id);
  }

  updateNote(id: string, updateNoteRequest: Note): Observable<Note> {
    return this.http.put<Note>(this.baseApiUrl + '/api/notes/' + id, updateNoteRequest);
  }

  deleteNote(id: string): Observable<Note> {
    return this.http.delete<Note>(this.baseApiUrl + '/api/notes/' + id);
  }
}
