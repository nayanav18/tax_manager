import TopNav from './TopNav';
import Sidebar from './Sidebar';

export default function AppLayout({ children, status, sidebarProps }) {
  return (
    <>
      <TopNav status={status} />
      <div className="app">
        <Sidebar {...sidebarProps} />
        <main className="main">{children}</main>
      </div>
    </>
  );
}
