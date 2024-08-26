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
![Screenshot 2024-08-14 161707](https://github.com/user-attachments/assets/ea9fa549-1a85-4fa8-b690-9bd647a61130)

- **GET /api/users**
  - **Description**: Returns a JSON array of all users.
  - **Response**:
  ![Screenshot 2024-08-14 161726](https://github.com/user-attachments/assets/339df68f-a06e-47f8-937d-ad6836cdb72e)


- **GET /api/users/:id**
  - **Description**: Returns details of a user with the specified ID.
  - **Response**:
   ![Screenshot 2024-08-14 161920](https://github.com/user-attachments/assets/053e6028-ac9b-4ccf-b084-bb51c689f955)
## *Project Structure*

- **index.js**: *Main server file where routes and server configuration are defined.*
- **MOCK_DATA.json**: *JSON file containing user data.*
- **package.json**: *Project metadata and dependencies.*
- **package-lock.json**: *Dependency versions lock file.*


