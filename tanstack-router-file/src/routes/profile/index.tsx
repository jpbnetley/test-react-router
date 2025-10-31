import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
  component: () => {
    return <p>Root profile</p>
  }
})

