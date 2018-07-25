# Ben Atkins JLB Skills Assessment
# My process
****


1. The first thing I noticed was that I was going to need to familiarize myself with absolute and relative positioning. With this in mind, I decided to split the page up into 2 major parts: the header img & the body, and positioned the parts of each absolutely within each container.

2. I also noticed that the styling required one font-family, but several font-weight variations of it, so I declared the entire body to have that font, but for each individual element, I edited both the font-size and the font weight, as well as the color.

3. For randomizing the header img, I created a random number generator in JS(#'s 1-3 only) and using jQuery I changed the img src to include that number when printing to the dom.

4. I used absolute positioning and z-index to post the text over the header img.

5. For the scale of each element, including the font-size to the width of each section, I examined the mock-up closely and found specific reference points and tried to match them to keep up with the consistency.

6. Since I don't have a screen capable of fitting a 1920px width, I observed my changes on [Quirktool's Screenfly](http://quirktools.com/screenfly/) .

7. I used a couple flex-boxes with a specific width and flex-wrap to display the collage in the body of the page, knowing that it would keep a consistent look.

8. For the text in the body I took advantage of the 'first-child' and 'nth-child' SASS selectors to demonstrate different styles for each 'p' tag.

9. For the animations I created a large handful of variables representing the position of each object that I wanted to fade in, as well as the screen height and the current y-axis scroll-position. As the user is scrolling, it calculates whether or not each element is in view, and if it results in true, then it passes an if statement resulting in a  '$("#img1").fadeIn('slow')'

Thank you for the opportunity to interview as well as giving me a chance on this coding exercise. Hope all is well and i look forward to hearing back.