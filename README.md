# CatTinder test project
To run the following project you'll need to have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [React Native](https://reactnative.dev/docs/environment-setup)

## Warning!
Unfortunately i don't have a personal macBook to be able to test the app under iOS, and because of that, i apologise in advance.

## Getting started
To run the app run the following commands:

- yarn install
- yarn start
- press "a" to run android build

## Run the app, alternatives
- adb install app-release.apk

or
- yarn start
and
- npx react-native run-android

# Notes
I understand that this project is far from perfect, it was done in such a small timeframe that corners had to be cut, but if i had more time to work on it, this is what i would do:

- Redo the <Profile> component since i  don't like the behaviour of the swipe library i used because it's buggy, and probably would work in a different way to render the profile cards one by one and picking them one by one from the profiles pool array.
- Tidy the code up, there is some functions that could be segregated into a utils file
- Add code to lazy fetch more cats from the API whenever we get to a specific threshold
- try to have a nice code coverage with unit testing, around 90%
- Would add async storage for persistance of the favourite cats
- would test with more devices because of screen sizes behaviour (used google Pixel8 pro for the development)