import Button from '@/components/ui/Button';
import { useUpdateOrderPackage } from '@/services/shipping/usePackageService';
import { toast } from 'react-toastify';

const OrderPackageUpdateButton = ({
  orderId,
  orderPackageId,
  selectedItems,
}) => {
  const { isLoading, mutate } = useUpdateOrderPackage();
  const isAllAreApproved = selectedItems.every((e) => e.isApproved);
  const noOrderPackageIdExistsInSelectedItems =
    selectedItems.filter((e) => e.orderPackageId).length < 1;

  const handlePackageUpdate = () => {
    const data = {
      orderPackageId,
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

  if (noOrderPackageIdExistsInSelectedItems) {
    return null;
  }

  return (
    <Button
      loading={isLoading}
      className='w-36'
      size='slim'
      onClick={handlePackageUpdate}
      disabled={!orderPackageId || isAllAreApproved}
    >
      Update Package
    </Button>
  );
};

export default OrderPackageUpdateButton;
