import PackageViewBasicInfoTable from './PackageViewBasicInfoTable';

const PackageViewBasicInfo = ({ packageBasicData: orderPackage }) => {
  return <PackageViewBasicInfoTable orderPackage={orderPackage} />;
};

export default PackageViewBasicInfo;
