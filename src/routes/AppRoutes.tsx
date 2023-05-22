import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/ui/templates/main/Main';
import { MainPage } from '@/pages/Main';

export const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<MainPage />} />
    </Route>
  </Routes>
);
