import Modal from '@/components/modal/Modal';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { usePackageDeliveryStatus } from '@/services/shipping/usePackageService';

const PackageViewStatusModal = ({ isOpen, setIsOpen, trackingId }) => {
  const { isLoading, data: status } = usePackageDeliveryStatus(trackingId);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex h-[200px] max-w-[300px] p-10'
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className='flex flex-col gap-2'>
          <div className=''>Current Delivery Status:</div>
          {status?.delivery_status && (
            <div className='w-fit py-1 px-2 rounded text-label capitalize bg-secondary'>
              {status?.delivery_status?.replaceAll('_', ' ')}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default PackageViewStatusModal;
