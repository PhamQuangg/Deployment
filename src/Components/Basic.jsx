import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Số điện thoại phải là số và có ít nhất 10 chữ số")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  event : Yup.string().required("Chọn 1 sự kiện")
});

const Basic = () => (
  <div>
    <h1>Đăng Ký Sự Kiện</h1>
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
        email: "",
        event:"",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, isSubmitting  }) => (
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" placeholder="Enter a name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}

          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" placeholder="Enter your Phone"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Enter your email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label htmlFor="location">Where do you work?</label>
           <Field
             component="select"
             id="event"
             name="event"
           >
             <option value="">--Selct--</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>
           </Field>
          <button type="submit" disabled={isSubmitting}>Submit</button>

          
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
