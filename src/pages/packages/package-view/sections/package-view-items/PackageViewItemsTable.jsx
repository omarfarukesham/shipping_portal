import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';

const PackageViewItemsTable = ({ data }) => {
  const columns = [
    {
      label: 'Image',
      key: 'image',
      content: (value) => (
        <img src={value?.url} className='h-12 object-contain' />
      ),
    },
    {
      label: 'Title',
      key: 'title',
    },
    {
      label: 'Quantity',
      key: 'quantity',
    },
    {
      label: 'Return Quantity',
      key: 'returnQuantity',
    },
    {
      label: 'Item Delivery Status',
      key: 'itemDeliveryStatus',
    },
    {
      label: 'Refund Amount',
      key: 'refundAmount',
    },
    {
      label: 'Total',
      key: 'total',
    },
    {
      label: 'Net Discount',
      key: 'netDiscount',
    },
    {
      label: 'Net Amount',
      key: 'netAmount',
    },
  ];

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <DataTable data={data} columns={columns} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PackageViewItemsTable;

/*
  "id" : "66543e7933c8f56eda1637e9",
        "productId" : "6597870cbd73d215ae9e6efd",
        "title" : "Remote Control Car",
        "slug" : null,
        "sku" : null,
        "sellerId" : "65938a39b630832694e1c347",
        "sellerSlug" : "premium-closet-adfd1f",
        "quantity" : 1,
        "returnQuantity" : 0,
        "itemDeliveryStatus" : "PENDING",
        "refundAmount" : null,
        "total" : 53000.00,
        "netDiscount" : 0.00,
        "netAmount" : 53000.00,
        "fullReturn" : false,
        "fullRefund" : false

*/
