# Care Circle

Care Circle is a project I created as my Capstone for Ada Developer's Academy. The purpose of the project is to let your community know how they can support you during times of need - after a surgery, childbirth, or illness. 

Care Circle reduces the mental load for the user to remember who has offered to help and with what, and members of the user's circle can volunteer for tasks without needing to contact the user directly.

## Feature Set
### User

The main user can create an account, add tasks or action items, and invite friends/family to their Care Circle

### Circle Member
Members who have been invited to join a circle can view and sign up for items that the main user has posted. 

## Dependencies and Installation
Care Circle relies on: 
- Node.js
- Express.js
- Nodemon
- React
- MongoDB

Additionally, users will need a MongoDb Atlas account, and setup a connection string in their `.env` file. 

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install dependencies for Care Circle.

```bash
npm install
```
### Setup React App
Create a client folder and run `npx create-react-app`, then `npm start` to start the server. Visit `localhost:3000` to view in a browser.  

## Future Improvements
- Calendar view of upcoming tasks
- Allow guests to create their own account and manage tasks they have signed up for
- Email reminders for upcoming tasks
- Send notes of gratitude
