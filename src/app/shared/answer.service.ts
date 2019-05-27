import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';

@Injectable()
export class AnswerService {

  constructor(
    private http: HttpClient,
    private tokenService: Angular2TokenService
    ) { }

  getAnswers(formId: number) {
    return this.tokenService.get('answers', {search: {formId}}).map(res => res.json());
  }

  getAnswer(answerId: number) {
    return this.tokenService.get('answers/' + answerId).map(res => res.json());
  }

  createAnswer(answerParams: number) {
    return this.tokenService.post('answers', answerParams).map(res => res.json());
  }

  destroyAnswer(answerId: number) {
    return this.tokenService.delete('answers/' + answerId).map(res => res.json());
  }
}
