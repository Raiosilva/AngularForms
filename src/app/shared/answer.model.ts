import { QuestionsAnswer } from './questions_answer.model';

export class Answer {
    id: number;
    formId: number;
    questionsAnswers: QuestionsAnswer[] = [];

    constructor(AnswerInfo: any) {
        this.id = AnswerInfo.id;
        this.formId = AnswerInfo.formId;

        this.includeQuestionsAnswers(AnswerInfo.questionsAnswers);
    }

    private includeQuestionsAnswers(questions: any) {
        for (const count in questions) {
            this.questionsAnswers.push( new QuestionsAnswer(questions[count]) );
        }
    }
