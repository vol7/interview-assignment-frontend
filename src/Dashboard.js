import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

export default function SignIn() {
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <p>Dashboard!</p>
      <p>This is where the tasks list and creation form should live. This page should only be accessible if logged in.</p>
    </Container>
  )
}