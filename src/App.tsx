import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import ComingSoon from "./Routes/Coming";
import NowPlaying from "./Routes/Now";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "movies/:id",
        element: <Home />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return null;
}

export default App;
