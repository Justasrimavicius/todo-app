# todo-app

this is my one month web development project. This project won't be me just coding along a yotube tutorial - everything done here will be me writing my own lines of code(even though the idea of the app and MVP was given by theodinproject.com)


MVP(minimum viable product):
1) The app has an interface, where you can create projects.
2) Inside those projects you can add todos - you should be able to update its date, set an end date, delete it.

Nice to have:
1) CSS visuals.
2) Additional functionality(will probably think of some while doing the project).

Steps(documentation on what i am doing, how long it took and what my next steps are):
First commit   1) Environment setup(webpack and all of the magic of it). Took some time - had to read some of the documentation again.
Second commit  2) Figuring out the js file imports and exports, creating multiple js files and thinking of the funcionality that they will have(try to follow SOLID principles).(MIGHT NEED A DOM UPDATE MODULE)
third commit   3) Creating the CSS file and layering everything out in the index.js file(later on will put everything in its own place).
fourth commit  4) ProjectManipulationModule functionality - project creation and project deletion(only inside of an array), giving the signal to DOMUpdateModule for DOM updating.(PROJECT DELETION LATER ON - CANT DO IT NOW WITHOUT DOM UPDATES)
fifth commit   5) Updating DOMUpdateModule.js to push in a new element, when an array from ProjectManipulationModule gets updated(could not find an easy way to listen to array/function return value changes, so just added an event listener on the project creation button in index.js and called the modules after that)
sixth commit   6) Updating DOMUpdateModule.js to load the todos of a selected project(not sure if works perfectly - need to create todo creation functionality to test it)
seventh commit 7) fixed last commits work(still not sure if it works - need to create todo creation functionality to test it)