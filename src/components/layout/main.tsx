import './styles.css'

export type MainLayoutProps = {
  children: React.ReactNode;
  nav: React.ReactNode;
};

export function MainLayout({ children, nav }: MainLayoutProps) {
  return (
    <div>
      <nav className="main-layout">{nav}</nav>
      <main>{children}</main>
    </div>
  );
}