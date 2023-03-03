import { IconUserCircle } from '@tabler/icons-react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen" dir="rtl">
      <div className="flex w-full justify-between p-4">
        <div className="flex gap-x-4">
          <Link to="/">الخارطة الالكترونية</Link>
          {/* <Link to="/employees">الموظفين</Link> */}
        </div>
        <h4>الجمارك الاردنية - مديرية مكافحة التهريب</h4>
        <div className="relative">
          <IconUserCircle stroke={1.5} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
