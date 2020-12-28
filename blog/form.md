# Formik + @lskjs/form controls


```jsx
import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormItem from '@lskjs/form/components/FormItem'
import Input from '@lskjs/form/controls/Input'
import Textarea from '@lskjs/form/controls/Textarea'
import Select from '@lskjs/form/controls/Select'
import Checkbox from '@lskjs/form/controls/Checkbox'
import Button from '@lskjs/button/Button'

const MenuEditorForm = (props) => {

  const contentTypeOptions = ['text', 'img'];
  const keyboardTypeOptions = ['text', 'inline'];
  const buttonTypeOptions = ['callback', 'url'];
    
  return (
    <Formik
      initialValues={{
        path: '',
        contentType: '',
        text_url: '',
        keyboard: false,
        keyboardType: '',
        title: '',
        buttonType: '',
        value: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      render={({
        values,
        handleChange,
      }) => (
      <Form>

        <p>Path</p>
        <FormItem label="Path">
          <Field name="path" placeholder="path" component={Input} />
        </FormItem>

        <p>Content</p>
        <FormItem label="Title">
          <Field 
            id="contentType" 
            name="contentType" 
            component={Select}
            value={values.contentType} 
            onChange={handleChange}
            options={contentTypeOptions}
            placeholder="content type"
          />
         </FormItem>
        <FormItem label="Text/url">
          <Field id="text_url" name="text_url" placeholder="text/url" component={Textarea} />
        </FormItem>

        <p>Keyboard</p>
        <p>
          <Field name="keyboard" component={Checkbox} label="keyboard" />
        </p>
        <FormItem label="Title">
          <Field 
            id="keyboardType" 
            name="keyboardType" 
            component={Select}
            value={values.keyboardType} 
            onChange={handleChange}
            options={keyboardTypeOptions}
            placeholder="keyboard type"
          />
        </FormItem>

        <p>Buttons</p>
        <FormItem label="Title">
          <Field id="title" name="title" placeholder="title" component={Input} />
        </FormItem>
        <FormItem label="Type">
          <Field 
            id="buttonType" 
            name="buttonType" 
            component={Select}
            value={values.buttonType} 
            onChange={handleChange}
            options={buttonTypeOptions}
            placeholder="button type"
          />
        </FormItem>
        <FormItem label="Value">
          <Field id="value" name="value" placeholder="value/url" component={Input} />
        </FormItem>

        <Button type="submit" paint="primary">Submit</Button>
        <pre style={{margin: '2rem 0'}}>
          {JSON.stringify(values, null, 2)}
        </pre>
      </Form>
    )} />
  );
}

export default MenuEditorForm;
```
