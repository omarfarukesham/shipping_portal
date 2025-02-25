import Button from '@/components/ui/Button';
import { useAddOrderPackage } from '@/services/shipping/usePackageService';
import { toast } from 'react-toastify';

const OrderPackageCreateButton = ({ orderId, selectedItems }) => {
  const { isLoading, mutate } = useAddOrderPackage();
  const orderPackageIdExistsInSelectedItems =
    selectedItems.filter((e) => e.orderPackageId).length > 0;

  const handlePackageCreate = () => {
    const data = {
      orderId,
      orderItemIds: selectedItems.map((e) => e.id),
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Package updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  if (orderPackageIdExistsInSelectedItems) {
    return null;
  }

  return (
    <Button
      loading={isLoading}
      className='w-36'
      size='slim'
      onClick={handlePackageCreate}
    >
      Create Package
    </Button>
  );
};

export default OrderPackageCreateButton;
