import { Routes, Route } from "@solidjs/router";

import Home from "./pages/Home";
import Editor from "./pages/Editor";

export default function App() {
  return (
    <Routes>
      <Route path="/editor" component={Editor} />
      <Route path="/" component={Home} />
    </Routes>
  );
}