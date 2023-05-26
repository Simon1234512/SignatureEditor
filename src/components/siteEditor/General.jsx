import React, { useContext, useEffect, useRef } from "react";
import FormInput from "../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AppContext } from "./AppContext";

const General = () => {
  const re =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

  const validation = Yup.object({
    name: Yup.string()
      .min(2, "Must be 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    title: Yup.string()
      .min(2, "Must be 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    company: Yup.string()
      .min(2, "Must be 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    websitelink: Yup.string().matches(re, "URL is not valid"),
    address: Yup.string()
      .min(2, "Must be 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const { setData,data } = useContext(AppContext);

  const handleFieldChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  };
  return (
    <div className="generaleditor">
      <div className="generaleditor-container">
        <h4>Enter your signature details</h4>

        <div className="generaleditor-container-inputs">
          <Formik
            initialValues={{
              name: "",
              email: "",
              title: "",
              company: "",
              phone: "",
              websitelink: "",
              address: "",
            }}
            validateOnMount
            validationSchema={validation}
          >
            {(formik) =>{
            return (
              <Form>
                <div>
                  <FormInput
                    label="Name"
                    name="name"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <FormInput
                    label="Title"
                    name="title"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                    formik.handleChange(e);
                    handleFieldChange(e);
                    }}
                  />
                  <FormInput
                    label="Company"
                    name="company"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <FormInput
                    label="Phone"
                    name="phone"
                    type="number"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <FormInput
                    label="Website URL"
                    name="websitelink"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <FormInput
                    label="Address"
                    name="address"
                    type="text"
                    className="edit-input"
                    margin="m-4"
                    onChange={(e) => {
                      console.log(e.target);
                      formik.handleChange(e);
                      handleFieldChange(e);
                      }}
                  />
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default General;
