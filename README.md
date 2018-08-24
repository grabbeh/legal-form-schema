# legal-form-schema

This repository is intended to create a form of schema that can be read into a website to create a step-by-step form to create a data structure that can be injected into a legal form to enable completion of the form. Separating out data from boilerplate will make it easier for non-legal personnel to create agreements, for example NDAs, without involving legal.

For example:

```
[{
  attributeName: "receivingParty",
  fullAttributeName: "Receiving Party",
  inputType: "singleInput",
  placeholder: "Receiving Party"
},
 {
  attributeName: "jurisdiction",
  fullAttributeName: "Jurisdiction",
  inputType: "select",
  inputOptions: ["New York", "England & Wales", "California"]
 }]
 ```
