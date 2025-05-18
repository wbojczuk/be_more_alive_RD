import DonateContent from "@/app/(mainsite)/components/donatepage/DonateContent/DonateContent"
import FatherhoodCoachingContent from "@/app/(mainsite)/components/fatherhoodcoachingpage/FatherhoodCoachingContent/FatherhoodCoachingContent"
import CoachingPageTitle from "@/app/(mainsite)/components/misc/CoachingPageTitle/CoachingPageTitle"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Fatherhood Coaching | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Fatherhood Coaching | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function FatherhoodCoachingPage(){
	 return(
	 	 <>
			<CoachingPageTitle title="Fatherhood Coaching
"/>
			<FatherhoodCoachingContent />
	 	 </>
	 )
}