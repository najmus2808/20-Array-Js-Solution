// Problem-14: A weather app needs to format a list of temperatures Celsius and Fahrenheit display.

const videos = [
  {
    id: "abc123",
    title: "How to Code a React App",
    views: 1000,
    likes: 50,
    comments: [
      { id: "c1", text: "Great tutorial!" },
      { id: "c2", text: "Thanks for sharing!" },
    ],
  },
  {
    id: "def456",
    title: "Building a REST API with Node Js",
    views: 500,
    likes: 25,
    comments: [
      { id: "c3", text: "Very helpful, thanks!" },
      { id: "c4", text: "Can't wait to try this out" },
    ],
  },
];

// increment the view count of a video
function incrementViewCount(videoId) {
  const video = videos.find((v) => v.id === videoId);
  video.views += 1;
  console.log(`View count for video ${videoId} : ${video.views}`);
}

// add a comment to a video
function addComment(videoId, comment) {
  const video = videos.find((v) => v.id === videoId);
  video.comments.push(comment);
  console.log(`Comment for video ${videoId}`, video.comments);
}

// Example usages
incrementViewCount("abc123");
addComment("def456", { id: "c5", text: "This was exactly what I needed" });
