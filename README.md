## Project Boilerplate

This is a very basic boilerplate project for future front-end javascript projects.

We will iterate on this configuration as we are introduced to fantastic dev tools like [webpack](https://webpack.js.org/) and [babel](https://babeljs.io/).

For the time being, this provides you with a basic eslint setup, as well as utilizes the [serve](https://www.npmjs.com/package/serve) package.

## Getting started
```
$ npm install
$ npm run start
```

Navigate to [localhost:5000](localhost:5000) in your browser and start writing some code!

Play around with different [eslint](https://eslint.org/) setups to find some rules you like.

For example:

If you like using semi colons in your javascript, and want to make sure you don't forget them, add this rule to your `.eslintrc` file inside of the "rules" object:
```javascript
"semi": ["error", "always"]
```

Or maybe you prefer not using semi colons:
```javascript
"semi": ["error", "never"]
```

There are a ton of great rules out there that can help improve the consistency of your code style, as well as flag unexpected errors.

If you don't already have the VSCode Eslint Extension installed, definitely consider doing that as it provides inline warnings / errors.


### Homework
The homework this weekend is to build a game using constructors.

The game should use constructors to create new instances that interact with each other.

[See Spiderman vs Ultron](https://github.com/WinstonTTS/notes/blob/master/8-2/spidermanvsultron.js)