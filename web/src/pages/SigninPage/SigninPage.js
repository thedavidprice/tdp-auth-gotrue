import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }
  return (
    <>
      <MetaTags title="Signin" description="Signin page" />

      <h1>Signin</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
