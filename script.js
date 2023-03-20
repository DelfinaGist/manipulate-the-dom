let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const myTitle = document.querySelector('#main-title');
myTitle.innerHTML = '<h1>"The DOM"</h1>'
// console.log(newTitle);

  // Part 2
const bodyEl = document.querySelector('body')
bodyEl.style.backgroundColor = 'orange';
//change the background-color

  // Part 3
const favoriteThings = document.querySelector('#favorite-things');
favoriteThings.removeChild(favoriteThings.lastElementChild);
//removed last item on DOM's favorite things list 

  // Part 4
const specTitles = document.querySelectorAll(".special-title")
for (const titles of specTitles) {
  titles.style.fontSize = '2rem';
}

  // Part 5
const pastRaces = document.querySelector("#past-races");
pastRaces.removeChild(pastRaces.children[3]);
//remove Chicago from past races list

  // Part 6
const newLi = doecument.createElement('li');
newLi.textContent = "Monte-Carlo"
pastRaces.appendChild(newLi);
//add new city to past races list

  // Part 7
const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post')

const newHeading = document.createElement('h1')
newHeading.Content = "Monte-Carlo"

const NewP = document.createElement('p');
NewP.textContent = "Faster, faster, faster until the thrill of speed overcomes the fear of death!"

newBlogPost.appendChild(newHeading);
newBlogPost.appendChild(NewP);

var blogPostsSection = document.querySelector(".main");
blogPostsSection.appendChild(newBlogPost);

  // Part 8
const quote = document.querySelector('#quote-title')
quote.addEventListener('click', randomQuote)

  // Part 9
const blogPosts = doecument.querySelectorAll('.blog-post');

blogPosts.forEach(post => {
  post.addEventListener('mouseout', () => {
    post.classList.toggle('purple');
  });
  post.addEventListener('mouseenter', () => {
    post.classList.toggle('red');
  });
});
});
