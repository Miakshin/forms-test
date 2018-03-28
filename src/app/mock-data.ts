import { FormTemplate } from './create-form/FormTemplate';

export const FORMS : FormTemplate[]= [
  {
    id: 1,
    title: "Test form",
    description: "To check the service",
    questions: [
      {
      title: "service evaluation",
      type: "string",
      variables: ["good"]
      }
    ]
  },
  {
    id: 2,
    title: "Test form2",
    description: "To check the service2",
    questions: [
      {
      title: "service evaluation2",
      type: "string",
      variables: ["good"]
      }
    ]
  }
];
