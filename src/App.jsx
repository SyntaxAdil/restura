import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"
import {Dishes} from "./components/Dishes"
import {About} from "./components/About"
import {Mission} from "./components/Mission"
import {Experties} from "./components/Experties"
import {Review} from "./components/Review"
import {Contact} from "./components/Contact"
function App() {
  return (
    <section className="overflow-x-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <main className="max-w-7xl mx-auto ">
        <Dishes />
        <About />
        <Mission />
        <Experties />
        <Review />
        <Contact />

      </main>
      
      
    </section>
  )
}

export default App
