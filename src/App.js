import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Shop from "./pages/shop/Shop";
import { GenaratePDF } from "./pages/shop/GenaratePDF";


function App() {
  return (
    <div>
      {/* <RouterProvider router={routes}>

      </RouterProvider> */}
      <h1>Table Example</h1>
      <Shop />
      <GenaratePDF />

    </div>
  );
}

export default App;
