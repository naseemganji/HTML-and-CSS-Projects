# File: /file_organizer_app/file_organizer_app/README.md

# File Organizer Application

## Overview
The File Organizer Application is designed to help users organize their files into categorized folders based on file types. It provides a user-friendly GUI built with Tkinter and utilizes various functions to categorize and move files efficiently.

## Project Structure
```
file_organizer_app
├── src
│   ├── gui
│   │   └── main_window.py
│   ├── functions
│   │   ├── file_categorizer.py
│   │   ├── file_organizer.py
│   │   └── utils.py
│   ├── database
│   │   ├── db_manager.py
│   │   └── schema.sql
│   └── app.py
├── requirements.txt
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd file_organizer_app
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage
1. Run the application:
   ```
   python src/app.py
   ```
2. Select the source folder containing the files you want to organize.
3. Choose the destination folder where organized files will be stored.
4. Click on "Start Organization" to begin the file organization process.

## Features
- Categorizes files into predefined categories (Images, Documents, Videos, etc.).
- Handles duplicate file names by renaming them.
- Provides a log of actions taken during the organization process.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.