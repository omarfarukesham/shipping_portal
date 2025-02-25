class DeliveryPartner {
  constructor(data) {
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
    this.id = data.id;
    this.serial = data.serial;
    this.name = data.name;
    this.description = data.description;
    this.email = data.email;
    this.shippingPartner = data.shippingPartner;
    this.phone = data.phone;
    this.address = data.address;
    this.platformFee = data.platformFee;
    this.platformWebhook = data.platformWebhook;
    this.partnerWebhook = data.partnerWebhook;
  }
}

export default DeliveryPartner;
