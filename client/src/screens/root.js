import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "./LandingPage";
import { Usestate, UseEffect, React } from "react";
import axios from "axios";

const Root = () => {
  return (
    <div>
      <Header />
      <LandingPage></LandingPage>
      <Footer />
    </div>
  );
};

export default Root;
