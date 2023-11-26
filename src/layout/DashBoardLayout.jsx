import { Sidebar } from "flowbite-react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = false;

  //normal user
  const userDashboardMenu = (
    <>
      <li>
        <NavLink
          to="/dashboard/edit-biodata"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Edit Biodata
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/view-biodata"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-b-2 border-orange-600"
              : ""
          }
        >
          View Biodata
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/contact-request"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "  border-b-2 border-orange-600"
              : ""
          }
        >
          My Contact Request
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/favorite-biodata"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Favourites Biodata
        </NavLink>
      </li>
    </>
  );

  //admin
  const adminDashboardMenu = (
    <>
      <li>
        <NavLink
          to="/dashboard/admin-dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Admin Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/manage-users"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Manage Users
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/approved-premium"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Approved Premium
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/approved-request"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Approved Contact Request
        </NavLink>
      </li>
    </>
  );

  //home page
  const HomeLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/biodatas"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-orange-600"
              : ""
          }
        >
          Biodata
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto flex">
      <div className="min-h-screen bg-black">
        <Sidebar aria-label="Default sidebar example ">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <ul className="space-y-5 pt-5">
                  {isAdmin ? adminDashboardMenu : userDashboardMenu}
                </ul>
                <hr className="bg-orange-800 my-5" />
                <ul className="space-y-3 pb-5">{HomeLink}</ul>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="flex-1 p-10 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
