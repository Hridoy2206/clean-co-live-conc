import About from "../pages/About";
import Services from "../pages/Services";

const publicRoute = [
    { path: "/about", name: "About", Component: About },
    { path: "/services", name: "Services", Component: Services },
]

export default publicRoute;