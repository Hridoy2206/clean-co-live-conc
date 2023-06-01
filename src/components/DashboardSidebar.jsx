import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile bg-accent mt-20">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className="mb-2"><NavLink to="/dashboard/add-service">Add Service</NavLink></li>
                    <li className="mb-2"><NavLink to="/dashboard/add-admin">Add Admin</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;