import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PackageViewBody from './PackageViewBody';

const PackageView = () => {
  //   const { id } = useParams();
  //   const { data } = useGetPackage(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Packages' backButton={true}></PageHeader>
      {/* <PackageViewTable data={data} /> */}
      <PackageViewBody />
    </PageContainer>
  );
};

export default PackageView;
