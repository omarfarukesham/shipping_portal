import { PACKAGE_VIEW } from '@/configuration/constants';
import PackageViewBodyTabsHeader from './PackageViewBodyTabsHeader';
import PackageViewBasicInfo from './sections/package-view-basic-info/PackageViewBasicInfo';
import PackageViewHistories from './sections/package-view-histories/PackageViewHistories';
import PackageViewItems from './sections/package-view-items/PackageViewItems';

const PackageViewBodyTabs = ({ packages, viewMode, setViewMode }) => {
  return (
    <div className='h-full flex flex-1 flex-col'>
      <PackageViewBodyTabsHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        order={packages}
      />

      {viewMode === PACKAGE_VIEW.basic && (
        <PackageViewBasicInfo packageBasicData={packages} />
      )}
      {viewMode === PACKAGE_VIEW.items && (
        <PackageViewItems packageItemsData={packages} />
      )}
      {viewMode === PACKAGE_VIEW.history && (
        <PackageViewHistories packageHistoryData={packages} />
      )}
    </div>
  );
};

export default PackageViewBodyTabs;
