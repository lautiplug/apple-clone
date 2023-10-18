import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "../Routes/AppRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes/>}/>
    </Routes>
  )
}