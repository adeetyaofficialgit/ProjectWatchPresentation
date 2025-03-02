const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="bg-black-800 text-white p-4 sticky top-0 w-full z-10">
        <div className="flex justify-between">
          <img
            src="/ProjectWatchPresentation/icon.png"
            alt="Logo"
            className="h-8"
          />
          <h3 style={{ letterSpacing: "6px" }}>The Story</h3>
        </div>
      </header>

      {/* Main Content - Takes remaining space */}
      <main className="flex-grow flex">{children}</main>

      {/* Sticky Footer */}
      <footer className="bg-black-800 text-white p-4 sticky bottom-0 w-full">
        Sticky Footer
      </footer>
    </div>
  );
};
export default Layout;
