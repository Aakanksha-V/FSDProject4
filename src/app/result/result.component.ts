import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  finalscore: number = this.quizSer.score;
  constructor(private quizSer: QuizService) { }

  ngOnInit(): void {
  }

}
