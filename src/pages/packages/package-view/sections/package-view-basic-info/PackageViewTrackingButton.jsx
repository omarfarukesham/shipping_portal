import Button from '@/components/ui/Button';
import { useState } from 'react';
import PackageViewOrderTrackingModal from './PackageViewOrderTrackingModal';
// import OrderShippingStatusTrackingModal from './OrderShippingStatusTrackingModal';

const PackageViewTrackingButton = ({ trackingId }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenConfirmModal(true)}
        variant='texted-outlined'
        size='small'
      >
        Get Status
      </Button>

      {openConfirmModal && (
        <PackageViewOrderTrackingModal
          isOpen={openConfirmModal}
          setIsOpen={setOpenConfirmModal}
          trackingId={trackingId}
        />
      )}
    </>
  );
};

export default PackageViewTrackingButton;
