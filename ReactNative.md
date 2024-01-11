# React Native

## React Native CLI

React Native CLI (Command Line Interface) is a tool that allows developers to create, build, and manage React Native projects from the command line. It provides commands for initializing a new project, running and debugging the application, bundling the JavaScript code, and handling various aspects of development.

Here are some common React Native CLI commands:

1. **Creating a New Project:**
   To create a new React Native project, you can use the following command:

   ```bash
   npx react-native init YourProjectName

   npx react-native init MyPhoneAlbumNode18
   ```

   This will initialize a new React Native project with the specified name.

2. **Running the Project:**
   To run your React Native project, navigate to the project directory and use:

   ```bash
   npx react-native run-android
   ```

   or

   ```bash
   npx react-native run-ios
   ```

   This will start your app on either an Android or iOS emulator or device.

3. **Building the Project:**
   To build the JavaScript bundle for your React Native project, you can use:

   ```bash
   npx react-native bundle
   ```

   This command bundles your JavaScript code for production.

4. **Debugging:**
   React Native CLI also provides commands for debugging. For example, you can use:

   ```bash
   npx react-native log-android
   ```

   or

   ```bash
   npx react-native log-ios
   ```

   to view logs specific to Android or iOS platforms.

5. **Other Useful Commands:**
   - `npx react-native start`: Starts the Metro bundler.
   - `npx react-native clean`: Clears the build directories.

Remember to check the React Native documentation for the most up-to-date information and additional commands: [React Native CLI](https://reactnative.dev/docs/0.64/getting-started#the-react-native-cli).
