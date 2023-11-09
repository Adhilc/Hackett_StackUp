import Quiz from "./Quiz";
//import { jsQuizz } from "./Constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Create from "./create";
import Login from "./Login";
import "./index.scss";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Login />
    },
    {
      path : '/Quiz',
      element : <Quiz/>
    },
    {
      path : '/create',
      element : <Create />
    },
    {
      path : '/Login',
      element : <Login />
    },
    {
      path:'/Home',
      element:<Home />
    }
  ]) 

 

  return (
          <>
            <RouterProvider router={router} />
          </>
        
  );
}

export default App;
