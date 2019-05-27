import { Question } from './question.model';

export class QuestionsAnswer {
    id: number;
    value: string;
    answerId: number;
    question: Question;

    constructor(questionsAnswerInfo: any) {
        this.id = questionsAnswerInfo.id;
        this.value = questionsAnswerInfo.value;
        this.answerId = questionsAnswerInfo.answerId;
        this.question = questionsAnswerInfo.question;
    }
}
