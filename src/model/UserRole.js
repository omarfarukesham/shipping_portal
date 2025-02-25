const permissions = [
  'view_dashboard',
  'view_catalog',
  'view_product',
  'edit_product',
  'view_attribute',
  'edit_attribute',
  'view_tax',
  'edit_tax',
  'view_brand',
  'edit_brand',
  'edit_shipping',
  'view_shipping',
];

class UserRole {
  constructor(data) {
    this.name = data.name;
    this.appMenu = data.appMenu;
    this.permissions = permissions;
  }
}

export default UserRole;
