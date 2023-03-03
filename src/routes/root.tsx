import { IconUserCircle } from '@tabler/icons-react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen" dir="rtl">
      <div className="flex w-full justify-between items-center p-4 shadow-md" style={{ zIndex: 999 }}>
        <div className="flex gap-x-6 items-center">
          <img src="https://services.customs.gov.jo/JCcits/assets/img/cust_side_tr.png" alt="logo" width="140" />
          <div className="flex gap-x-4">
            <Link to="/" className="bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-500">
              الخارطة الالكترونية
            </Link>
            {/* <Link to="/employees">الموظفين</Link> */}
          </div>
        </div>
        <div className="relative">
          <IconUserCircle stroke={1.5} size={28} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
