import PageError from '@/components/layout/PageError';
import Modal from '@/components/modal/Modal';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderItems } from '@/services/order/useOrder';
import OrderItemsBody from './OrderItemsBody';

const PackageUpdateModal = ({ orderPackage, isOpen, setIsOpen }) => {
  const { data, isFetching, error } = useOrderItems(orderPackage.orderId);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='h-[70%] flex flex-col'
    >
      <div className='p-5 text-center'>Update Order Package</div>
      <div className='flex-1 flex'>
        {isFetching && <LoadingSpinner message='Loading order items' />}
        {!isFetching && data?.items && (
          <OrderItemsBody
            orderItems={data?.items}
            orderId={orderPackage.orderId}
            orderPackageId={orderPackage.id}
          />
        )}
        {!isFetching && error && <PageError message={error.message} />}
      </div>
    </Modal>
  );
};

export default PackageUpdateModal;
