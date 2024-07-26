import { Routes, Route } from 'react-router-dom'

import { MoviePreview } from '../pages/MoviePreview'
import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/moviepreview/:id' element={<MoviePreview />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createmovie' element={<CreateMovie />} />
    </Routes>
  )
}

