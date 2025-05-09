import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topics /> <Articles />
            </>
          }
        ></Route>
        <Route
          path="/articles"
          element={
            <>
              <Topics /> <Articles />
            </>
          }
        ></Route>
        <Route
          path="/articles/:article_id"
          element={
            <>
              <Topics />
              <ArticleDetails />
            </>
          }
        ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={
            <>
              <Topics />
              <ArticleDetails />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
