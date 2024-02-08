import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout.jsx";
import HomePage from "./pages/Home/Home/HomePage.jsx";
import Imagepage from "./pages/Home/Image/Imagepage.jsx";
import DomainSearchOne from "./pages/Home/DomainSearchOne/DomainSearchOne.jsx";
import DomainSearchTwo from "./pages/Home/DomainSearchTwo/DomainSearchTwo.jsx";
import DomainSearchThree from "./pages/Home/DomainSearchThree/DomainSearchThree.jsx";
import DomainSearchFour from "./pages/Home/DomainSearchFour/DomainSearchFour.jsx";
import Offer from "./pages/Home/Offer/Offer.jsx";
import DomainSlider from "./pages/Home/DomainSlider/DomainSlider.jsx";
import ResellerHosting from "./pages/Home/ResellerHosting/ResellerHosting.jsx";
import AboutUs from "./pages/Page/AboutUs/AboutUs.jsx";
import Services from "./pages/Page/Services/Services.jsx";
import Reviews from "./pages/Page/Reviews/Reviews.jsx";
import SharedHosting from "./pages/Hosting/SharedHosting/SharedHosting.jsx";
import EmailHosting from "./pages/Hosting/EmailHosting/EmailHosting.jsx";
import SharedWpHosting from "./pages/Hosting/SharedWpHosting/SharedWpHosting.jsx";
import DedicatedHosting from "./pages/Hosting/DedicatedHosting/DedicatedHosting.jsx";
import WordpressHosting from "./pages/Hosting/WordpressHosting/WordpressHosting.jsx";
import VpsHosting from "./pages/Hosting/VpsHosting/VpsHosting.jsx";
import CloudHosting from "./pages/Hosting/CloudHosting/CloudHosting.jsx";
import WoocommerceHosting from "./pages/Hosting/WoocommerceHosting/WoocommerceHosting.jsx";
import DomainSearch from "./pages/Page/DomainSearch/DomainSearch.jsx";
import BlackFridaySale from "./pages/Page/BlackFridaySale/BlackFridaySale.jsx";
import BlackFridayOffer from "./pages/Page/BlackFridayOffer/BlackFridayOffer.jsx";
import Pricing from "./pages/Page/Pricing/Pricing.jsx";
import Blog from "./pages/Page/Blog/Blog.jsx";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import Networks from "./pages/About/Network/Networks.jsx";
import Partner from "./pages/About/Partner/Partner.jsx";
import ContactUs from "./pages/About/ContactUs/ContactUs.jsx";
import Support from "./pages/Support/Support/Support.jsx";
import DataCenter from "./pages/Support/DataCenter/DataCenter.jsx";
import SubmitRequest from "./pages/Support/SubmitRequest/SubmitRequest.jsx";
import Status from "./pages/Support/Status/Status.jsx";
import LoginOrSignup from "./pages/Page/LoginOrSignup/LoginOrSignup.jsx";
import LinuxVps from "./pages/Servers/LinuxVps/LinuxVps.jsx";
import WindowsVps from "./pages/Servers/WindowsVps/WindowsVps.jsx";
import CloudServers from "./pages/Servers/CloudServers/CloudServers.jsx";
import DedicatedServers from "./pages/Servers/DedicatedServers/DedicatedServers.jsx";
import RemoteBackups from "./pages/Security&Tools/RemoteBackups/RemoteBackups.jsx";
import SslCertificates from "./pages/Security&Tools/SslCertificates/SslCertificates.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "image",
        element: <Imagepage />,
      },
      {
        path: "domain-search-one",
        element: <DomainSearchOne />,
      },
      {
        path: "domain-search-two",
        element: <DomainSearchTwo />,
      },
      {
        path: "domain-search-three",
        element: <DomainSearchThree />,
      },
      {
        path: "domain-search-four",
        element: <DomainSearchFour />,
      },
      {
        path: "offer",
        element: <Offer />,
      },
      {
        path: "domain-slider",
        element: <DomainSlider />,
      },
      {
        path: "reseller-hosting",
        element: <ResellerHosting />,
      },
      // Pages
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "domain-search",
        element: <DomainSearch />,
      },
      {
        path: "black-friday-sale",
        element: <BlackFridaySale />,
      },
      {
        path: "black-friday-offer",
        element: <BlackFridayOffer />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "get-in",
        element: <LoginOrSignup />,
      },
      // Servers
      {
        path: "/linus-vps",
        element: <LinuxVps />,
      },
      {
        path: "/windows-vps",
        element: <WindowsVps />,
      },
      {
        path: "/cloud-servers",
        element: <CloudServers />,
      },
      {
        path: "/dedicated-servers",
        element: <DedicatedServers />,
      },
      // Security & Tools
      {
        path:'backups',
        element: <RemoteBackups />
      },
      {
        path:'ssl-certificates',
        element: <SslCertificates />
      },
      // Support
      {
        path: "submit-request",
        element: <SubmitRequest />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "network",
        element: <DataCenter />,
      },
      {
        path: "status",
        element: <Status />,
      },
      // About
      {
        path: "partner",
        element: <Partner />,
      },
      {
        path: "network",
        element: <Networks />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "hosting",
        children: [
          {
            path: "shared-hosting",
            element: <SharedHosting />,
          },
          {
            path: "email-hosting",
            element: <EmailHosting />,
          },
          {
            path: "vps-hosting",
            element: <VpsHosting />,
          },
          {
            path: "shared-wp-hosting",
            element: <SharedWpHosting />,
          },
          {
            path: "dedicated-server-hosting",
            element: <DedicatedHosting />,
          },
          {
            path: "wp-hosting",
            element: <WordpressHosting />,
          },
          {
            path: "cloud-hosting",
            element: <CloudHosting />,
          },
          {
            path: "woocommerce-hosting",
            element: <WoocommerceHosting />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
