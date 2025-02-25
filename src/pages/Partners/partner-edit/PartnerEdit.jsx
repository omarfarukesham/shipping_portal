import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { useGetPartner } from '@/services/shipping/usePartnerService';
import { useParams } from 'react-router-dom';
import PartnerEditForm from './PartnerEditForm';

const PartnerEdit = () => {
  const { id } = useParams();
  //   console.log(id);
  const { data } = useGetPartner(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Partners' backButton={true}></PageHeader>
      <PartnerEditForm defaultData={data} isLoading />
    </PageContainer>
  );
};

export default PartnerEdit;
