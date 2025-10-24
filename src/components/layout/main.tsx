import './styles.css'

export type MainLayoutProps = {
  children: React.ReactNode;
  topNav: React.ReactNode;
};

export function MainLayout({ children, topNav: nav }: MainLayoutProps) {
  return (
    <div>
      <nav className="main-layout">{nav}</nav>
      <main>{children}</main>
    </div>
  );
}