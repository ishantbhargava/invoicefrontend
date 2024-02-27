import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Review from "../components/Review";
import Generater from "../components/Generater";
import Selfservice from "../components/Self-service";
import PricingPlans from "../components/PricingPlans";
import UserVoices from "../components/UserVoices";
import Askedquestion from "../components/Askedquestion";
import Footer from "../components/Footer";
function FrontPages() {
  return (
    <div>
      <Navbar />
      <Main />
      <Review />
      <Generater />
      <Selfservice />
      <PricingPlans />
      <UserVoices />
      <Askedquestion />
      <Footer />{" "}
    </div>
  );
}

export default FrontPages;
