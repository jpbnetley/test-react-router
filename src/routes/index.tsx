import { createHashRouter } from 'react-router-dom'
import App from '../app/App'
import { AboutPage } from '../pages/about'
import HomePage from '../pages/home'

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

