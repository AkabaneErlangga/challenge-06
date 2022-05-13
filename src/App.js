import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Admin from "./Pages/Admin";
import Detail from "./Pages/Detail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResultPage from "./Pages/ResultPage";
import SearchCar from "./Pages/SearchCar";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<SearchCar />} />
    //     <Route exact path="/register" element={<Register />} />
    //     <Route path="/result" element={<ResultPage />} />
    //     <Route path="/detail/:id" element={<Detail />} />
    //   </Routes>
    // </Layout>
    <Routes>
      {/* <Route exact path='/' element={<PrivateRoute />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path='/' element={
        <PrivateRoute>
          <SearchCar />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
