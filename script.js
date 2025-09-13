const categories = [
    'dark',
    'disturbing',
    'creepy',
    'fun',
    'experimental',
    'conspiracy',
    'satanic',
    'beautiful',
    'flowers',
    'car-fun',
    'random recipe',
    'game',
    'stories',
    'sci-fi',
    'fantasy',
    'mythology',
    'psychology',
    'technology',
    'space',
    'history-mysteries',
    'paranormal',
    'dreams',
    'music',
    'art',
    'literature',
    'urban legends',
    'mystery-crime',
    'surreal',
    'abstract',
    'travel',
    'nature',
    'ocean',
    'mountains',
    'future visions',
    'post-apocalypse',
    'cyberpunk',
    'steampunk',
    'medieval',
    'ancient civilizations',
    'rituals',
    'philosophy',
    'time-travel',
    'AI-thoughts',
    'parallel worlds',
    'random invention',
    'lost knowledge',
    'secret societies',
    'unexplored places',
    'cursed objects',
    'horror-comedy',
    'retro',
    'dreamscapes',
    'reddit',
    'lost-wave',
    'Math',
    'illusions',
    'mad science',
    'underground culture',
    'street art',
    'cryptids',
    'weird food',
    'haunted places',
    'symbolism',
    'alchemy',
    'occult',
    'gothic',
    'minimalism',
    'maximalism',
    'utopia',
    'dystopia',
    'fairy tales',
    'ritual dance',
    'forgotten gods',
    'tarot',
    'astrology',
    'numbers-mystery',
    'geometry',
    'dream analysis',
    'biohacking',
    'transhumanism',
    'quantum weirdness',
    'strange science',
    'weather-anomalies',
    'volcanoes',
    'deserts',
    'arctic',
    'jungles',
    'lost cities',
    'forgotten wars',
    'ancient scripts',
    'monsters',
    'robots',
    'androids',
    'virtual reality',
    'augmented reality',
    'simulations',
    'glitches',
    'memes',
    'internet legends',
    'deep web',
    'creepypasta',
    'true crime',
    'serial killers',
    'escape stories',
    'hidden treasures',
    'ritual music',
    'other dimensions',
    'near-death',
    'afterlife',
    'haiku',
    'folk tales',
    'tribal culture',
    'shamanism',
    'witchcraft',
    'mystic animals',
    'nightmares',
    'heaven',
    'hell',
    'chaos',
    'order',
    'dream machines',
    'forgotten tech',
    'magic vs science',
    'game'
];

const types = [
    'website',
    'blog',
    'simple game',
    'website with audio playing',
    'website with appearing video',
    'website with videos',
    'website photo-gallery',
    'single-page article',
    'with reddit links',
    'with sub-reddit links',
    'landing'
];

const getRandomTopics = () => {
    const max = 5; 
    const count = Math.floor(Math.random() * max) + 1;
    const shuffled = [...categories].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected.join(', ');
};

const getRandomType = () => {
    const idx = Math.floor(Math.random() * types.length) + 1;
    return types[idx];
};
// const temp = (Math.random() * 1.5 + 0.5).toFixed(2);
// console.log(temp)
const type = getRandomType();
const prompt = `You are a web-developer 
who builds an html website for fun, 
art and experiment. your task is to 
generate any interesting html ${type} 
with topics tags "${getRandomTopics()}" you want. 
generate any html website you want following my requirements. 
The output should be without any markdown. 
Websites are also MUST be UNIQUE with clickable links on real websites.`;
console.log(prompt);
puter.ai.chat(
    prompt
).then((res) => {
    console.log(res.message.content);
    document.querySelector('body').innerHTML = res.message.content;
});