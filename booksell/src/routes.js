import React from 'react';
import LibaryManagement from './components/admin/libary_management';
import Home from './components/home/home';
import ProductDetail from './components/product_detail/product_item';
import AllProducts from './components/all_products/all_products';
import Cart from './components/cart/cart';
import AdminProductDetail from './components/admin/libary_management/product_detail';
import BorrowedTicket from './components/borrowed_ticket/borrowed_ticket';
import Login from './components/login/login';
import AdminProductAdd from './components/admin/libary_management/product_add';
import AuthorManagement from './components/admin/author_management';
import PublishingHouseManagement from './components/admin/publishing_house_management';
import AdminAuthorDetail from './components/admin/author_management/author_detail';
import AdminAuthorAdd from './components/admin/author_management/author_add';
import AdminPublishingHouseDetail from './components/admin/publishing_house_management/publishing_house_detail';
import AdminPublishingHouseAdd from './components/admin/publishing_house_management/publishing_house_add';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/products',
        exact: false,
        main: () => <AllProducts />
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({ match }) => <ProductDetail match={match} />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    },
    {
        path: '/borrowed_ticket',
        exact: false,
        main: () => <BorrowedTicket />
    },
    {
        path: '/admin/library_management',
        exact: false,
        main: () => <LibaryManagement />
    },
    {
        path: '/admin/add_product',
        exact: false,
        main: () => <AdminProductAdd />
    },
    {
        path: '/admin/product/:id',
        exact: false,
        main: ({ match }) => <AdminProductDetail match={match} />
    },
    {
        path: '/admin/author_management',
        exact: false,
        main: () => <AuthorManagement />
    },
    {
        path: '/admin/author/:id',
        exact: false,
        main: ({ match }) => <AdminAuthorDetail match={match} />
    },
    {
        path: '/admin/add_author',
        exact: false,
        main: () => <AdminAuthorAdd />
    },
    {
        path: '/admin/publishing_house_management',
        exact: false,
        main: () => <PublishingHouseManagement />
    },
    {
        path: '/admin/publishing_house/:id',
        exact: false,
        main: ({ match }) => <AdminPublishingHouseDetail match={match} />
    },
    {
        path: '/admin/add_publishing_house',
        exact: false,
        main: () => <AdminPublishingHouseAdd />
    },
];

export default routes;