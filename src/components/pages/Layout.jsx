import { Outlet } from "react-router-dom";
import Header from "../containers/Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
