import type { IconType } from 'react-icons';
import { IoSpeedometerOutline, IoLogOutOutline, IoListOutline  } from 'react-icons/io5';
import { SideMenuItem } from './SideMenuItem';
import { NavLink } from 'react-router';

import logo from '../../assets/logo_sin_fondo.png';

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

const menuItems: MenuItem[] = [
  { title: 'Socios', subTitle: 'Control Socios', href: '/socios', Icon: IoSpeedometerOutline },
   { title: "Maestros", subTitle: "", href: "/maestros", Icon: IoListOutline },
  // { title: 'Maestros', subTitle: 'CRUD en APP', href: '/maestros', Icon: IoListOutline },

];

export const SideMenu = () => {

  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-45 shrink-0 overflow-y-auto">
      <div id="logo" className="my-4 px-6">

      </div>

      {/* Profile */}
      <div id="profile" className="px-10 py-3 flex flex-col items-center">
        <a href="#" className="inline-flex flex-col items-center">
          <span className="mb-2">
            <img className="w-30 h-30" src={logo}  />
          </span>
          <span className=" text-xl font-bold text-center">
          
          </span>
        </a>
      </div>


      {/* Menu Items */}
      <nav id="nav" className="w-full  px-6">
        {menuItems.map((item) => (
          <div key={item.href} className='mb-5'>
            <SideMenuItem key={item.href} {...item} />
          </div>
        ))}

        {/* Logout */}
        <NavLink  to={'/auth/login'}  className="mt-10 flex items-center gap-2  py-2 rounded-md hover:bg-gray-800 transition">
          <IoLogOutOutline className="text-xl" />
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Logout</span>
            <span className="text-sm text-slate-500 hidden md:block">Cerrar sesión</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
