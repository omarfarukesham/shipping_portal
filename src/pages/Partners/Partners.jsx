import PageContainer from '@/components/layout/PageContainer';
import PartnersBody from './PartnersBody';
import PartnersHeader from './PartnersHeader';

const Partners = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PartnersHeader />
      <PartnersBody />
    </PageContainer>
  );
};

export default Partners;
