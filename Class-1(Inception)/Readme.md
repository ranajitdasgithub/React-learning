🚀 Notes:

- package.json is a configuration of our npm.
- npm take care all the depecendency and its version

🚀 Note:

- Before going to production out codes needs to be clean and short, thats why we make those code as bundlers
- bundlers make those code as a package to send those in production
- parcel will ignite of our app
- npm init (I have to add name, license, version etc)
- npm init -y (it make all this thing yes)
- npm install -D parcel (D is used for developer)

🚀 Notes:

- "devDependencies": {
  "parcel": "^2.12.0"
  } we use "^" (caret) for minor changes update, npm will automatically install this minor changes
- Use ^ (caret) when you want to allow more flexibility with minor version updates.
- Use ~ (tilde) when you want to restrict updates to patch versions only.
  "devDependencies": {
  "example-package": "^1.2.3", // Allows 1.2.x and 1.x.x, but not 2.x.x
  "another-package": "~1.2.3" // Allows 1.2.x, but not 1.3.x
  }

🚀 Notes:

- package-lock.json file track all the version of the dependency
- When I install parcel in node_modules there is lot of file also, because parcel have lot of dependency and their dependency has lot. so that all the dependency file exist in node_modules

* This is known as Transitive dependency \*
  Node_modules is pack of all dependency

- ⭐️ npx parcel index.html ⭐️
- npm i react react-dom
- add 'main':'index.js'

🚀 Note:

# Parcel

- Dev build
- Local Server
- HMR (Hot module replacement) If code change and saved browser automatically refresh
- Parcel is using a file watching algorithm using C++
- Caching - faster build
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code spliting
- Differential bundling(parcel take care for all browser as well as older browser)
- Error handling(Better way to display error in console)
- give support for HTTPs support
- Tree shaking (remove unnecessary code)

🚀 Parcel production build notes:
- remove the "main": "App.js", from package.json as for this build we directly provide the entry point file
- ⭐️ npx parcel build index.html ⭐️

