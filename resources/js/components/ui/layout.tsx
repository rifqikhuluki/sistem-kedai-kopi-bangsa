import React from "react";
import { SidebarInset, SidebarProvider } from "./sidebar";
import { AppSidebar } from "../app-sidebar";
import Navbar from "./nav-bar";

const Layout = ({children}: {children: React.ReactNode}) => {
    return(
        <SidebarProvider>
            <AppSidebar />
                <SidebarInset>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;