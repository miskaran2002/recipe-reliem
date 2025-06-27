import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen">
           
            {/* Sidebar */}
            <aside className="w-64 bg-orange-100 p-6 space-y-4 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-2">
                    <NavLink to="/dashboard" className="block hover:underline">Overview</NavLink>
                    <NavLink to="/dashboard/all" className="block hover:underline">All Recipes</NavLink>
                    <NavLink to="/dashboard/my" className="block hover:underline">My Recipes</NavLink>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 bg-white">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
