import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Suspense } from "react";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import { Box, CircularProgress } from "@mui/material";

const routes = [
  { path: '', element: <MainPage /> },
];

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={
                    <Suspense fallback={
                      <Box className="flex items-center justify-center w-full h-screen">
                        <CircularProgress sx={{ color: 'black'}}/>
                      </Box>
                      } >
                      {route.element}
                    </Suspense>
                  }/>
              ))}
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;