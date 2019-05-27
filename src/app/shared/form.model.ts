import { Question } from './question.model';

export class Form {
    id: number;
    title: string;
    description: string;
    questions: Question[] = [];
    userId: number;
    enable: boolean;
    primaryColor: string;
    slug: string;

    constructor(formInfo: any) {
        this.id = formInfo.id;
        this.title = formInfo.title;
        this.description = formInfo.description;
        this.userId = formInfo.userId;
        this.enable = formInfo.enable;
        this.primaryColor = formInfo.primaryColor;
        this.slug = formInfo.slug;

        this.includeQuestions(formInfo.questions);
    }

    private includeQuestions(questions: any) {
        for (const count in questions) {
            this.questions.push( new Question(questions[count]) );
        }
    }
}
