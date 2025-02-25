import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const PackagesFIltersModal = ({
  isOpen,
  setIsOpen,
  filters,
  applyFilters,
  clearFilters,
}) => {
  const filtersData = { ...filters };

  const handleApplyFilters = (data) => {
    applyFilters(removeUndefinedKeys(data));
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsOpen(false);
  };
  const delivaryStatus = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'InActive', value: 'INACTIVE' },
  ];
  const approvedStatus = [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Approved', value: 'APPROVED' },
    { label: 'Rejected', value: 'REJECTED' },
  ];
  const partnerPaymentStatus = [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Failed', value: 'FAILED' },
    { label: 'Paid', value: 'PAID' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <Form
        onSubmit={handleApplyFilters}
        defaultValues={filtersData}
        className='flex-1 flex flex-col gap-10'
      >
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
            <FormInput name='name' label='Name' placeholder='Partner Name' />
            <FormInput name='orderId' label='Order Id' placeholder='Order Id' />
            <FormInput
              name='orderSequenceId'
              label='Order Sequence Id'
              placeholder='Order Sequence Id'
            />
            <FormInput
              name='sellerId'
              label='Seller Id'
              placeholder='Seller Id'
            />
            <FormInput
              name='orderTrackingNo'
              label='Order Tracking No'
              placeholder='Order Tracking No'
            />

            <FormDropdown
              name='delivaryStatus'
              label='Delivary Status'
              options={delivaryStatus}
            />
            <FormDropdown
              name='approvalStatus'
              label='Approval Status'
              options={approvedStatus}
            />
            <FormDropdown
              name='partnerPaymentStatus'
              label='Partner Payment Status'
              options={partnerPaymentStatus}
            />
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <Button type='submit' className='text-white border-white'>
            Apply Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant='secondary'
            className='text-white border-white'
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default PackagesFIltersModal;
