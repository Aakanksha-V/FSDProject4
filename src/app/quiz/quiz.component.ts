import { Component, OnInit } from '@angular/core';
import { CorrectIndex } from '../correct-index';
import { Questions } from '../questions';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Array<Questions>=[];
  flagQuestion:boolean =false;
  flagButton:boolean =true;
  last:boolean = false;
  selectedAns:any={};
  score: number =0;
  answers: Array<CorrectIndex>=[];

  constructor(private quizSer: QuizService, private router: Router) { }

  ngOnInit(): void {
  }

  loadQuiz(){
    this.flagQuestion = true;
    this.flagButton = false;
    this.quizSer.loadQuizData()
    .subscribe(result=>this.questions=result,error=>console.log(error),()=>console.log("Loaded data sucessfully"));
    this.loadAns();
  }

  isSelected(event : any, option: number, id:number){
    this.selectedAns[id]=option;
  }

  loadAns(){
    this.quizSer.loadAnswerData()
    .subscribe(result=>this.answers,error=>console.log(error),()=>console.log("Anser loaded"));
    
  }

  onSubmit(){
    for(let i= 0;i<12;i++){
      if(this.selectedAns[i]==this.answers[i]){
        this.score++;
        console.log(i);
        console.log(this.selectedAns[i]);
        console.log(this.answers[i]);
      }
    }
    // const navigationDeatils: string[]=['/result'];
    this.flagButton = false;
    this.flagQuestion = false;
    this.last = true;

  }

}
