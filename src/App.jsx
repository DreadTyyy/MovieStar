import { NavigationBar } from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App;
