# Pocket Notes
A react single page web application to save your notes.

## Features
### Storage
- Groups and their notes are stored in local storage.

### Group Identification
- Group names are unique.
- Id for groups are the timestamp of their creation and these ids are used as url parameter to get all the notes of that group.
- Despite Group names being unique, timestamps are used as id's to allow special characters such as '/' in group names.

## Further changes To be made
- Replace local storage with a dedicated server to store all the data in a mongodb cluster.
- Use a authentication system like a custom jwt or services like OAuth to handle manage multiple users data.

## Getting Started

To run this app locally

### Clone this Repo

```bash
git clone https://github.com/Inayath-Hussain/pocket-notes.git
```

### Install Dependencies and run on local server
```bash
cd pocket-notes
npm install
npm run dev
```
