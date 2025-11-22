# My React Native App

This project is a React Native application that utilizes Firebase for authentication and Firestore for data storage. It includes a simple navigation structure and customizable UI components.

## Features

- User authentication with Firebase
- Firestore integration for data management
- Customizable button component
- Navigation setup using React Navigation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- React Native CLI installed
- Firebase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-react-native-app.git
   ```

2. Navigate to the project directory:
   ```
   cd my-react-native-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add a new web app to your Firebase project and copy the Firebase configuration.
3. Initialize Firestore in your Firebase project.
4. Update the `src/services/firebase.ts` file with your Firebase configuration.

### Running the App

To run the app on an emulator or physical device, use the following command:
```
npm run android
```
or
```
npm run ios
```

### Usage

- The app includes a login screen for user authentication.
- After logging in, users will be directed to the home screen.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you'd like to see!

## License

This project is licensed under the MIT License.