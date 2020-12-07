import { Art } from "../redux/slices";


const jArt1 = '“Death Trap for the Jap.” This piece is a political cartoon that illustrates the Japanese as rodents as they chew up America. The image of a rodent is no coincidence, it conveys the feeling that the Japanese are dirty, diseased, and will contaminate America.';
const jArt2 = 'This is another piece of Japanese Propaganda urging Americans to collect and recycle scrap metal for the war effort. However, as you can see it specifically targets the Japanese by personifying the snake in the image as a native Japanese. This seems very intentional to draw the people of Japan as vermin as you can see from this and the last picture where they were drawn as rats. The imagery I get from this is that the people of that nation are infectious and contaminated, they will spread their venom/poison if we stop them now.';

const cArt1 = `“Out of the Frying Pan Into the Fire”
Officials in San Francisco and Los Angeles drafted “Cubic Air Acts” in the early 1870s, singling out Chinese laborers who lived in crowded boarding houses & apartments
Blamed them for spreading “poisonous” waste products like respired air and excrement
The Cubic Act Ordinance of 1870 required 500 cubic feet of space per person, if violated, they’d be sent to jail
The political cartoon from The Illustrated Wasp depicts a white official pulling caricatures of Chinese men from their beds into an even more crowded jail 
`;
const cArt2 = `Chinese Immigration and the Physiological Causes of the Decay of a Nation by Arthur B. Stout
Books like this added to the growing animosity against the Chinese community from the 1860s onward
Stout promotes the idea that intermarriage between Europeans & Asians would lead to the diminishing of intellectual & physical health
“I am led to these reflections from the contest now waging to the Chinese immigration...Once permitted it must be forever endured. The work of degeneration once commenced, its progress must pursue its insidious and empoisoning influence…”
`;
const cArt3 = `The New York Post publishes “First Case of Coronavirus Confirmed in Manhattan”.
Widely circulated post on Twitter, March 1st, 2020.
The picture used for the article is wholly misleading. The first person confirmed to have the coronavirus in Manhattan was a 39-year-old female health worker who recently traveled in Iran & arrived in Manhattan.
Featured in the picture, however, is an Asian man wearing a mask in Flushing, Queens - irrelevant to the information in the article.
Reinforces the trope that Asians are unsanitary.
`;
const cArt4 = `A coronavirus task force meeting is held at the White House on March 19th, 2020
Inflammatory language used by politicians serve to perpetuate dated and harmful stereotypes of the Chinese as responsible for “bringing” disease to the US.
It’s a deliberate attempt to target Chinese people and undermine the World Health Organization’s (WHO) statement to refrain from using “common” names or geographic locations to minimize stigmatization.
`;


const iArt1 = 'This piece was specifically chosen to show how Newspaper Headlines such as this, were published with a clear agenda to spread fear and disgust among society, leading to racist laws and consequences of riots which dove immigrants out of their homes. This article is one of many which may be specific to South Asians from the looks of it but is actually completely similar to the many articles used to describe the Japanese and Chinese immigrants. Showcasing the racism and bigotry held by people at the time.';
const iArt2 = 'This piece was chosen to engage with all Americans. It showcases how immigrants were perceived in a purely negative connotation to contrast the similarity of modern-day Trump’s America. How the repetition of baseless claims leads to change in public outrage, political decision and culture wars.';

const fArt1 = '“The Filipino’s First Bath. McKinley - Oh, you dirty boy!” This cartoon implies that the Filipinos are dirty and contaminated, only to take a bath after becoming a part of the United States’ territory. The US is the one that is sanitizing them and making them civilized. Dark skinned and primitive, often mistakenly depicted as Africans.';
const fArt2 = 'This is a newspaper clipping that portrays the transformation of the Filipino from being "barbaric" to a "civilized man". This clipping shows that before the expansion, the Filipinos were barbaric and violent, but after the expansion, they became civilized.';
const fArt3 = 'In one of the newspaper articles, titled “Filipinos Not Ready For Self-Government”, the writer claims that Filipinos are not ready for self-government because they only care about being freed and do not have the ability to self govern themselves. The newspaper states, “Says the people need kindergarten instruction in civil affairs - their sanitary wants”. The writer proceeds to support his claim by exclaiming that they are unsanitary since they wash their clothes in the stream that serves as their water supply.';

export const JapaneseArt: Art[] = [
    { image: 'jArt1.jpg', text: jArt1, index: 0 },
    { image: 'jArt2.jpg', text: jArt2, index: 1 }

]

export const ChineseArt: Art[] = [
    { image: 'cArt1.jpg', text: cArt1, index: 0 },
    { image: 'cArt2.jpg', text: cArt2, index: 1 },
    { image: 'cArt3.png', text: cArt4, index: 2 },
    { image: 'cArt4.png', text: cArt3, index: 3 }

]

export const IndianArt: Art[] = [
    { image: 'iArt1.jpg', text: iArt1, index: 0 },
    { image: 'iArt2.jpg', text: iArt2, index: 1 }

]

export const FilipinoArt: Art[] = [
    { image: 'fArt1.jpg', text: fArt1, index: 0 },
    { image: 'fArt2.jpg', text: fArt2, index: 1 },
    { image: 'fArt3.jpg', text: fArt3, index: 2 }
]
