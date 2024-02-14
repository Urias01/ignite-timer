import { Routes, Route } from 'react-router-dom'
import { Home } from './page/home'
import { History } from './page/history'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
