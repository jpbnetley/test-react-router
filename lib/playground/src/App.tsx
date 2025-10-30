import { Header, MainLayout, MyButton, StandardCard } from '../../src'

export function App() {
  return (
    <>
      <MyButton type="primary" />
      <Header />
      <MainLayout topNav={null}>
        test
      </MainLayout>
      <StandardCard content='test' title='title'/>
    </>
  )
}
