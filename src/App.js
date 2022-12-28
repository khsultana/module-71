import { RouterProvider } from "react-router-dom";
import "./App.css";
import route from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
