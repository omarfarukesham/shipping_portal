import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { useGetPartner } from '@/services/shipping/usePartnerService';
import { useParams } from 'react-router-dom';
import PartnerViewTable from './PartnerViewTable';
// import PermissionViewForm from './PermissionViewForm';

const PartnerView = () => {
  const { id } = useParams();
  const { data } = useGetPartner(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Partners' backButton={true}></PageHeader>
      <PartnerViewTable data={data} />
    </PageContainer>
  );
};

export default PartnerView;
