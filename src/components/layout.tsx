const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-10 min-h-svh">
      {children}
      <p className="fixed p-4 m-0 right-0 bottom-0 text-xs opacity-65 text-red-400">
        v{1.0}
      </p>
    </div>
  );
};

export default Layout;
