**Name:** AKASH KUMAR  
**Company:** CODTECH IT SOLUTIONS  
**ID:** CT04DS6313  
**Domain:** Backend  
**Duration:** August to September 2024  
**Mentor:** Muzammil Ahmed  


## *Overview of the Project*

### *Project*: *User Data REST API*

### *Objective*  
The objective of this project is to create a REST API using Express.js that serves user data from a `MOCK_DATA.json` file. The API allows for retrieving user data in both HTML and JSON formats, providing a simple interface for listing users and accessing individual user details by ID.

### *Key Activities*  
- **API Development**: *Creating endpoints to serve user data.*
- **Data Handling**: *Loading and serving data from a JSON file.*
- **Server Setup**: *Configuring and running the server using Express.js.*

### *Technologies Used*  
- **Node.js**: *JavaScript runtime for server-side development.*
- **Express.js**: *Web framework for building the API.*
- **MOCK_DATA.json**: *JSON file containing sample user data.*

## *Installation*


1. **Install Dependencies:**:
   npm install
2. **Start the Server:**:
   npm start
   The server will start on http://localhost:8000.

   ## *API Endpoints*

- **GET /users**
  - **Description**: Returns an HTML list of user first names.
  - **Response**: HTML formatted list.
![Screenshot 2024-08-26 194602](https://github.com/user-attachments/assets/21c72340-07d3-4611-aaa9-ca9f67fd9cea)


- **GET /api/users**
  - **Description**: Returns a JSON array of all users.
  - **Response**:
 ![Screenshot 2024-08-26 194653](https://github.com/user-attachments/assets/ca55a559-167a-4113-a962-6823be4e7441)


- **GET /api/users/:id**
  - **Description**: Returns details of a user with the specified ID.
  - **Response**:
  ![Screenshot 2024-08-26 194707](https://github.com/user-attachments/assets/a79e0687-53b7-402c-931a-4eec579a29a6)
## *Project Structure*

- **index.js**: *Main server file where routes and server configuration are defined.*
- **MOCK_DATA.json**: *JSON file containing user data.*
- **package.json**: *Project metadata and dependencies.*
- **package-lock.json**: *Dependency versions lock file.*


