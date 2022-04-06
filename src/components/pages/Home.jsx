import About from "../containers/Home/About/About"
import CVPdfSection from "../containers/Home/CVPdfSection/CVPdfSection"
import Experience from "../containers/Home/Experience/Experience"

export default function Home() {
  return (
    <>
      <CVPdfSection />
      <About />
      <Experience />
    </>
  )
}
