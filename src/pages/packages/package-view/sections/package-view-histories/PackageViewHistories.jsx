import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
// import { useGetPackages } from '@/services/shipping/useShippingPackageService';
import { useGetHistories } from '@/services/shipping/useHistoryService';
import PackageViewHistoriesTable from './PackageViewHistoriesTable';

const PackageViewHistories = ({ packageHistoryData }) => {
  const filters = {
    orderPackageId: packageHistoryData.id,
  };
  //   console.log(filters);

  const { data, error, isFetching } = useGetHistories(filters);

  return (
    <PageInnerContainer className='flex flex-col'>
      {isFetching && <LoadingSpinner text='Loading History...' />}
      {!isFetching && data && !error && (
        <PackageViewHistoriesTable data={data?.items} />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </PageInnerContainer>
  );
};

export default PackageViewHistories;
