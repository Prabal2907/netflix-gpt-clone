import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Browse from "./components/Browse.jsx";
import ProtectedRoute, { PublicOnlyRoute } from "./utils/ProtectedRoute.jsx";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicOnlyRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/browse" element={<Browse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;