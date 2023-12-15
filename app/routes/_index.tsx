import type { MetaFunction } from "@remix-run/node";

import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Learning DaisyUI" },
    { name: "description", content: "Learning DaisyUI" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="flex justify-center text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 m-3">Demo plain DaisyUi vs React-Daisy</h1>
      <h2 className="flex justify-center text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">Plain DaisyUi</h2>
      <ul>
        <li>
          <NavLink to="/daisy/login" className="link-primary link-hover">Login</NavLink>
        </li>
        <li>
          <NavLink to="/daisy/horizontal-menu" className="link-primary link-hover">Horizontal menu</NavLink>
        </li>
        <li>
          <NavLink to="/daisy/sidenav" className="link-primary link-hover">SideNav</NavLink>
        </li>
        <li>
          <NavLink to="/daisy/sidenav-working" className="link-primary link-hover">Working SideNav</NavLink>
        </li>
      </ul>

      <h2 className="flex justify-center text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">React DaisyUi</h2>
      <ul>
        <li>
          <NavLink to="/react-daisy/login" className="link-primary link-hover">Login</NavLink>
        </li>
        <li>
          <NavLink to="/react-daisy/horizontal-menu" className="link-primary link-hover">Horizontal menu</NavLink>
        </li>
        <li>
          <NavLink to="/react-daisy/sidenav" className="link-primary link-hover">SideNav</NavLink>
        </li>
      </ul>
    </div>
  );
}
