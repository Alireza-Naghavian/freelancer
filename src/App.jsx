import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import FreeLancer from "./pages/FreeLancer";
import Project from "./ui/Projects";
import SingleProject from "./ui/SingleProject";
import OwnerDashBoard from "./ui/OwnerDashBoard";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Toaster />

      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace></Navigate>} />
          <Route path="dashboard" element={<OwnerDashBoard />} />
          <Route path="projects" element={<Project />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="freelancer" element={<FreeLancer />} />
        </Route>
        <Route
          path="/freelancer"
          element={
            <ProtectedRoute>
              <FreelancerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FreelancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmittedProjects />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
