import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PartnerAddForm from './PartnerAddForm';

const PartnerAdd = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Partners' backButton={true}></PageHeader>
      <PartnerAddForm />
    </PageContainer>
  );
};

export default PartnerAdd;
