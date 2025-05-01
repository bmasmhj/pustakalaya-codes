# Setting Up Your Project with VS Code

This guide explains how to install Visual Studio Code (VS Code), create a folder, open it in VS Code, and create an `index.html` file.

## Steps

1. **Install VS Code**  
    - Download and install VS Code from the [official website](https://code.visualstudio.com/).
    - Follow the installation instructions for your operating system.

2. **Create a Folder**  
    - Navigate to the location where you want to create your project folder.
    - Create a new folder and name it (e.g., `my-project`).

3. **Open the Folder in VS Code**  
    - Launch VS Code.
    - Click on `File` > `Open Folder...`.
    - Select the folder you just created.

4. **Create an `index.html` File**  
    - In VS Code, right-click inside the folder in the Explorer panel.
    - Select `New File` and name it `index.html`.
    - Add the following basic HTML structure to the file:
      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Project</title>
      </head>
      <body>
            <h1>Welcome to My Project</h1>
      </body>
      </html>
      ```

5. **Save Your Work**  
    - Press `Ctrl + S` (Windows/Linux) or `Cmd + S` (Mac) to save the file.

    6. **Install Live Server Extension**  
        - Open the Extensions view in VS Code by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl + Shift + X` (Windows/Linux) or `Cmd + Shift + X` (Mac).  
        - Search for "Live Server" and click `Install`.  
        - Once installed, right-click on your `index.html` file and select `Open with Live Server`.  
        - Your default browser will open, displaying the result of your `index.html` file.

    7. **Enable Format on Save**  
        - Open the VS Code settings by clicking on `File` > `Preferences` > `Settings` (or `Code` > `Preferences` > `Settings` on Mac).  
        - Search for "Format On Save" in the search bar.  
        - Check the box next to `Editor: Format On Save` to enable this feature.  
        - This will automatically format your code every time you save a file.

    8. **Install Material Icon Theme**  
        - Open the Extensions view in VS Code.  
        - Search for "Material Icon Theme" and click `Install`.  
        - After installation, click on the gear icon next to the extension and select `Set File Icon Theme`.  
        - Choose "Material Icon Theme" from the list to apply the new icons.