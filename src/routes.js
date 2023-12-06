import React from 'react'

const HomePage = React.lazy(() => import('./pages/Home'));

const routes = [
    { path: "/", name: "Home", element: HomePage }

]

export default routes
