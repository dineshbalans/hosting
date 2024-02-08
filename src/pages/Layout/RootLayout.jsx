import React, { useEffect } from "react";
import TopBar from "../../components/HeaderAndFooter/components/TopBar";
import NavBar from "../../components/HeaderAndFooter/components/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../components/HeaderAndFooter/Footer";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";
import Header from "../../components/HeaderAndFooter/Header";

const RootLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://host.mergosoft.com/api/");
        console.log(response);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const data = await response.json();
        console.log(data);
        dispatch(dataActions.setData(data));
      } catch (error) {
        console.log(error);
        console.log(error.message);
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
