/**
 * Custom Navbar Item Types for 1CAR Enterprise Portal
 */

import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import UserMenuNavbarItem from './UserMenuNavbarItem';
import DocSidebarNavbarItem from './DocSidebarNavbarItem';

export default {
  ...ComponentTypes,
  'custom-userMenu': UserMenuNavbarItem,
  'docSidebar': DocSidebarNavbarItem,
};