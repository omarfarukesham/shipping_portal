import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useEditPartner } from '@/services/shipping/usePartnerService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PartnerEditForm = ({ defaultData }) => {
  const { isLoading, mutate } = useEditPartner();
  const navigate = useNavigate();

  const addPermission = (data) => {
    // console.log(data);
    mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
          navigate('/admin/partners');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  const statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' },
  ];
  return (
    <PageInnerContainer className='p-4'>
      <div className='h-full flex flex-col overflow-auto no-scrollbar'>
        <Form
          showErrorToast={false}
          onSubmit={addPermission}
          defaultValues={defaultData}
          stopPropagation={true}
          className='flex-1 flex flex-col gap-10 '
        >
          <FormInput
            name='name'
            label='Name'
            validations={{ required: 'Please Write the  name' }}
          />
          <FormInput name='description' label='Description' />
          <FormInput name='address' label='address' />
          <FormInput name='email' label='Email' />
          <FormInput name='phone' label='Phone' />
          <FormInput name='platformFee' label='Platform Fee' />
          <FormInput name='platformWebhook' label='Platform Webhook' />
          <FormInput name='partnerWebhook' label='Partner Webhook' />
          <FormDropdown name='status' label='Status' options={statusOptions} />

          <div className='flex justify-center gap-5'>
            <Button type='submit' disabled={isLoading}>
              {isLoading ? <LoadingSpinner /> : 'Confirm'}
            </Button>
          </div>
        </Form>
      </div>
    </PageInnerContainer>
  );
};

export default PartnerEditForm;
