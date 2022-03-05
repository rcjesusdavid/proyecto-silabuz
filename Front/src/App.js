import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterP from "./pages/RegisterP";
import RegisterE from "./pages/RegisterE";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import FiltroJobs from "./pages/FiltroJobs";
import Blog from "./pages/Blog";
import OfertaDetail from "./components/OfertaDetail";
import DashboardCandidate from "./pages/DashboardCandidate";
import DashboardEmployer from "./pages/DashboardEmployer";
import Dashboard from "./components/shared/Dashboard";
import Register from "./pages/Register";
import EmployerProfile from "./components/EmployerProfile";
import CandidateProfile from "./components/CandidateProfile";
import ChangePass from "./components/ChangePass";
import CadidateApplied from "./components/CadidateApplied";
import EmployerManageJobs from "./components/EmployerManageJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>

        <Route path="/login" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
        </Route>

        <Route path="/register" element={<Layout></Layout>}>
          <Route index element={<Register></Register>}></Route>
        </Route>

        <Route path="/registerp" element={<Layout></Layout>}>
          <Route index element={<RegisterP></RegisterP>}></Route>
        </Route>
        <Route path="/registere" element={<Layout></Layout>}>
          <Route index element={<RegisterE></RegisterE>}></Route>
        </Route>

        <Route path="/filterjobs" element={<Layout></Layout>}>
          <Route index element={<FiltroJobs></FiltroJobs>}></Route>
        </Route>

        <Route path="/blog" element={<Layout></Layout>}>
          <Route index element={<Blog></Blog>}></Route>
        </Route>

        <Route path="/ofertadetail" element={<Layout></Layout>}>
          <Route index element={<OfertaDetail></OfertaDetail>}></Route>
        </Route>

        <Route path="/dashcandidate" element={<Layout></Layout>}>
          <Route
            index
            element={<DashboardCandidate></DashboardCandidate>}
          ></Route>
        </Route>
        <Route path="/dashemployer" element={<Layout></Layout>}>
          <Route
            index
            element={<DashboardEmployer></DashboardEmployer>}
          ></Route>
        </Route>
        <Route path="/employerprofile" element={<Layout></Layout>}>
          <Route index element={<EmployerProfile></EmployerProfile>}></Route>
        </Route>
        <Route path="/candidateprofile" element={<Layout></Layout>}>
          <Route index element={<CandidateProfile></CandidateProfile>}></Route>
        </Route>
        <Route path="/changepass" element={<Layout></Layout>}>
          <Route index element={<ChangePass></ChangePass>}></Route>
        </Route>
        <Route path="/savedofferts" element={<Layout></Layout>}>
          <Route index element={<CadidateApplied></CadidateApplied>}></Route>
        </Route>
        <Route path="/appliedofferts" element={<Layout></Layout>}>
          <Route index element={<CadidateApplied></CadidateApplied>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
