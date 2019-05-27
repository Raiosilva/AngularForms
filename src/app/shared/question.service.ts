import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';

@Injectable()
export class QuestionService {

  constructor(
    private http: HttpClientModule,
    private tokenService: Angular2TokenService
    ) { }

  createQuestion(formId: number, question: number) {
    return this.tokenService.post('questions', {formId, question}).map(res => res.json());
  }

  updateQuestion(questionId: number, questionParams: number) {
    return this.tokenService.put('questions/' + questionId, questionParams).map(res => res.json());
  }

  destroyQuestion(questionId: number) {
    return this.tokenService.delete('questions/' + questionId).map(res => res.json());
  }
}
