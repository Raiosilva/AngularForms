import { QuestionsAnswer } from './questions_answer.model';

export class Question {
    id: number;
    title: string;
    kind: string;
    formId: number;
    questionsAnswers: QuestionsAnswer[] = [];

    constructor(questionInfo: any) {
        this.id = questionInfo.id;
        this.title = questionInfo.title;
        this.kind = questionInfo.kind;
        this.formId = questionInfo.formId;
        this.includeQuestionsAnswers(questionInfo.questionsAnswers);
    }

    private includeQuestionsAnswers(questionsAnswers: any) {
// tslint:disable-next-line: forin
        for (const count in questionsAnswers) {
            this.questionsAnswers.push( new QuestionsAnswer(questionsAnswers[count]) );
        }
    }
}
