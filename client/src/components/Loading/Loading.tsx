import { Spinner } from '@chakra-ui/react';

import './Loading.scss';

export const Loading = () => {
  return (
    <div className="loading">
      {/* <Icon type="loading" /> */}
      <Spinner color="var(--device-dark-orange);" size='lg' />
    </div>
  )
}