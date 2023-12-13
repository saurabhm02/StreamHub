import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import store from "./Redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error/Error";
import MainContainer from "./components/mainContainer/MainContainer";
import WatchPage from "./components/watchPage/WatchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const Layout = () => {
  return (
    <>
      <Header/>
      <Body/>
    </>
  );
}
export const queryClient = new QueryClient();

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  errorElement : <Error/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "/watch",
      element: <WatchPage/>,
    },
  ]
}])
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="text-3xl">
          <RouterProvider router={appRouter} />
        </div>
       </Provider>
    </QueryClientProvider>
    
  );
}

export default App;
