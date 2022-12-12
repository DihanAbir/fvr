import React from "react";
import ReportTerms from "../components/Exhibitors/ReportTerms";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PaymentForm from "../components/Payment/PaymentForm";
import Registrationbanner from "../components/Registration/Registrationbanner";
import RegistrationForm from "../components/Registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <Header/>
      <Registrationbanner />
      <RegistrationForm />
      <ReportTerms />
      <Footer/>
    </div>
  );
};

export default RegistrationPage;
