import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Review from "../components/Review";
import Generater from "../components/Generater";
import Selfservice from "../components/Self-service";
import PricingPlans from "../components/PricingPlans";
import UserVoices from "../components/UserVoices";
import Askedquestion from "../components/Askedquestion";
import Layout from "../Layout/Layout";
function LandingPage() {
  return (
    <div>
      <Layout>
        <Main />
        <Review />
        <Generater />
        <Selfservice />
        <PricingPlans />
        <UserVoices />
        <Askedquestion />
      </Layout>
    </div>
  );
}

export default LandingPage;
