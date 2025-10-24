import './styles.css'

export type MainLayoutProps = {
  children: React.ReactNode;
  topNav: React.ReactNode;
};

export function MainLayout({ children, topNav }: MainLayoutProps) {
  return (
    <>
      <nav className="main-layout">{topNav}</nav>
      <main>{children}</main>
    </>
  );
}