export class FormTemplate{
  id: number;
  title: string;
  description: string;
  questions: Question[]
}

class Question{
  title: string;
  type: string;
  variables: string[]
}
