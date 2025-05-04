
import { PropsWithChildren } from 'react';
import { SideMenu } from '../sidemenu/SideMenu';
import { Toaster } from 'react-hot-toast';


export const AppLayout = ({ children }: PropsWithChildren) => {



    return (
        <div className="bg-slate-200 h-screen  border-2 flex overflow-hidden text-slate-900 selection:bg-blue-900 selection:text-white">
            {/* Menú lateral fijo */}
            <SideMenu />
            <Toaster
                position="top-center"
                toastOptions={{
                    success: {
                        style: {
                            background: '#e6ffed',
                            color: '#065f46',
                            border: '1px solid #10b981',
                            fontWeight: '500',
                            padding: '12px 16px',
                        },
                    },
                    error: {
                       
                        style: {
                            background: '#fff0f1',      
                            color: '#b91c1c',           
                            fontWeight: '600',           
                            padding: '12px 16px',       
                            boxShadow: '0 0 0 3px #ffe4e6', 
                        },
                    },
                }}
            />





            {/* Contenido principal con scroll propio */}
            <div className="flex-1 h-screen overflow-auto p-4">
                {children}
            </div>
        </div>
    );
};
