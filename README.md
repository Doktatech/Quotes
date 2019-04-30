####Description
This is an angular application where one can add a quote then upvote or downvote it. Other users can also view the same quotes and also contribute to the voting.

####
Rewel Kinyanjui (doktatech2@gmail.com)
##Technologies used
HTML - To structure the pages
CSS - To add styling to the pages
Angular CLI version 7.3.6.
##Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

##Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.
##Known Bugs
 There is no user validation meaning users can delete other users quotes

##Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

##B-D-D
Input/Behaviour/Output
The user inputs their name,quotes and author of the quote then clicks submit.The application takes the values and pushes them to an array.The user data is stored. App displays which user submitted which quote when .User clicks "Quote Details" button.The application fetches the details component.The quote details are displayed.User clicks either Like or Dislike.The application registers the vote. If wishes to delete quote,, they can do so using the "Remove Quote" button.

##Running unit tests.
Run ng test to execute the unit tests via Karma.

##Running end-to-end tests.
Run ng e2e to execute the end-to-end tests via Protractor.
###License
MIT License

Copyright (c) [2019] [Rewel Kinyanjui]

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

