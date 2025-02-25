import { useState } from 'react';
import OrderItemsTable from './OrderItemsTable';
import OrderPackageCreateButton from './OrderPackageCreateButton';
import OrderPackageUpdateButton from './OrderPackageUpdateButton';

const OrderItemsBody = ({ orderItems, orderPackageId, orderId }) => {
  const [selectedItems, setSelectedItems] = useState(
    orderItems.filter((e) => !e.isApproved),
  );

  return (
    <div className='flex flex-col overflow-hidden'>
      <OrderItemsTable
        data={orderItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <div className='p-5 flex justify-center'>
        <OrderPackageUpdateButton
          selectedItems={selectedItems}
          orderId={orderId}
          orderPackageId={orderPackageId}
        />

        <OrderPackageCreateButton
          selectedItems={selectedItems}
          orderId={orderId}
        />
      </div>
    </div>
  );
};

export default OrderItemsBody;
