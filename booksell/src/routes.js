import React from 'react';
import LibaryManagement from './components/admin/libary_management';


const routes = [
    {
        path: '/admin/libary_management',
        exact: false,
        main: () => <LibaryManagement />
    }
    
];

export default routes;