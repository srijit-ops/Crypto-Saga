import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/common/Loader";

const Layout = lazy(() => import("../layout/Layout"));

const CoinDetails = lazy(() => import("../pages/coindetails/CoinDetails"));

const LivePrice= lazy(()=>import("../pages/liveprice/LivePrice"))


const routeData = [
  {
    path: "/",
    component: LivePrice,
    layout: Layout,
  },
  {
    path: "/coindetails",
    component: CoinDetails,
    layout: Layout,
  },
];

function CustomRouter() {

  return (
    <BrowserRouter>
      <Routes>
        {routeData.map((route, index) => {
          const Layout = route.layout;
          const Component = route.component;
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <Suspense fallback={<Loader />}>
                  <Layout>
                    <Component />
                  </Layout>
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
