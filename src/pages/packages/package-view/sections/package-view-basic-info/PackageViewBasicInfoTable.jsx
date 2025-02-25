import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useState } from 'react';
import ApproveStatusModal from './ApproveStatusModal';
import PackageUpdateWebhookModal from './PackageUpdateWebhookModal';
import PackageViewTrackingButton from './PackageViewTrackingButton';

const PackageViewBasicInfoTable = ({ orderPackage }) => {
  const [openApprovalStatusModal, setOpenApprovalStatusModal] = useState(false);

  return (
    <div className='flex flex-wrap gap-5 p-5 overflow-auto'>
      <Table className='flex-1 border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableData>{orderPackage?.name}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Description</TableHead>
            <TableData>{orderPackage?.description}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Order Id</TableHead>
            <TableData>{orderPackage?.orderId}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Order Sequence Id</TableHead>
            <TableData>{orderPackage?.orderSequenceId}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Seller Id</TableHead>
            <TableData>{orderPackage?.sellerId}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Delivery Partner</TableHead>
            <TableData>
              {orderPackage?.deliveryPartner.shippingPartner}
            </TableData>
          </TableRow>

          <TableRow>
            <TableHead>Delivery Partner Transaction Id</TableHead>
            <TableData>{orderPackage?.deliveryPartnerTransactionId}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Approval Status</TableHead>
            <TableData className='flex gap-3 justify-between items-center'>
              <div>{orderPackage?.approvalStatus} </div>
              <ApproveStatusModal data={orderPackage} />
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Order Tracking No</TableHead>
            <TableData className='flex gap-3 justify-between items-center'>
              <div>{orderPackage.orderTrackingNo}</div>
              {orderPackage.orderTrackingNo && (
                <PackageViewTrackingButton
                  trackingId={orderPackage.orderTrackingNo}
                />
              )}
            </TableData>
          </TableRow>
        </TableBody>
      </Table>

      <Table className='flex-1 border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Delivery Status</TableHead>
            <TableData>{orderPackage?.deliveryStatus}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Delivery Partner Fee</TableHead>
            <TableData>{orderPackage?.deliveryPartnerFee}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Platform Delivery Fee</TableHead>
            <TableData>{orderPackage?.platformDeliveryFee}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Comment</TableHead>
            <TableData>{orderPackage?.comment}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Package Amount</TableHead>
            <TableData>{orderPackage?.packageAmount}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Partner Payment Status</TableHead>
            <TableData>{orderPackage?.partnerPaymentStatus}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Partner Collected Amount</TableHead>
            <TableData>{orderPackage?.partnerCollectedAmount}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Webhook</TableHead>
            <TableData>
              <PackageUpdateWebhookModal orderPackage={orderPackage} />
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
      {openApprovalStatusModal && (
        <ApproveStatusModal
          isOpen={openApprovalStatusModal}
          setIsOpen={setOpenApprovalStatusModal}
          data={orderPackage}
        />
      )}
    </div>
  );
};

export default PackageViewBasicInfoTable;
