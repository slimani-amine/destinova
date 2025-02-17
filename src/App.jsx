import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import AppContent from "./AppContent";

const App = () => {
  return (
    <Router>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
};

export default App;
