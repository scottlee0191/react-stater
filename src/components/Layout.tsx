import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Outlet />
    </>
  );
}
