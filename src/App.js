import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import {store} from "./redux/store";


import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home/Home";
import { Todo } from "./pages/Todo";
import { Notes } from "./pages/NotesKeeper";
import { Timer } from "./pages/Timer";
import { Counter } from "./pages/Counter";

export default function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <NavBar />,
        children: [
            { index: true, element: <Home /> },
            { path: "/todo", element: <Todo /> },
            { path: "/notes", element: <Notes /> },
            { path: "/timer", element: <Timer /> },
            { path: "/counter", element: <Counter /> }
        ]
      }
    ]);
  
    return (
      <div className="App">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
      </div>
    );
  }
