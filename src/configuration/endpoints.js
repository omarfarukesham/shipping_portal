export const ENDPOINTS = {
  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  checkUser: '/users/check-user',
  registration: '/users/register',

  //partners service endpoints
  partners: '/delivery-partners',
  partner: (id) => `/delivery-partners/${id}`,
  editPartner: (id) => `/delivery-partners/${id}`,

  // packages service endpoints
  packages: '/order-packages',
  package: (id) => `/order-packages/${id}`,
  editPackage: (id) => `/order-packages/${id}`,
  approveOrderPackage: (id) => `/order-packages/approve/${id}`,
  orderPackageDeliveryStatus: (trackingId) =>
    `/order-packages/delivery-status/${trackingId}`,
  orderPackageWebhook: '/order-packages/update-delivery-status',

  // history service endpoints
  histories: '/order-delivery-histories',
  history: (id) => `/order-delivery-histories/${id}`,

  // Order Service Endpoints
  orderItems: (orderId) => `/order-items/package-info/${orderId}`,
};
