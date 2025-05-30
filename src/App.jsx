import { Routes, Route } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/Homepage'
import NewSubmissionPage from './pages/NewSubmissionPage'
import MySubmissionsPage from './pages/MySubmissionsPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/new-submission" element={<NewSubmissionPage />} />
      <Route path="/submissions" element={<MySubmissionsPage />} />
    </Routes>
  )
}

export default App
