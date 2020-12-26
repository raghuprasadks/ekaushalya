export interface mcqquestion {
    topic: string;
    noofques: number;
    mark: number;
    duration: string;
    questions: Questions[];
  }
  export interface Questions {
    qno: number;
    question: string;
    type: string;
    options: Options;
  }
  
  export interface Options {
    one: string;
    two: string;
    three: string;
    four: string;
  }
