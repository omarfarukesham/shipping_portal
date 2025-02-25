/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import PartnerAdd from '@/pages/Partners/partner-add/PartnerAdd';
import PartnerView from '@/pages/Partners/partner-view/PartnerView';

import { lazy } from 'react';

const Partners = lazy(() => import('@/pages/Partners/Partners'));

const PartnerEdit = lazy(() =>
  import('@/pages/Partners/partner-edit/PartnerEdit'),
);

// These are the children routes of the main layout
const PartnerRoutes = [
  {
    path: 'partners',
    element: (
      <RouteAuthorization
        element={Partners}
        permission={permissions.VIEW_SHIPPING}
      />
    ),
  },
  {
    path: 'partners/add',
    element: (
      <RouteAuthorization
        element={PartnerAdd}
        permission={permissions.EDIT_SHIPPING}
      />
    ),
  },
  {
    path: 'partners/:id',
    element: (
      <RouteAuthorization
        element={PartnerView}
        permission={permissions.EDIT_SHIPPING}
      />
    ),
  },
  {
    path: 'partners/:id/edit',
    element: (
      <RouteAuthorization
        element={PartnerEdit}
        permission={permissions.EDIT_SHIPPING}
      />
    ),
  },
];

export default PartnerRoutes;
