// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         type="text"
//         {...formik.getFieldProps('firstName')}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}

//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" {...formik.getFieldProps('email')} />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// import React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: "", lastName: "", email: "" }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, "Must be 15 characters or less")
//           .required("Required"),
//         lastName: Yup.string()
//           .max(20, "Must be 20 characters or less")
//           .required("Required"),
//         email: Yup.string().email("Invalid email address").required("Required"),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {(formik) => (
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             id="firstName"
//             type="text"
//             {...formik.getFieldProps("firstName")}
//           />
//           {formik.touched.firstName && formik.errors.firstName ? (
//             <div>{formik.errors.firstName}</div>
//           ) : null}

//           <label htmlFor="lastName">Last Name</label>
//           <input
//             id="lastName"
//             type="text"
//             {...formik.getFieldProps("lastName")}
//           />
//           {formik.touched.lastName && formik.errors.lastName ? (
//             <div>{formik.errors.lastName}</div>
//           ) : null}

//           <label htmlFor="email">Email Address</label>
//           <input id="email" type="email" {...formik.getFieldProps("email")} />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}

//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </Formik>
//   );
// };


// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: '', lastName: '', email: '' }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .max(20, 'Must be 20 characters or less')
//           .required('Required'),
//         email: Yup.string().email('Invalid email address').required('Required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" type="text" />
//         <ErrorMessage name="firstName" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field name="lastName" type="text" />
//         <ErrorMessage name="lastName" />

//         <label htmlFor="email">Email Address</label>
//         <Field name="email" type="email" />
//         <ErrorMessage name="email" />

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };



import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};



const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          {/* <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
