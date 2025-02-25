import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import PackagesTableActionBtn from './PackagesTableActionBtn';

const PackagesTable = ({ data }) => {
  const columns = [
    {
      label: 'Serial',
      key: 'serial',
    },
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Approval Status',
      key: 'approvalStatus',
    },
    {
      label: 'Approved By',
      key: 'approvedBy',
    },

    {
      label: 'Order Sequence Id',
      key: 'orderSequenceId',
    },
    {
      label: 'Delivery Status',
      key: 'deliveryStatus',
    },
    {
      label: 'Delivery Partner',
      key: 'deliveryPartner',
      content: (deliveryPartner) => <div>{deliveryPartner.name}</div>,
    },
    {
      label: 'PlatformFee',
      key: 'platformFee',
    },
    {
      label: 'Delivery Partner Fee',
      key: 'deliveryPartnerFee',
    },

    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <PackagesTableActionBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PackagesTable;
