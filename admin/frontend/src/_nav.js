import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilPencil,
  cilBuilding,
  cilCast,
  cilLayers,
  cilQrCode,
  cilCommentSquare,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavItem,
    name: 'Business Insights & Analytics',
    to: '/business-insight',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Homepage Management',
    to: '/homepage',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Leaderboard Management',
    to: '/leaderboard',
    icon: <CIcon icon={cilCast} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Category Management',
    to: '/category',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Content Moderation',
    to: '/content',
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Product/NFT Management',
    to: '/product',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Purchase Management',
    to: '/purchase',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
