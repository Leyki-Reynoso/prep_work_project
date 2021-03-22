# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Leyki Reynoso jr**

Time spent: **20** hours spent in total

Link to project: (insert your link here, should start with https://lime-marred-creature.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [done] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [done] "Start" button toggles between "Start" and "Stop" when clicked. 
* [done] Game buttons each light up and play a sound when clicked. 
* [done] Computer plays back sequence of clues including sound and visual cue for each button
* [done] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [done] User wins the game after guessing a complete pattern
* [done] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [done] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [done] Buttons use a pitch (frequency) other than the ones in the tutorial
* [done] More than 4 functional game buttons
* [done] Playback speeds up on each turn
* [done] Computer picks a different pattern each time the game is played
* [done] Player only loses after 3 mistakes (instead of on the first mistake)
* [done] Game button appearance change goes beyond color (e.g. add an image)
* [done] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [done] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- List anything else that you can get done to improve the app!
- background sounds.
- background GIF.
- UI for health and time left.


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2Fprep_work.gif?v=1616383256202](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- stack overflow for debugging and implemmenting new functions.
- zapsplat for the background music and the sound.
- google to find the images.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

the main challenge I found was the random pattern generation. I needed to create a pattern list just like the one shown in the example for the code; however, this one needed to be generated randomly each time the game started. My final solution was to divide the creation into pieces that I could understand easily. I first created an empty array called "pattern" to add values later on. Then I researched how to add a member to an array, which only required a push function. Finally, I found out how to create a random integer in java. This step was a little more convoluted than I expected as I needed to use the random function and then multiplied it by the max range I wanted(which would be how many rounds there would be). By doing this, I would get a double type, so I just rounded it to make it an integer and then used the push function to add the number into the pattern array. This method seemed to work fine for creating a random array; however, this did not work well with the game's logic. So instead of creating a whole array just when the game starts. I added a new value to the array when the game started, and every time a turn was over, this worked perfectly with the game logic, and I was able to handle the problem efficiently.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would like to know how to create hyperlinks to other sections of a website. For example how youtube has a home page and a subscription page. That is a very versatile tool for any web, and learning would be helpful.

 Another question I have is how web developers can read data from websites and write data into websites. More than once, I have been in a situation where extracting data from a website to use it on a spreadsheet would have saved a lot of time, but due to my lack of knowledge, I had to resort to manually typing the information. In addition to spreadsheets, it would be fascinating to use programming languages other than java to work with websites. For example, using the python library "panda" to modify data from a website and then outputting onto the same website or another.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- Fix the timer so that it starts when the clues stop.

- Making difficulty levels that allow increasing the speed at which the button clues play, The number of buttons, and the number of rounds.

- Stylize the health, timer, and start button to look more fitting for the whole theme of the game.

- Make a button that allows muting the background music.

- Avoid sounds from interrupting each other while keeping the final rounds' high speed.


## License

    Copyright Leyki Reynoso jr

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.