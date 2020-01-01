import Browse from "./components/Browse";
import Datefeed from "./components/Datefeed";
import search from "./components/search";


const routes = [
  {
    path: "/",
    exact: true,
    component: Browse,
    
  },
  {
    path: "/Datefeed",
    component: Datefeed,
    
  },
  {
    path: "/search",
    component: search,
    
  }
];

export default routes;
