import PlusIcon from '@/assets/icons/PlusIcon';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const PartnersHeader = () => {
  const navigate = useNavigate();
  return (
    <PageHeader title='Partners' backButton={false}>
      <Button onClick={() => navigate('add')}>
        <PlusIcon className='w-5 h-5 ml-[-5px]' />
        Add New
      </Button>
    </PageHeader>
  );
};

export default PartnersHeader;
