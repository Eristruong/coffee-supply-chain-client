import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import UserAdminForm from '../components/AddUserAdmin/UserAdminForm';

import FarmForm from '../components/AddFarmDetails/FarmForm';

// ----------------------------------------------------------------------

export default function DashboardAdmin() {
  return (
    <Page title="Administrator">
      <Container maxWidth="xl">
        <UserAdminForm />
        <div className='mt-20'>
          <FarmForm />
        </div>
      </Container>
    </Page>
  );
}
