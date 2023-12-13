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

var nameList = [
    "Saurabh",
    "Tanmay",
    "Ahamd",
    "Ravi",
    "Anurag",
    "Tanu",
    "Mamaoni",
    "Aryan",
  ];

export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}
  
// Generating Random Text for Live Chat
export function getRandomText(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const API_KEY = "AIzaSyB8msfjO04lXVEyknHCWjbmelwdhb8cfGg";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q=http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const channelImage_api =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;

export const videoDetailsApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;


export const video_comments_details_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=" +
  API_KEY +
  "&videoId=";

  export const video_recommendations_api = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${API_KEY}&channelId=`;
