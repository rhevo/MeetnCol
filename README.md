# MeetnCol

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MeetnCol is a collaborative platform designed to facilitate communication, project management, and teamwork, enhancing team productivity and cohesion.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user login and registration.
- **Project Management:** Create and manage projects.
- **Task Assignment:** Assign tasks to team members.
- **Real-time Chat:** Communicate with team members in real-time.
- **Notifications:** Stay updated with real-time notifications.

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/meetncol.git
    cd meetncol
    ```

2. Create a virtual environment and activate it:
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Apply database migrations:
    ```sh
    python manage.py migrate
    ```

5. Create a superuser for the admin panel:
    ```sh
    python manage.py createsuperuser
    ```

6. Start the development server:
    ```sh
    python manage.py runserver
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd meetncol_frontend
    ```

2. Install the required packages:
    ```sh
    npm install
    ```

3. Build the frontend:
    ```sh
    npm run build
    ```

4. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:8000` to access the backend.
2. Open another tab and go to `http://localhost:3000` to access the frontend.
3. Register a new account or log in using the superuser account created during the installation.
4. Create projects, assign tasks, and start collaborating!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
