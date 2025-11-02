import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("common/pages/landing.tsx"),
  route("/dashboard", "features/dashboard/pages/dashboard.tsx"),
] satisfies RouteConfig;
