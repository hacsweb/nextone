import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    HydrateFallback: Layout,
    children: [
      {
        index: true,
        lazy: () =>
          import("./components/HomePage").then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: "tech",
        lazy: () =>
          import("./components/TechPage").then((m) => ({
            Component: m.TechPage,
          })),
      },
      {
        path: "web",
        lazy: () =>
          import("./components/WebPage").then((m) => ({
            Component: m.WebPage,
          })),
      },
      {
        path: "photo",
        lazy: () =>
          import("./components/PhotoPage").then((m) => ({
            Component: m.PhotoPage,
          })),
      },
      {
        path: "car",
        lazy: () =>
          import("./components/CarPage").then((m) => ({
            Component: m.CarPage,
          })),
      },
    ],
  },
]);