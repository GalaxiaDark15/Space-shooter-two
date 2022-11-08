import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Game from "./pages/Game/Game";
import HighScores from "./pages/HighScores/HighScores";
import UpdateScores from "./pages/UpdateScores/UpdateScores";

/**
 * Renders react router
 * @returns
 */
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Game />} />
          <Route path="/hi-scores" element={<HighScores />} />
          <Route path="/update-scores" element={<UpdateScores />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
