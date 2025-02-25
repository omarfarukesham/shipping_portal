import DeliveryPartner from './DeliveryPartner';
import OrderPackageItem from './OrderPackageItem';

class OrderPackage {
  constructor(data) {
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
    this.id = data.id;
    this.name = data.name;
    this.serial = data.serial;
    this.description = data.description;
    this.orderId = data.orderId;
    this.orderItems = data.orderItems.map((item) => new OrderPackageItem(item));
    this.sellerId = data.sellerId;
    this.deliveryPartner = data?.deliveryPartner
      ? new DeliveryPartner(data?.deliveryPartner)
      : null;

    this.deliveryPartnerTransactionId = data.deliveryPartnerTransactionId;
    this.orderTrackingNo = data.orderTrackingNo;
    this.orderSequenceId = data.orderSequenceId;
    this.approvalStatus = data.approvalStatus;
    this.approvalDate = data.approvalDate;
    this.approvedBy = data.approvedBy;
    this.deliveryStatus = data.deliveryStatus;
    this.deliveryPartnerFee = data.deliveryPartnerFee;
    this.platformDeliveryFee = data.platformDeliveryFee;
    this.comment = data.comment;
    this.packageAmount = data.packageAmount;
    this.partnerPaymentStatus = data.partnerPaymentStatus;
    this.partnerCollectedAmount = data.partnerCollectedAmount;
    this.receivedPaymentAmount = data.receivedPaymentAmount;
    this.receivedPaymentStatus = data.receivedPaymentStatus;
  }
}

export default OrderPackage;
