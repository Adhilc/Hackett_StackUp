import Quiz from "./Quiz";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Login from "./Login";
import "./index.scss";
import LeaderBoard from "./LeaderBoard";

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
      path : '/Create',
      element : <Create />
    },
    {
      path : '/Login',
      element : <Login />
    },
    {
      path:'/Home',
      element:<Home />
    },
    {
      path: "/LeaderBoard",
      element: <LeaderBoard />
    }
  ]) 

 

  return (
          <>
            <RouterProvider router={router} />
          </>
        
  );
}

export default App;
