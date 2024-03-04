import { Route, Routes } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container xl:max-w-screen-xl ">
      <div className="shadow-2xl max-w-lg mx-auto mt-10 flex justify-center items-start  h-[500px] bg-gray-800  text-white rounded-lg">

      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
