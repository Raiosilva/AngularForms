import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClientModule,
    private tokenService: Angular2TokenService
  ) { }

  getForms() {
    return this.tokenService.get('forms').map(res => res.json());
  }

  getForm(formId: number) {
    return this.tokenService.get('forms/' + formId).map(res => res.json());
  }

  createForms(formParams: any) {
    return this.tokenService.post('forms', formParams).map(res => res.json());
  }

  updateForms(formId: number, formParams: any) {
    return this.tokenService.put('forms/' + formId, formParams).map(res => res.json());
  }

  destroyForms(formId: number) {
    return this.tokenService.delete('forms/' + formId).map(res => res.json());
  }
}
