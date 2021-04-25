<h2 style="font-weight: regular"><img src="./src/images/logo-dark.png" alt="two symmetrical arrows symbolizing equal exchange" height="30" width="30" style="margin-bottom: -9px" > e<span style="font-weight: bold">xc</span>hange<span style="font-weight: bold">r</span>ate</h2>

_by Jeremy Banka_

## Technologies Used

- 📈 exchangerate-api.com
- 💅 SASS ➡️ CSS3 📄 HTML5
- ▶️ ES6 🛠 Airbnb ESLint (thanks to VS Code ext. ESLint by Dirk Baeumer)
- 💲 jquery 3.6.0
- 📦 Webpack 5 for bundling my js modules.
- 👨🏻‍🎨 Adobe Illustrator (comps/planning)
- 🅰️ Fonts and Icons by me using Georg Seifert's _superb_ 💚[Glyphs.app](https://glyphsapp.com)💚

## Description

This is a minimal webapp that uses a RESTful API to retrieve up-to-date info about currency exchange rates. You might use this to track the change in a specific rate over time, or just to explore what currencies there are in the world and how many you could purchase for 1 USD.

#### 🌐 **International**

Supports all listed currencies on exchangerate-api.com.

#### 📜 **Persistent**

Keeps a save in local storage (you can clear this out by clicking the 'x' button)

#### 🎲 **Helpfully Random**

Autofills random currencies and quantity on reload for easy testing.

#### 🦺 **Error-Avoidant**

For queries of X -> Y, entering "0" or "" in the quantity field gets you the going rate of 1 X in Y.

#### 🤑 **Has a Sweet-ass Green UI**

(represents money... 💸 💸 💸 )

#### 🤓 **Educational**

Tells you what all those weird three-letter symbols mean.

## Setup/Installation Requirements

#### First Things First

- Clone this repo: `$ git clone https://github.com/jeremybanka/xcr`
- Get things installed: `$ npm i`
- Get things built: `$ npm run start`
- This should prompt your browser to open the project on 8080. It's actually pointed at the dist folder, and will update live.

#### ESLint/Prettier Tooling

- Use VS Code.
- Install VS Code extension "ESLint" by Dirk Baeumer.
- Install VS Code extension "Prettier"
- Ensure that your VS Code settings.json has the following properties set:
  ```
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```
- Now, my meticulously selected formatting preferences will be applied to files in this repo any time you hit save!

## Known Bugs

- Not really sure what happens when the screen fills up with entries. Probably bad. Let me know!
- Not as easy as it should be to see the name of a currency you previous queried is if you forget it, and can just see the symbol. The data's there, just gotta show it.

## License

This software is licensed under GPL 3.0.

## Contact Information

hello at jeremybanka dot com
