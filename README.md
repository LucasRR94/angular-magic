<<<<<<< HEAD
# angular-magic
test-angular
=======
# AngularMagic

This project showcases a web application built with Angular, utilizing Tailwind CSS for styling and Angular Material for UI components.

## Development Environment Setup

To run the project locally, follow these steps:

### Prerequisites

- Node.js (version 14.x or higher)
- Docker (optional, required only if using Docker for local development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-magic.git
   cd angular-magic
   ```

### Running
    ```
    docker compose build && docker compose up
    ```
    

### Adress
    ```
    http://localhost:4200/
    
    ```

### Current Status
The project is operational with the exception of the card fetching functionality. The current implementation encountered issues with making repeated requests to the server and unsubscribing when the cards list reaches its capacity.