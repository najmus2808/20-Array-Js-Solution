// Problem-15: Facebook needs to keep track of the number of reactions (like, love, haha, wow, sad, angry) on each post.

const posts = [
  {
    id: "_1",
    author: "John",
    content: "Javascript 100 Basics Problems",
    reactions: {
      like: 50,
      love: 20,
      haha: 5,
      wow: 2,
      sad: 1,
      angry: 0,
    },
  },
  {
    id: "_2",
    author: "Sakib",
    content: "React 100 Tricks",
    reactions: {
      like: 1000,
      love: 75,
      haha: 10,
      wow: 3,
      sad: 0,
      angry: 1,
    },
  },
];

// increment the count of a reaction of a post
function incrementReactionCount(postId, reactionType) {
  const post = posts.find((post) => post.id === postId);
  post.reactions[reactionType] += 1;
  console.log(
    `Incremented ${reactionType} reaction count for post : ${postId}`
  );
}

incrementReactionCount("_1", "like");
incrementReactionCount("_2", "haha");
console.log(posts);
