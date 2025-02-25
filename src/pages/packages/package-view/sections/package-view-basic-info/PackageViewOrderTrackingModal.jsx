import Modal from '@/components/modal/Modal';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { usePackageDeliveryStatus } from '@/services/shipping/usePackageService';

const PackageViewOrderTrackingModal = ({ isOpen, setIsOpen, trackingId }) => {
  const { isLoading, data: status } = usePackageDeliveryStatus(trackingId);
  const emptyStatus = 'Status unavailable';

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
          <div className='w-fit py-1 px-2 rounded text-label capitalize bg-secondary'>
            {status?.deliveryStatus?.replaceAll('_', ' ') || emptyStatus}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PackageViewOrderTrackingModal;
