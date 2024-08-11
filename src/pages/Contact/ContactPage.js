import React from "react";

import contactBg from "../../assets/images/Section/Contact/contactBg.png";
import contactC from "../../assets/images/Section/Contact/contactC.png";
import contactG from "../../assets/images/Section/Contact/contactG.png";
import {
  ContactSection,
  ContactnBg,
  ContactImg,
  ContactTitles,
  ContactTitle,
} from "./ContactPage.styled";

import { ContactSection } from "./ContactPage.styled";

import BasicLayout from "../../layouts/BasicLayout";

const ContactPage = () => {
  return (
    <BasicLayout>
      <ContactSection></ContactSection>
    </BasicLayout>
  );
};

export default ContactPage;
