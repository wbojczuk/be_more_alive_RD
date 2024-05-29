import BibleVerse from "@/app/(mainsite)/components/homepage/BibleVerse/BibleVerse";
import Enrichment from "@/app/(mainsite)/components/homepage/Enrichment/Enrichment";
import Goals from "@/app/(mainsite)/components/homepage/Goals/Goals";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Helping from "@/app/(mainsite)/components/homepage/Helping/Helping";
import Mission from "@/app/(mainsite)/components/homepage/Mission/Mission";


export default function Home() {
  return (
    <>
      <Header />
      <Enrichment />
      <Goals />
      <Helping />
      <BibleVerse />
      <Mission />
    </>
  )
}
