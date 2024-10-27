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
  "another-package": "~1.2.3"   // Allows 1.2.x, but not 1.3.x
}