import { FunctionComponent, useEffect, useState } from "react";
import ContactUs from "./contact-us";
import ContactUsForm from "./contact-us-form";
import FAQ from "../faq/f-a-q";
import ContactUsDetails from "./contact-us-details";


const Contact = () => {


  return (
    <>
      <div className="content-wrapper">
      <ContactUs/>
      <ContactUsDetails/>
      <ContactUsForm/>
      <FAQ/>
      </div>
    </>
  );
};

export default Contact;
