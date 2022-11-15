import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = () => {
    logOut().then(() => navigate(routes.home()))
  }

  return <button onClick={() => onClick()}>Sign Out</button>
}

export default SignoutBtn
