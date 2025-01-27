import BibleVerse from "@/app/(mainsite)/components/homepage/BibleVerse/BibleVerse";
import Donate from "@/app/(mainsite)/components/homepage/Donate/Donate";
import Enrichment from "@/app/(mainsite)/components/homepage/Enrichment/Enrichment";
import Goals from "@/app/(mainsite)/components/homepage/Goals/Goals";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Helping from "@/app/(mainsite)/components/homepage/Helping/Helping";
import Mission from "@/app/(mainsite)/components/homepage/Mission/Mission";
import Sponsor from "@/app/(mainsite)/components/homepage/Sponsor/Sponsor";


export default function Home() {
  return (
    <>
      <Header />
      <Donate />
      <Enrichment />
      <Sponsor />
      <Goals />
      <Helping />
      <BibleVerse />
      <Mission />
    </>
  )
}
