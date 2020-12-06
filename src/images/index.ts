import { Art } from "../redux/slices";


const jArt1 = '“Death Trap for the Jap.” This piece is a political cartoon that illustrates the Japanese as rodents as they chew up America. The image of a rodent is no coincidence, it conveys the feeling that the Japanese are dirty, diseased, and will contaminate America.';
const jArt2 = 'This is another piece of Japanese Propaganda urging Americans to collect and recycle scrap metal for the war effort. However, as you can see it specifically targets the Japanese by personifying the snake in the image as a native Japanese. This seems very intentional to draw the people of Japan as vermin as you can see from this and the last picture where they were drawn as rats. The imagery I get from this is that the people of that nation are infectious and contaminated, they will spread their venom/poison if we stop them now.';

const cArt1 = '“Out of the frying pan into the fire”. A piece showing the the tensions between White and Chinese immigrants over labor relating to anti-Asian sentiment.';
const cArt2 = 'In Molina’s chapter “Interlopers in the Land of Sunshine: Chinese Disease Carriers, Launderers, and Vegetable Peddlers”, public health officials in California are seen as experts in medicine, health, and wellness. Their word was held in high regard, even if it was backed with anti-Chinese sentiment. In fact, many published books and laws written during this time reflected the belief that attributed disease with Chinese immigrants, and even went as far as imprisoning them as can be seen with the political cartoon referencing the Cubic Air Ordinance of 1870';
const cArt3 = 'On March 1st, the New York Post shared an article about the first confirmed case of coronavirus in New York City. Despite the fact that the first person who tested positive for the virus was a woman arriving from Iran to Manhattan, the New York Post featured a picture of an Asian man from Flushing, Queens wearing a mask. Whether the choice was intentional or unintentional, the impact remains the same. The media perpetuates the idea that Asian bodies are automatically associated with spreading disease, in spite of evidence disproving that claim.';
const cArt4 = 'A tweet from Jabin Botsford, a photojournalist from the Washington Post commenting on President Trump’s notes where "corona" was crossed out and replaced with "Chinese" as he speaks with his coronavirus task force at the White House on March 19, 2020. The inflammatory language used by politicians and the public alike has incited arguments that points blame at China and more broadly people of Chinese descent as responsible for “bringing” the coronavirus to the U.S. Despite the overwhelming backlash condemning the use of names like “Wuhan virus” or “Chinese virus”, the ideology is deeply rooted in the perception that all Asians embody the abject identity of the unclean “Other” - and are therefore undeserving of inclusion and humanity.';


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
    { image: 'cArt3.png', text: cArt3, index: 2 },
    { image: 'cArt4.png', text: cArt4, index: 3 }

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
