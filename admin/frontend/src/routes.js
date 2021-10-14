import React from 'react'

const Business = React.lazy(() => import('./views/business-insight'))
const HomePage = React.lazy(() => import('./views/homepage'))
const Leaderboard = React.lazy(() => import('./views/leaderboard'))
const Category = React.lazy(() => import('./views/category'))
const Content = React.lazy(() => import('./views/content'))
const Product = React.lazy(() => import('./views/product'))
const Purchase = React.lazy(() => import('./views/purchase'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/business-insight', name: 'Business', component: Business },
  { path: '/homepage', name: 'Homepage', component: HomePage },
  { path: '/leaderboard', name: 'LeaderBoard', component: Leaderboard },
  { path: '/category', name: 'Category', component: Category },
  { path: '/content', name: 'Content', component: Content },
  { path: '/product', name: 'Product', component: Product },
  { path: '/purchase', name: 'Purchase', component: Purchase },
]

export default routes
