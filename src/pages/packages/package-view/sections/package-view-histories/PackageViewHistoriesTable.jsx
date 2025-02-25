import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import getFormattedDate from '@/utilities/getFormattedDate';

const PackageViewHistoriesTable = ({ data }) => {
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
      label: 'Action Type',
      key: 'actionType',
    },
    {
      label: 'Previous Status',
      key: 'previousStatus',
    },
    {
      label: 'Current Status',
      key: 'currentStatus',
    },
    {
      label: 'Comment',
      key: 'comment',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: 'Updated At',
      key: 'updatedAt',
      content: (value) => getFormattedDate(value, true),
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PackageViewHistoriesTable;
