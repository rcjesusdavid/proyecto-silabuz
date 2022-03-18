import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterP from "./pages/RegisterPostulant";
import RegisterE from "./pages/RegisterCompany";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";

import DashboardPostulant from "./pages/DashboardPostulant";
import DashboardCompany from "./pages/DashboardCompany";
import Offers from "./pages/Offers";
import PostWorkOffer from "./components/PostWorkOffer";

import Blog from "./pages/Blog";
import WorkOfferDetails from "./components/WorkOfferDetails";

import AppliedWorkOffersPostulant from "./components/AppliedWorkOffersPostulant";
import ManageWorkOffers from "./components/ManageWorkOffers";
import SidebarCompany from "./components/shared/SidebarCompany";
import DashCompany from "./components/DashCompany";
import CompanyProfile from "./components/CompanyProfile";
import CompanyPublicProfile from "./components/CompanyPublicProfile";
import PostulantPublicProfile from "./components/PostulantPublicProfile";
import ChangePassCompany from "./components/ChangePassCompany";
import PostulantProfile from "./components/PostulantProfile";
import ChangePassPostulant from "./components/ChangePassPostulant";
import LoginCompany from "./pages/LoginCompany";
import LoginPostulant from "./pages/LoginPostulant";
import Ubigeo from "./pages/Ubigeo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="/login-postulant" element={<Layout></Layout>}>
          <Route index element={<LoginPostulant></LoginPostulant>}></Route>
        </Route>
        <Route path="/register-postulant" element={<Layout></Layout>}>
          <Route index element={<RegisterP></RegisterP>}></Route>
        </Route>
        <Route path="/login-company" element={<Layout></Layout>}>
          <Route index element={<LoginCompany></LoginCompany>}></Route>
        </Route>
        <Route path="/register-company" element={<Layout></Layout>}>
          <Route index element={<RegisterE></RegisterE>}></Route>
        </Route>
        <Route path="/offers-filter" element={<Layout></Layout>}>
          <Route index element={<Offers></Offers>}></Route>
        </Route>

        <Route path="/blog" element={<Layout></Layout>}>
          <Route index element={<Blog></Blog>}></Route>
        </Route>

        <Route path="/work-offer-details" element={<Layout></Layout>}>
          <Route
            path=":id"
            element={<WorkOfferDetails></WorkOfferDetails>}
          ></Route>
        </Route>

        <Route path="/postulant-dashboard" element={<Layout></Layout>}>
          <Route
            index
            element={<DashboardPostulant></DashboardPostulant>}
          ></Route>
        </Route>
        <Route path="/change-pass-postulant" element={<Layout></Layout>}>
          <Route
            index
            element={<ChangePassPostulant></ChangePassPostulant>}
          ></Route>
        </Route>
        <Route path="/postulant-profile" element={<Layout></Layout>}>
          <Route index element={<PostulantProfile></PostulantProfile>}></Route>
        </Route>
        <Route path="/postulant-public-profile" element={<Layout></Layout>}>
          <Route
            index
            element={<PostulantPublicProfile></PostulantPublicProfile>}
          ></Route>
        </Route>
        <Route
          path="/postulant-applied-work-offers"
          element={<Layout></Layout>}
        >
          <Route
            index
            element={<AppliedWorkOffersPostulant></AppliedWorkOffersPostulant>}
          ></Route>
        </Route>
        <Route path="/company-dashboard" element={<Layout></Layout>}>
          <Route index element={<DashboardCompany></DashboardCompany>}></Route>
        </Route>
        <Route path="/change-pass-company" element={<Layout></Layout>}>
          <Route
            index
            element={<ChangePassCompany></ChangePassCompany>}
          ></Route>
        </Route>
        <Route path="/company-profile" element={<Layout></Layout>}>
          <Route index element={<CompanyProfile></CompanyProfile>}></Route>
        </Route>
        <Route path="/company-public-profile" element={<Layout></Layout>}>
          <Route
            index
            element={<CompanyPublicProfile></CompanyPublicProfile>}
          ></Route>
        </Route>
        <Route path="/post-work-offer" element={<Layout></Layout>}>
          <Route index element={<PostWorkOffer></PostWorkOffer>}></Route>
        </Route>
        <Route path="/manage-work-offers" element={<Layout></Layout>}>
          <Route index element={<ManageWorkOffers></ManageWorkOffers>}></Route>
        </Route>
        <Route path="/ubigeo" element={<Layout></Layout>}>
          <Route index element={<Ubigeo></Ubigeo>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
