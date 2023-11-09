import Quiz from "./Quiz";
//import { jsQuizz } from "./Constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Create from "./create";
import "./index.scss";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home />
    },
    {
      path : '/Quiz',
      element : <Quiz/>
    },
    {
      path : '/create',
      element : <Create />
    }
  ]) 

 

  return (
          <>
            <RouterProvider router={router} />
          </>
        
  );
}

export default App;
