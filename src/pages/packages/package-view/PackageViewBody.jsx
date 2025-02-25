import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { PACKAGE_VIEW } from '@/configuration/constants';
import { useGetPackage } from '@/services/shipping/usePackageService';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PackageViewBodyTabs from './PackageViewBodyTabs';

const PackageViewBody = () => {
  const { id } = useParams();
  const { data: packageDetails, error, isFetching } = useGetPackage(id);
  const [viewMode, setViewMode] = useState(PACKAGE_VIEW.basic);

  return (
    <PageInnerContainer className='flex flex-col'>
      {isFetching && <LoadingSpinner text='Loading Order' className='flex' />}
      {!isFetching && packageDetails && !error && (
        <PackageViewBodyTabs
          packages={packageDetails}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </PageInnerContainer>
  );
};

export default PackageViewBody;
