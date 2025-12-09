import { Outlet } from "react-router";
import Nav from "../components/Nav";

export default function MainLayout() {
  return (
    <>
      <header className="bg-cyan-300">
        <div className="mx-auto max-w-3xl p-2">
          <Nav />
        </div>
      </header>
      <main className="flex-1 mx-auto max-w-3xl w-full p-2">
        <Outlet />
      </main>
      <footer className="bg-cyan-300">
        <div className="mx-auto max-w-3xl p-2">
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
}
