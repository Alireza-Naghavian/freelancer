import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import FreeLancer from "./pages/FreeLancer";
import AppLayOut from "./pages/AppLayOut";
import Project from "./ui/Projects";
import SingleProject from "./ui/SingleProject";
import OwnerDashBoard from "./ui/OwnerDashBoard";
import OwnerLayout from "./features/owner/OwnerLayout";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to="dashboard" replace></Navigate>} />
          <Route path="dashboard" element={<OwnerDashBoard />} />
          <Route path="projects" element={<Project />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="freelancer" element={<FreeLancer />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
