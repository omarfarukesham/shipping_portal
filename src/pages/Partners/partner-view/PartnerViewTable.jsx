import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';

const PartnerViewTable = ({ data }) => {
  return (
    <PageInnerContainer className='p-8'>
      <Table className='border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableData>{data?.name}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Description</TableHead>
            <TableData>{data?.description}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>{data?.email}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Phone</TableHead>
            <TableData>{data?.phone}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableData>{data?.address}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Platform Fee</TableHead>
            <TableData>{data?.platformFee}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Platform Form Webhook</TableHead>
            <TableData>{data?.platformWebhook}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableData>{data?.status}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </PageInnerContainer>
  );
};

export default PartnerViewTable;
