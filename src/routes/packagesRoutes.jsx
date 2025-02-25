/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import PackageView from '@/pages/packages/package-view/PackageView';

import { lazy } from 'react';

const Packages = lazy(() => import('@/pages/packages/Packages'));

// These are the children routes of the main layout
const PackagesRoutes = [
  {
    path: 'packages',
    element: (
      <RouteAuthorization
        element={Packages}
        permission={permissions.VIEW_SHIPPING}
      />
    ),
  },
  {
    path: 'packages/:id',
    element: (
      <RouteAuthorization
        element={PackageView}
        permission={permissions.EDIT_SHIPPING}
      />
    ),
  },
];

export default PackagesRoutes;
