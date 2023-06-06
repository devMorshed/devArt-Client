import { Button } from '@material-tailwind/react';

const BTN = ({children}) => {
  return (
    <Button className='bg-orange-400 text-gray-800 dark:bg-orange-700 dark:text-gray-100'>
      {children}
    </Button>
  );
};

export default BTN;