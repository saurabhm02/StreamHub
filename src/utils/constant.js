export const tags =  [
    'All',
    'Gaming',
    'Music',
    'Live',
    'React js',
    'React Native',
    'Frontend',
    'Backend',
    'Full Stack',
    'Movies',
    'BattleGround Mobile India',
    'Cricket',
    'UI\UX',
    'Football',
    'Bollywood Music',
    'Bollywood Movies',
]



export const popular = [
	{ name: "New", url: "latest" },
	{ name: "Music", url: "music" },
	{ name: "React js", url: "Reactjs" },
	{ name: "React Native", url: "Reactnative" },
	{ name: "Kapil Sharma", url: "kapilsharma2023" },
	{ name: "Live", url: "live" },
	{ name: "Frontend", url: "Frontend" },
	{ name: "Akshay Saini", url: "akshaysaini" },
	{ name: "Backend", url: "Backend" },
	{ name: "BattleGround Mobile India", url: "bgmi" },
	{ name: "Bollywood Music", url: "latestBollywoodmusic" },
];


const API_KEY = "AIzaSyB8msfjO04lXVEyknHCWjbmelwdhb8cfGg";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const channelImage_api =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;
