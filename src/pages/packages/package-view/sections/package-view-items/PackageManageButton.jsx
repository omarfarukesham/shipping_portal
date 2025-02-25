import Button from '@/components/ui/Button';
import { useState } from 'react';
import PackageUpdateModal from './package-update-modal/PackageUpdateModal';

const PackageManageButton = ({ orderPackage }) => {
  const [openOrderItemsModal, setOpenOrderItemsModal] = useState(false);
  return (
    <div className='p-5'>
      <Button onClick={() => setOpenOrderItemsModal(true)}>
        Manage Package
      </Button>

      {openOrderItemsModal && (
        <PackageUpdateModal
          isOpen={openOrderItemsModal}
          setIsOpen={setOpenOrderItemsModal}
          orderPackage={orderPackage}
        />
      )}
    </div>
  );
};

export default PackageManageButton;
