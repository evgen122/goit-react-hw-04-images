import { Hourglass } from 'react-loader-spinner';
import { LoaderArea } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderArea>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        display="block"
        margin-left="auto"
        margin-right="auto"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderArea>
  );
};
