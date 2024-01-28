import { Outlet } from "react-router-dom";
import Steps from "./components/steps";
import BgMobile from "./assets/images/bg-sidebar-mobile.svg";

export default function App() {
  return (
    <main className="md:flex md:h-full md:justify-center md:items-center">
      <section className="relative isolate md:flex bg-white p-4 shadow-md rounded-md">
        <img
          src={BgMobile}
          alt=""
          className="absolute top-0 left-0 -z-10 md:hidden"
        />
        <Steps />

        <form className="w-fit mx-auto">
          <Outlet />
        </form>
      </section>
    </main>
  );
}
