import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
