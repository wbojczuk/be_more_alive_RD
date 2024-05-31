import Mission from "@/app/(mainsite)/components/homepage/Mission/Mission"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import FathersMatter from "@/app/(mainsite)/components/programpage/FathersMatter/FathersMatter"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Program | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Program | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
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

export default function ProgramPage(){
	 return(
	 	 <>
			<PageTitle title="What We Do" subtitle="Empowering men to lead balanced and fulfilling lives" />
			<FathersMatter />
			<Mission />
		 </>
	 )
}