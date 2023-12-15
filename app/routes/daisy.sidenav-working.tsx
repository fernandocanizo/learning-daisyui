import {
  RiHome4Line,
  RiDeviceLine,
  RiSoundModuleLine,
  RiDashboard2Line,
  RiFileChartLine,
  RiToolsLine,
} from "react-icons/ri/index.js";

import { LiaFileInvoiceDollarSolid } from "react-icons/lia/index.js";

import { PiUsersThree } from "react-icons/pi/index.js";

import { HiOutlineRectangleGroup } from "react-icons/hi2/index.js";

import { FaClipboardUser } from "react-icons/fa6/index.js";

import { LuFileKey2 } from "react-icons/lu/index.js";

import { MdOutlineSettingsInputAntenna } from "react-icons/md/index.js";

export default function WorkingSidenav() {
  let isSidebarExpanded = true;
  const toggleSideBar = () => {
    isSidebarExpanded = !isSidebarExpanded;
    console.debug(isSidebarExpanded ? 'open' : 'close')
    const sidenav = document.getElementById('sidenav');
    const sidenavButton = document.getElementById("sidenav-button");
    const navItems: HTMLCollectionOf<Element> = document.getElementsByClassName('nav-item');

    isSidebarExpanded ?
      // sidenav?.classList.add('w-80') :
      sidenav?.classList.add('w-auto') :
      sidenav?.classList.remove('w-auto');

    if (sidenavButton) {
      isSidebarExpanded ?
        sidenavButton.innerText = "←" :
        sidenavButton.innerText = "…";
    }

    for (const element of navItems) {
      isSidebarExpanded ?
        element.classList.remove('hidden') :
        element.classList.add('hidden');
    }
  };

  return (
    <div className={`drawer ${isSidebarExpanded ? "drawer-open" : ""}`}>
      <input id="sidenav-toggler" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-3">
        <h1>This is some content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Libero justo laoreet sit amet cursus sit amet. Nec nam aliquam sem et tortor consequat id porta. Eros donec ac odio tempor. Eget duis at tellus at. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Diam quam nulla porttitor massa id neque. Bibendum at varius vel pharetra. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Neque aliquam vestibulum morbi blandit cursus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Faucibus ornare suspendisse sed nisi lacus. Volutpat odio facilisis mauris sit. Gravida dictum fusce ut placerat orci. Praesent semper feugiat nibh sed. Cursus metus aliquam eleifend mi.
        </p>
      </div> 

      <div className="drawer-side">
        <label htmlFor="sidenav" aria-label="close sidebar" className="drawer-overlay"></label>
        <aside id="sidenav" className={`menu p-4 min-h-full bg-base-200 text-base-content ${isSidebarExpanded ? 'w-auto' :''}`}>
          <div className="flex justify-end">
            <button id="sidenav-button" className="btn btn-ghost btn-square" onClick={ toggleSideBar }>
              { isSidebarExpanded ? "←" : "…" }
            </button>
          </div>
          <ul className="menu bg-base-200 rounded-r-box">
            <li>
              <a href="/servicePoints">
                <RiHome4Line />
                <span className="nav-item">Service Points</span>
              </a>
            </li>
            <li>
              <a href="/devices">
                <RiDeviceLine />
                <span className="nav-item">Devices</span>
              </a>
            </li>
            <li>
              <a href="/billings">
                <LiaFileInvoiceDollarSolid />
                <span className="nav-item">Billings</span>
              </a>
            </li>
            <li>
              <a href="/users">
                <PiUsersThree />
                <span className="nav-item">Users</span>
              </a>
            </li>
            <li>
              <a href="/groups">
                <HiOutlineRectangleGroup />
                <span className="nav-item">Groups</span>
              </a>
            </li>
            <li>
              <a href="/controlPanel">
                <RiSoundModuleLine />
                <span className="nav-item">Control Panel</span>
              </a>
            </li>
            <li>
              <a href="/telemetryDashboards">
                <RiDashboard2Line />
                <span className="nav-item">Telemetry Dashboards</span>
              </a>
            </li>
            <li>
              <a href="/usageReports">
                <RiFileChartLine />
                <span className="nav-item">Usage Reports</span>
              </a>
            </li>
            <li>
              <details>
                <summary>
                  <RiToolsLine />
                  <span className="nav-item">Config</span>
                </summary>
                <ul>
                  <li>
                    <a href="/roles">
                      <FaClipboardUser />
                      <span className="nav-item">Roles</span>
                    </a>
                  </li>
                  <li>
                    <a href="/bandsMappings">
                      <MdOutlineSettingsInputAntenna />
                      <span className="nav-item">Bands Mappings</span>
                    </a>
                  </li>
                  <li>
                    <a href="/apiKeys">
                      <LuFileKey2 />
                      <span className="nav-item">API Keys</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
