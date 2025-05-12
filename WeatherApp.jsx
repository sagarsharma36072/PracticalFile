import React from 'react';
import { ClipboardCheck } from 'lucide-react'; 

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-6 sm:py-8 px-4 mb-6 rounded-b-lg shadow-md">
            <div className="max-w-3xl mx-auto flex items-center">
                <ClipboardCheck size={32} className="mr-3" />
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">TaskFlow</h1>
                    <p className="text-primary-100 text-sm sm:text-base"> Manage your tasks with ease
                    </p>
                </div>
            </div>
        </header>
    );
};
export default Header;
