import './styles.css'

export type MainLayoutProps = {
  children: React.ReactNode;
  topNav: React.ReactNode;
};

export function MainLayout({ children, topNav }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <nav className='top-nav'>{topNav}</nav>
      <main>{children}</main>
    </div>
  );
}