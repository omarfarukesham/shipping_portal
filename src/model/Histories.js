import DeliveryPartner from './DeliveryPartner';

class Histories {
  constructor(data) {
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.orderId = data.orderId;
    this.sellerId = data.sellerId;
    this.deliveryPartner = data.deliveryPartner
      ? new DeliveryPartner(data.deliveryPartner)
      : null;
    this.actionType = data.actionType;
    this.previousStatus = data.previousStatus;
    this.currentStatus = data.currentStatus;
    this.comment = data.comment;
    this.orderPackageId = data.orderPackageId;
    this.request = data.request;
    this.response = data.response;
    this.serial = data.serial;
  }
}

// class DeliveryPartner {
//   constructor(data) {
//     this.id = data.id;
//     this.name = data.name;
//     this.phone = data.phone;
//     this.email = data.email;
//     this.shippingPartner = data.shippingPartner;
//     this.platformFee = data.platformFee;
//   }
// }

export default Histories;
