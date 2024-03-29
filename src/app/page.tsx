import Image from 'next/image'
import Navbar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <Navbar/>
      <Landing/>
      <About/>
      <Experience/>
    </main>
  )
}
