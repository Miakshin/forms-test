import { FormTemplate } from './create-form/FormTemplate';

export const FORMS : FormTemplate[]= [
  {
    id: 1522277383910,
    title: "Motivation and buying experience survey based on product, price, and experience.",
    description: "  Please rate the following characteristics of the…l with a service representative, please select 6.",
    questions: [
      {
        title: "Knowledge of the product",
        type: "oneOfList",
        variables:["1 Poor"," 2 Fair"," 3 Good"," 4 Very Good", " 5 Excellent",	"6 N/A"]
      },
      {
        title: "Courteousness",
        type: "oneOfList",
        variables:["1 Poor"," 2 Fair"," 3 Good"," 4 Very Good", " 5 Excellent",	"6 N/A"]
      },
      {
        title: "Willingness to help",
        type: "oneOfList",
        variables:["1 Poor"," 2 Fair"," 3 Good"," 4 Very Good", " 5 Excellent",	"6 N/A"]
      },
      {
        title: "Efficiency/quickness",
        type: "oneOfList",
        variables:["1 Poor"," 2 Fair"," 3 Good"," 4 Very Good", " 5 Excellent",	"6 N/A"]
      },
      {
        title: "Ability to complete transaction",
        type: "oneOfList",
        variables:["1 Poor"," 2 Fair"," 3 Good"," 4 Very Good", " 5 Excellent",	"6 N/A"]
      }
    ]
  },
    {
      id: 1522277383540,
      title: "Product Satisfaction Survey Template",
      description:"Customer satisfaction survey, including questions about the product, representative, and process.",
      questions: [
        {
          title: "In thinking about your most recent experience with [COMPANY], how was the quality of customer service you received?",
          type: "ddl",
          variables:[ "Superior","Very Satisfactory","About Average","Somewhat Unsatisfactory","Very Poor"]
        },{
          title: "What recommendations would you offer for improving [PRODUCT]?",
          type: "string",
          variables:[]
        },
        {
          title: "Would you recommend [PRODUCT] to others? ",
          type: "oneOfList",
          variables:["Definitely","Probably","Might or might not","Probably not","Definitely not","N/A"]
        }
      ]
    },
    {
      id: 1522277283540,
      title: "Short Customer Satisfaction Survey Template",
      description:"As the manager of [COMPANY], I want to thank you for giving us the opportunity to serve you. Please help us by taking a couple of minutes to tell us about your experience. We appreciate your business and want to make sure we meet your expectations. Attached, you will find a coupon good for ...... We hope that you will accept this as a token of our good will",
      questions: [
        {
          title: "How often do you use [PRODUCT]?",
          type: "oneOfList",
          variables:["Extremely Satisfied","Somewhat Satisfied","Neutral","Somewhat Unsatisfied","Extremely Unsatisfied"]
        },{
          title: "Now please think about the features and benefits of the [PRODUCT] itself. How satisfied are you with the [PRODUCT]:",
          type: "oneOfList",
          variables:[ "Superior","Very Satisfactory","About Average","Somewhat Unsatisfactory","Very Poor"]
        },
        {
          title: "If you are not satisfied with the product, will you please describe why.",
          type: "string",
          variables:[]
      }
    ]
  }
]
