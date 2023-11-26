
import AddProduct from "views/AddProduct";
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/add-product",
    name: "Add Product",
    icon: "tim-icons icon-single-02",
    component: <AddProduct />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
];
export default routes;
