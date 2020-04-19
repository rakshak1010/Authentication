# Authentication

Initial file setup for login/signup of user using passport.js and express. Also includes OAuth2 authentication.

## Previous Commits
The previous commits use different authentication methods such as:
1. Using Mongoose encryption
2. Hashing using md5
3. Hashing and Salting with bcrypt
4. Cookies and Sessions using passport.js

The recent HEAD points to OAuth2 Authentication from third party applications.

You can always go to a previous commit and use that particular authentication method.

## Installation

1. Clone the repository or simply download the zip file.

2. Use the package manager [npm](https://www.npmjs.com/) to install **Authentication**.


```bash
npm install
```

## Usage
Create a [.env](https://www.npmjs.com/package/dotenv) file in the root directory and add paste the following code snippet:

```bash
SECRET=SomeRandomStringToStoreYourSecret

MONGO_URI=---Mongo DB Url---

GOOGLE_CLIENT_ID=---Google Client ID---
GOOGLE_CLIENT_SECRET=---Google Client Secret---

FACEBOOK_CLIENT_ID=---Facebook Client ID---
FACEBOOK_CLIENT_SECRET=---Facebook Client Secret---

GITHUB_CLIENT_ID=---GitHub Client ID---
GITHUB_CLIENT_SECRET=---GitHub Client Secret---
```
Change the Mongo DB Url and your Client ID and Client Secret for OAuth2 authentication.  

## Running Server
```bash
npm start
```
Server starts listening at **localhost:3000**

