import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Auth from './Pages/auth/Auth'
import Dashboard from './Pages/dashboard/Dashboard'
import Layout from './Pages/layout/Layout'
import Settings from './Pages/Settings/Settings'
import { Analytics } from './Pages/analytics/Analytics'
import Links from './Pages/links/Links'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Dashboard/>} />
        <Route path="/links" element={<Links/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/auth" element={<Auth/>} />

    </Routes>
  )
}

export default App
