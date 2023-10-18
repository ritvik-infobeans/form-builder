```markdown
# React Form Builder

Form Builder is a package that simplifies the process of building a React form. It provides an easy way to create different field types by importing a simple React component and passing a specified object. With Form Builder, you can create forms without the hassle of individually coding each field type.

## Installation

In your project's `package.json` file, add the following line in the dependencies:

```json
"dependencies": {
   "react-form-builder": "git+https://github.com/ritvik-infobeans/react-form-builder.git"
}
```

After adding this, run:

```bash
npm install
```

## Usage

Here is a sample JavaScript object:

```javascript
const anyTypeDataObject = {
    fieldName: ["FieldName1"],
    fieldType: "text",
    inputType: "number",
    labelName: "",
};
```

To use the component, import it as follows:

```jsx
<BasicForm
  data={textTypeDataObject}
  validate={true}
  onFormChange={handleFormData}
  isFormSubmitted={isFormSubmitted}
/>
```

Keep the `validate` prop as true to add validation to your fields, and make sure to use the `onFormChange` and `isFormSubmitted` props as shown above.

Here's a sample code for using the component in your React app:

```jsx
import { useState } from "react";
import { BasicForm } from "form-builder-package";

function TestComponent() {
  // ... (omitting the rest for brevity)
}
```

### Sample Field Objects

Here are some sample objects for different types of fields that you can use with the Form Builder:

- Radio type:

```javascript
const radioTypeDataObject = {
  fieldName: ["Yes", "No"],
  fieldType: "radio",
  inputType: "",
  labelName: "Accept Terms",
};
```

- Checkbox type:

```javascript
const checkboxTypeDataObject = {
  fieldName: ["Email", "Newsletter"],
  fieldType: "checkbox",
  inputType: "",
  labelName: "Get Updates Via",
};
```

- Text type:

```javascript
const textTypeDataObject = {
  fieldName: ["First Name"],
  fieldType: "text",
  inputType: "text",
  labelName: "",
};
```

- Number type:

```javascript
const numberTypeDataObject = {
  fieldName: ["Phone"],
  fieldType: "text",
  inputType: "number",
  labelName: "",
};
```

- Email type:

```javascript
const emailTypeDataObject = {
  fieldName: ["Email"],
  fieldType: "text",
  inputType: "email",
  labelName: "",
};
```

- Password type:

```javascript
const passwordTypeDataObject = {
  fieldName: ["Password"],
  fieldType: "text",
  inputType: "password",
  labelName: "",
};
```

- Textarea type:

```javascript
const textareaTypeDataObject = {
  fieldName: ["Remark"],
  fieldType: "textarea",
  inputType: "text",
  labelName: "",
};
```

- Select type:

```javascript
const selectTypeDataObject = {
  fieldName: ["India", "USA", "UK", "UAE"],
  fieldType: "select",
  inputType: "",
  labelName: "Country",
};
```

Feel free to use these sample objects as templates for your specific field requirements.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to replace the placeholders with the actual content and modify the structure as needed.
