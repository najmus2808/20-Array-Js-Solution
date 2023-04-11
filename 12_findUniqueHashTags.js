// Problem-12: A social media app needs to find all unique hashtags used in a user posts.

// Solution -1
function findUniqueHashTags(posts) {
  const hashtags = new Set();
  // loop throw the user's posts and add hashtags to set
  for (let post of posts) {
    const words = post.split(" ");
    for (let word of words) {
      if (word.startsWith("#")) {
        hashtags.add(word.slice(1));
      }
    }
  }
  return hashtags;
}

// Solution -2
function findUniqueHashTagsAnother(posts) {
  const hashtags = new Set();

  posts.forEach((post) => {
    const regex = /#\w+/g; // regular expression to match hashtags
    const matches = post.match(regex);
    if (matches) {
      matches.forEach((match) => hashtags.add(match.slice(1)));
    }
  });
  return hashtags;
}

const userPosts = [
  "Just went for a #run #fitness",
  "Enjoying the #weekend #friends",
  "Can't wait for the #vacation #beach",
];

console.log(findUniqueHashTags(userPosts));
console.log(findUniqueHashTagsAnother(userPosts));
