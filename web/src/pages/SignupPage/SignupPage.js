import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    client
      .signup(data.email, data.password)
      .then(() => navigate(routes.signin()))
      .catch((error) => setError(error.message))
  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <GlobalLayout>
        <h1>Signup Page</h1>
        <Form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <TextField name="email" placeholder="email" />
          <PasswordField name="password" placeholder="password" />
          <Submit>Sign Up</Submit>
        </Form>
      </GlobalLayout>
    </>
  )
}

export default SignupPage
