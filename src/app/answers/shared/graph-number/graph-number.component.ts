import { Component, OnInit, Input } from '@angular/core';
import { QuestionsAnswer } from '../../../shared/questions_answer.model';

@Component({
  selector: 'app-graph-number',
  templateUrl: './graph-number.component.html',
  styleUrls: ['./graph-number.component.css']
})
export class GraphNumberComponent implements OnInit {

  @Input() questionsAnswers: QuestionsAnswer[];
  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    const answers = {};

    for (const qa of this.questionsAnswers) {
      if (qa.value != null) {
        if (answers.hasOwnProperty(qa.value) !== true) {
          answers[qa.value] = 1;
        } else {
          answers[qa.value] += 1;
        }
      }
    }

    const answersLabels = [];
    const answersValues = [];
    for (const key in answers) {
      if (answers.hasOwnProperty(key)) {
        answersLabels.push(key);
        answersValues.push(answers[key]);
      }
    }
    this.pieChartLabels = answersLabels;
    this.pieChartData = answersValues;
  }
}
