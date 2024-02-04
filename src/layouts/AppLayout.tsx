import { Outlet } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/use-smooth-scroll';

export const AppLayout = () => {
  useSmoothScroll();

  return (
    <>
      <Outlet />
    </>
  );
};
