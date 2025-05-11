import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import DataScience from "@/components/DataScience";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects">
        {() => (
          <PageWrapper>
            <Projects />
          </PageWrapper>
        )}
      </Route>
      <Route path="/about">
        {() => (
          <PageWrapper>
            <About />
          </PageWrapper>
        )}
      </Route>
      <Route path="/skills">
        {() => (
          <PageWrapper>
            <Skills />
          </PageWrapper>
        )}
      </Route>
      <Route path="/contact">
        {() => (
          <PageWrapper>
            <Contact />
          </PageWrapper>
        )}
      </Route>
      <Route path="/data-science">
        {() => (
          <PageWrapper>
            <DataScience />
          </PageWrapper>
        )}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
