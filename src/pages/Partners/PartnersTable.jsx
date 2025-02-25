import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import PartnersTableBtn from './PartnersTableBtn';
// import PermissionsActionBtn from './PermissionsActionBtn';
// import RolesActionBtn from './RolesActionBtn';

const PartnersTable = ({ data }) => {
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
      label: 'Description',
      key: 'description',
    },

    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Phone',
      key: 'phone',
    },
    {
      label: 'Address',
      key: 'address',
    },
    {
      label: 'PlatformFee',
      key: 'platformFee',
    },
    {
      label: 'Plat form Webhook',
      key: 'platformWebhook',
    },
    {
      label: 'Status',
      key: 'status',
    },

    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <PartnersTableBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PartnersTable;
