import {
  RiCloseFill,
  RiMenuFill,
  RiHome4Line,
  RiDeviceLine,
  RiSoundModuleLine,
  RiDashboard2Line,
  RiFileChartLine,
} from "react-icons/ri/index.js";

import { LiaFileInvoiceDollarSolid } from "react-icons/lia/index.js";

import { PiUsersThree } from "react-icons/pi/index.js";

import { HiOutlineRectangleGroup } from "react-icons/hi2/index.js";

import { FaClipboardUser } from "react-icons/fa6/index.js";

import { LuFileKey2 } from "react-icons/lu/index.js";

import { MdOutlineSettingsInputAntenna } from "react-icons/md/index.js";

export default function SideNav() {
  const shrinkSidenav = () => {
    const sidenav = document.getElementsByClassName("drawer-side").item(0);
    const content = document.getElementsByClassName("drawer-content").item(0);
    console.log(sidenav);
    console.log(content);
    sidenav?.classList.replace('w-[15vw]', 'w-0');
    content?.classList.replace('w-full', 'm-[84vw]');
    content?.classList.remove('m-l-[15vw]');
    console.log('closed');
  };

  const expandSideNav = () => {
    const sidenav = document.getElementsByClassName("drawer-side").item(0);
    const content = document.getElementsByClassName("drawer-content").item(0);
    console.log(sidenav);
    console.log(content);
    sidenav?.classList.replace('w-0', 'w-[15vw]');
    content?.classList.replace('m-[84vw]', 'w-full');
    content?.classList.add('m-l-[15vw]');
    console.log('opened');
  };

  return (
    <>
      <div className="drawer bg-base-100 lg:drawer-open">
        <input id="sidenav" type="checkbox" className="drawer-toggle" hidden />
        <div className="drawer-content">
          <div className="navbar bg-base-100">
            <div className="flex-start">
              <label htmlFor="sidenav" aria-label="open sidebar" className="btn btn-ghost drawer-button" onClick={expandSideNav}>
                <RiMenuFill />
              </label>
            </div>
            <div className="flex-center">
              <a href="/">
                <img alt="SMC Logo" src="/img/logo-smc.png" width="200" height="70"/>
              </a>
            </div>
          </div>

          <div className="max-w-[100vw] px-6 pb-16 xl:pr-2">
            <h1>This is some content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Libero justo laoreet sit amet cursus sit amet. Nec nam aliquam sem et tortor consequat id porta. Eros donec ac odio tempor. Eget duis at tellus at. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Diam quam nulla porttitor massa id neque. Bibendum at varius vel pharetra. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Neque aliquam vestibulum morbi blandit cursus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Faucibus ornare suspendisse sed nisi lacus. Volutpat odio facilisis mauris sit. Gravida dictum fusce ut placerat orci. Praesent semper feugiat nibh sed. Cursus metus aliquam eleifend mi.
            </p>

            <p>
              At risus viverra adipiscing at in tellus integer feugiat scelerisque. Venenatis tellus in metus vulputate eu scelerisque felis. Euismod nisi porta lorem mollis aliquam. Et malesuada fames ac turpis egestas integer eget aliquet nibh. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Justo laoreet sit amet cursus sit amet dictum sit. Turpis egestas integer eget aliquet nibh praesent tristique. Nascetur ridiculus mus mauris vitae ultricies leo. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Elementum tempus egestas sed sed risus pretium quam vulputate. Lectus proin nibh nisl condimentum id venenatis a. Leo urna molestie at elementum eu facilisis sed. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Morbi tristique senectus et netus et malesuada fames ac turpis. Elit at imperdiet dui accumsan sit amet nulla. Varius vel pharetra vel turpis. Iaculis eu non diam phasellus vestibulum. Pulvinar elementum integer enim neque.
            </p>
          </div>
        </div>

        <div className="drawer-side">
          {/*<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">*/}
          <ul className="menu bg-base-200 rounded-r-box">
            <li>
              <label htmlFor="sidenav" aria-label="close sidebar" className="ml-auto" onClick={shrinkSidenav}>
                <RiCloseFill />
              </label>
            </li>
            <li>
              <a href="/servicePoints">
                <RiHome4Line />
                Service Points
              </a>
            </li>
            <li>
              <a href="/devices">
                <RiDeviceLine />
                Devices
              </a>
            </li>
            <li>
              <a href="/billings">
                <LiaFileInvoiceDollarSolid />
                Billings
              </a>
            </li>
            <li>
              <a href="/users">
                <PiUsersThree />
                Users
              </a>
            </li>
            <li>
              <a href="/groups">
                <HiOutlineRectangleGroup />
                Groups
              </a>
            </li>
            <li>
              <a href="/controlPanel">
                <RiSoundModuleLine />
                Control Panel
              </a>
            </li>
            <li>
              <a href="/telemetryDashboards">
                <RiDashboard2Line />
                Telemetry Dashboards
              </a>
            </li>
            <li>
              <a href="/usageReports">
                <RiFileChartLine />
                usageReports
              </a>
            </li>
            <li>
              <details>
                <summary>Config</summary>
                <ul>
                  <li>
                    <a href="/roles">
                      <FaClipboardUser />
                      Roles
                    </a>
                  </li>
                  <li>
                    <a href="/bandsMappings">
                      <MdOutlineSettingsInputAntenna />
                      Bands Mappings
                    </a>
                  </li>
                  <li>
                    <a href="/apiKeys">
                      <LuFileKey2 />
                      API Keys
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}
