import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import TermsAndConditions from "./pages/terms-conditions";
import NotFound from "./pages/errors/NotFound";
import ErrorPage from "./pages/errors/ErrorPage";
import ComingSoon from "./pages/ComingSoon";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

const App = () => (
  <div>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>Nivaran - Your Personal AI Health Assistant</title>
          </Helmet>
          <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
              <Route path="/comingSoon" element={<ComingSoon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;