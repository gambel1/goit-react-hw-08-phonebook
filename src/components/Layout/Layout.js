import HeaderBar from 'components/HeaderBar/HeaderBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <HeaderBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
