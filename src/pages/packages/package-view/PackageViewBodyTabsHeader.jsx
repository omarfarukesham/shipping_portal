import Button from '@/components/ui/Button';
import { PACKAGE_VIEW } from '@/configuration/constants';

const PackageViewBodyTabsHeader = ({ viewMode, setViewMode }) => {
  return (
    <div className='flex gap-3 border-b border-gray-4 p-5'>
      <Button
        variant={viewMode === PACKAGE_VIEW.basic ? 'secondary' : ''}
        onClick={() => setViewMode(PACKAGE_VIEW.basic)}
        size='small'
      >
        Basic Info
      </Button>

      <Button
        variant={viewMode === PACKAGE_VIEW.items ? 'secondary' : ''}
        onClick={() => setViewMode(PACKAGE_VIEW.items)}
        size='small'
      >
        Items
      </Button>

      <Button
        variant={viewMode === PACKAGE_VIEW.history ? 'secondary' : ''}
        onClick={() => setViewMode(PACKAGE_VIEW.history)}
        size='small'
      >
        History
      </Button>
    </div>
  );
};

export default PackageViewBodyTabsHeader;
