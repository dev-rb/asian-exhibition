import { Art } from "../redux/slices";


const jArt1 = '“Death Trap for the Jap.” This piece is a political cartoon that illustrates the Japanese as rodents as they chew up America. The image of a rodent is no coincidence, it conveys the feeling that the Japanese are dirty, diseased, and will contaminate America.';
const jArt2 = 'This is another piece of Japanese Propaganda urging Americans to collect and recycle scrap metal for the war effort. However, as you can see it specifically targets the Japanese by personifying the snake in the image as a native Japanese. This seems very intentional to draw the people of Japan as vermin as you can see from this and the last picture where they were drawn as rats. The imagery I get from this is that the people of that nation are infectious and contaminated, they will spread their venom/poison if we stop them now.';

const cArt1 = '';
const cArt2 = '';

const iArt1 = 'This piece was specifically chosen to show how Newspaper Headlines such as this, were published with a clear agenda to spread fear and disgust among society, leading to racist laws and consequences of riots which dove immigrants out of their homes. This article is one of many which may be specific to South Asians from the looks of it but is actually completely similar to the many articles used to describe the Japanese and Chinese immigrants. Showcasing the racism and bigotry held by people at the time.';
const iArt2 = 'This piece was chosen to engage with all Americans. It showcases how immigrants were perceived in a purely negative connotation to contrast the similarity of modern-day Trump’s America. How the repetition of baseless claims leads to change in public outrage, political decision and culture wars.';

const fArt1 = '“The Filipino’s First Bath. McKinley - Oh, you dirty boy!” This cartoon implies that the Filipinos are dirty and contaminated, only to take a bath after becoming a part of the United States’ territory. The US is the one that is sanitizing them and making them civilized. Dark skinned and primitive, often mistakenly depicted as Africans.';
const fArt2 = 'This is a newspaper clipping that portrays the transformation of the Filipino from being "barbaric" to a "civilized man". This clipping shows that before the expansion, the Filipinos were barbaric and violent, but after the expansion, they became civilized.';

export const JapaneseArt : Art[] = [
    {image: 'japaneseArt1', text: jArt1, index: 0},
    {image: 'japaneseArt2', text: jArt2, index: 1}

]

export const ChineseArt : Art[] = [
    {image: 'chineseArt1', text: '', index: 0},
    {image: 'chineseArt2', text: '', index: 1}

]

export const IndianArt : Art[] = [
    {image: 'indianArt1', text: iArt1, index: 0},
    {image: 'indianArt2', text: iArt2, index: 1}

]

export const FilipinoArt : Art[] = [
    {image: 'filipinoArt1', text: fArt1, index: 0},
    {image: 'filipinoArt2', text: fArt2, index: 1}

]
