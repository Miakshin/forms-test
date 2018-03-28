export class FormTemplate{
  id: number;
  title: string;
  description: string;
  questions: [
    {
    title: string;
    type: string;
    variables: string[]
    }
  ]
}
