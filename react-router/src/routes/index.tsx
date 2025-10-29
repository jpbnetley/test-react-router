import { createBrowserRouter } from 'react-router-dom'
import App from '../app/App'
import { AboutPage } from '../pages/about'
import HomePage from '../pages/home'
import { ProfilePage } from '../pages/profile'
import { UnknownProfilePage } from '../pages/unknown-profile'

 const router = createBrowserRouter([
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
        },
        {
          path: 'profile',
          children: [
            {
              path: ':id',
              Component: () => <ProfilePage />,
            },
            {
              path: 'unknown',
              Component: () => <UnknownProfilePage />,
            }
          ]
        }
      ],
    }
  ],
)

export default router

