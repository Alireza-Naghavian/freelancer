import { Route, Routes } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import FreeLancer from "./pages/FreeLancer";
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl ">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/owner" element={<Owner />} />
          <Route path="/freelancer" element={<FreeLancer />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
