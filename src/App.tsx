import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
function App() {
  return null;
}

export default App;
