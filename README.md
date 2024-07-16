# Music Wizard

## Technology Used
| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |  
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScriptd)   |
|Bootstrap      | [https://getbootstrap.com/](https://getbootstrap.com/)    |
| Git | [https://git-scm.com/](https://git-scm.com/)     |  


## Description
[Visit the deployed site](https://kagen-smith.github.io/Project-01-Music-Wizard/)

This website creates a playlist using a modal and Javascript elements, It allows you to select from a array of objects to see what songs you can add and once you finish your playlist you can see the items you selected on the page. the website uses Bootstrap framework for the modal.

## Code example

In our code we had many new things to tackle one of these new items was a modal. We grabbed a simple modal from Bootstrap and then applied it to our page.

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
once we had this we then added elements that we needed to the page. mainly a input element, a datalist element, and a cancel, save song, and finish playlist buttons

```html
 <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">add songs</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input id ="songs" list="songsList" type="text" name="add songs to playlist" placeholder="Add songs">
                    <datalist id="songsList">
                    </datalist>
                  </div>
                  <div class="modal-footer">
                    <button id="cancel" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button id="addSong" type="button" class="btn btn-primary">Add to playlist</button>
                    <button id="savePlaylist" type="button" class="btn btn-primary" data-bs-dismiss="modal" >Finish playlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
```
once we had this we needed to push our song list to that datalist element. to do that we created a function in JavaScript
```JavaScript
const datalist = document.getElementById('songssList');

songs.forEach(songs => {
  const option = document.createElement('option');
  option.value = songs.title;
  datalist.appendChild(option);
});
```
we created a constant variable that grabbed the ID of the datalist and then we got the songs array we got and then used a forEach function that created the option element, set the element's value to the title of our songs, and then it pushed that list onto the HTML as a option element. 

## Learning Points
we learned many new things working on the project. we learned how to use a CSS framework on a page as well as how to push items created in JavaScript to the HTML. We learned how to add items entered by the user to our local storage and then displayed those stored items to our HTML. 

## Author Info

### Kagen Smith
* [LinkedIn](https://www.linkedin.com/in/kagen-smith-4b22261a0/)
* [Github](https://github.com/Kagen-Smith)

### Kirk Holt
* [LinkedIn](https://www.linkedin.com/in/kirk-holt-1b90a2312/)
* [Github](https://github.com/KiJoDad92)

## credits
[song array](https://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json)
[Bootstrap docs](https://getbootstrap.com)

## license
MIT License

Copyright (c) [2024] [Kagen Smith] [Kirk Holt] 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
