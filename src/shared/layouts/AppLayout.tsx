
import { PropsWithChildren } from 'react';
import { SideMenu } from '../sidemenu/SideMenu';
import { Toaster } from 'react-hot-toast';


export const AppLayout = ({ children }: PropsWithChildren) => {
   

   
    return (
        <div className="bg-slate-200 h-screen  border-2 flex overflow-hidden text-slate-900 selection:bg-blue-900 selection:text-white">
            {/* Menú lateral fijo */}
            <SideMenu />
            <Toaster/>
           
            {/* Contenido principal con scroll propio */}
            <div className="flex-1 h-screen overflow-auto p-4">
                {children}
            </div>
        </div>
    );
};
