import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Questions } from './questions';
import { CorrectIndex } from './correct-index';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  score:number=0;

  constructor(private http: HttpClient) { }

  loadQuizData():Observable<Questions[]>{
    return this.http.get<Questions[]>("http://localhost:3000/questions");
  }
  loadAnswerData():Observable<CorrectIndex[]>{
    return this.http.get<CorrectIndex[]>("http://localhost:3001/correctIndex");
  }
}
