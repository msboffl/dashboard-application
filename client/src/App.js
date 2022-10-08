import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route  index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userID" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productID" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
