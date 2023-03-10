# Care Circle

Care Circle is a project I created as my Capstone for Ada Developer's Academy. The purpose of the project is to let your community know how they can support you during times of need - after a surgery, childbirth, or illness. 

Care Circle reduces the mental load for the user to remember who has offered to help and with what, and members of the user's circle can volunteer for tasks without needing to contact the user directly.

## Feature Set
### User

The main user can create an account, add tasks or action items, and invite friends/family to their Care Circle

<img width="1430" alt="Screenshot 2023-02-14 at 5 04 19 PM" src="https://user-images.githubusercontent.com/95459886/218899391-9b2981a6-fde8-4e08-aa68-8918af070311.png">

### Circle Member
Members who have been invited to join a circle can view and sign up for items that the main user has posted. 

<img width="1429" alt="Screenshot 2023-02-14 at 5 04 51 PM" src="https://user-images.githubusercontent.com/95459886/218899499-df5e87ca-f20b-4c91-becd-33ff4b0f3700.png">


## Dependencies and Installation
Care Circle relies on: 
- Node.js
- Express.js
- Nodemon
- React
- MongoDB

### To Run The App Locally
Use the package manager [npm](https://pip.pypa.io/en/stable/) to install dependencies for Care Circle.

```bash
npm run install-dependencies
```
Additionally, users will need a MongoDb Atlas account, and setup values for `MONGO_URI`, `NOVE_ENV`, and `JWT_SECRET` in their `.env` file. 

```bash
npm start
```
#### Setup React App

Create a client folder and run `npx create-react-app`, then `npm start` to start the server. Visit `localhost:3000` to view in a browser.  

## Future Improvements
- Calendar view of upcoming tasks
- Allow guests to create their own account and manage tasks they have signed up for
- Email reminders for upcoming tasks
- Send notes of gratitude
