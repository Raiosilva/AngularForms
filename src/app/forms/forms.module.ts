import { ColorPickerModule } from 'ngx-color-picker';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as CoreFormsModule } from '@angular/forms';

import { MaterializeModule } from 'ng2-materialize';

import { AppRoutingModule } from './../app-routing.module';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    FormListComponent,
    FormEditComponent,
    ActiveComponent,
    FormFormComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    CoreFormsModule,
    ColorPickerModule
  ],
  exports: [ FormListComponent ]
})
export class FormsModule { }
