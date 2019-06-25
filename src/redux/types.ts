
export type DifficultlyType = 'hard' | 'medium' | 'easy';
export type BooleanCorrectAnswerType = 'True' | 'False';

export interface QuizQuestionType {
    category: string;
    type: string;
    difficulty: DifficultlyType;
    question: string;
    correct_answer: BooleanCorrectAnswerType; // maybe just string?
    incorrect_answers: Array<BooleanCorrectAnswerType>;
}

export interface QuizQuestionsStateType {
    questions: Array<QuizQuestionType>;
    loading: boolean;
    error: Error | null;
}

export interface QuizProgressType {
    currentQuestion: number;
}

export interface QuizAnswerType {
    questionId: number;
    answer: BooleanCorrectAnswerType;
}

export type QuizAnswersType = Array<QuizAnswerType>;