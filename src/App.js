import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const appRouter= createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
  ],
},
])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      <Body/>



{/* 
    Head
    body
    sidebar 
     menuitems
    maincontainer
     buttonlist
     videocontainer
       videocard */}
    </div>
    </Provider>
  );
}

export default App;
