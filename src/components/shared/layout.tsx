import { Muted } from '../ui/typography';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-10 relative">
      {children}
      <Muted className="fixed p-4 m-0 right-0 bottom-0 text-xs">v{1.0}</Muted>
    </div>
  );
};

export default Layout;
