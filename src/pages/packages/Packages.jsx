import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PackagesBody from './PackagesBody';

const Packages = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Packages' backButton={false} />
      <PackagesBody />
    </PageContainer>
  );
};

export default Packages;
