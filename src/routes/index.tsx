import { createHashRouter } from 'react-router-dom'
import App from '../app/App'
import { AboutPage } from '../page/about'
import HomePage from '../page/home'

 const router = createHashRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
         index: true,
          Component: () => <HomePage />,
        },
        {
          path: 'about',
          Component: () => <AboutPage />,
        }
      ],
    }
  ],
)

export default router

