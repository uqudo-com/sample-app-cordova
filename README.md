# Uqudo Cordova Plugin Demo Sample App

This project is a sample Cordova application that demonstrates the usage of the Uqudo Cordova Plugin for passport onboarding with facial recognition.

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

- Cordova installed on your development machine
- Knowledge of JavaScript programming
- Access to the Uqudo SDK and an access token

## Setup and Installation

1. Create a new Cordova project or use an existing one.

2. Add the Uqudo Cordova Plugin to your project.

    ```sh
    cordova plugin add uqudosdk-cordova
    ```

3. Open your project's JavaScript file, typically located in the `www` directory.

4. Include the following code snippet in your JavaScript file. Replace the `ACCESS_TOKEN_HERE` placeholder with your actual access token.

## Running the App

1. Connect a physical device or use an emulator.

2. Build and run the Cordova application using the following command:

    ```sh
    cordova run android   # For Android
    cordova run ios       # For iOS
    ```

## Features

- Passport onboarding
- Facial recognition
- Handling enrollment results

## How It Works

1. The `cordova.plugins.UqudoIdPlugin.init()` method is called within the `onDeviceReady()` function to initialize the Uqudo Cordova Plugin.

2. When the "Start Passport Onboarding" action is triggered, the `cordova.plugins.UqudoIdPlugin.enroll()` method is invoked to begin the onboarding process.

3. The `traceCallback()`, `success()`, and `failure()` functions handle trace events, success responses, and error handling, respectively.

## Notes

- Customize the project according to your needs and refer to the [official Uqudo SDK documentation](http://docs.uqudo.com/docs/) for more details and configurations.
- Ensure that you have added the Uqudo Cordova Plugin to your project using `cordova plugin add uqudosdk-cordova`.
- Replace the `ACCESS_TOKEN_HERE` placeholder with your actual access token for the Uqudo SDK.
- Make sure to handle errors and edge cases as needed for your specific use case.
