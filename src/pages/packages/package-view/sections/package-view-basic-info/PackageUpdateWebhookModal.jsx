import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useOrderPackageWebhook } from '@/services/shipping/usePackageService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const PackageUpdateWebhookModal = ({ orderPackage }) => {
  const { id, packageAmount } = orderPackage;
  const [openModal, setOpenModal] = useState(false);
  const { isLoading, mutate } = useOrderPackageWebhook();

  const handleSubmit = (formData) => {
    const data = {
      ...formData,
      orderPackageId: id,
      platformToken: 'OeMgwF3KEc8Vb1UyIbkAFCS0uIzahM1fOmIPqLeCyddBSRHIuz',
    };
    mutate(data, {
      onSuccess: () => {
        setOpenModal(false);
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    collectedAmount: packageAmount,
  };
  return (
    <div>
      <Button
        size='small'
        variant='texted-outlined'
        onClick={() => setOpenModal(true)}
      >
        Manual Update
      </Button>

      {openModal && (
        <Modal
          isOpen={openModal}
          setIsOpen={setOpenModal}
          className='p-10 md:max-w-[500px]'
        >
          <Form
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            className='flex flex-col gap-5'
          >
            <h4 className='text-center'>Manual Webhook</h4>
            <FormInput
              name='collectedAmount'
              placeholder={packageAmount || 'Collected Amount'}
              label='Collected Amount'
              validations={{ required: 'Please give a valid amount' }}
            />
            <div className='flex justify-center'>
              <Button type='submit' loading={isLoading}>
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default PackageUpdateWebhookModal;
