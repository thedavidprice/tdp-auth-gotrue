import { MetaTags } from '@redwoodjs/web'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <GlobalLayout>
        <h1>GoTrue Auth Test</h1>
        <p>Redwood version 3.4.0</p>
      </GlobalLayout>
    </>
  )
}

export default HomePage
