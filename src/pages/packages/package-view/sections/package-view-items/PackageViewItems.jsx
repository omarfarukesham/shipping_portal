import PackageManageButton from './PackageManageButton';
import PackageViewItemsTable from './PackageViewItemsTable';

const PackageViewItems = ({ packageItemsData }) => {
  return (
    <div>
      <PackageViewItemsTable data={packageItemsData.orderItems} />
      <PackageManageButton orderPackage={packageItemsData} />
    </div>
  );
};

export default PackageViewItems;
