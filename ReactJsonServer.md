# React + JSON Server

## Keywords

## Kickstart a React application with JSON Server

To kickstart a React project with a JSON server for handling data, you'll want to follow these steps:

1. **Set up a React Application**:

   First, you need to create a React application. You can do this using Create React App, a popular tool for bootstrapping React applications. If you haven't installed it yet, you can do so with npm or yarn:

   ```bash
   npx create-react-app my-json-server-app
   # or
   yarn create react-app my-json-server-app
   ```

   Replace `my-json-server-app` with your project name.

2. **Create a JSON Server**:

   You can set up a simple JSON server by creating a `db.json` file in your project's root directory. This file will serve as your database. Here's an example `db.json` with some initial data:

   ```json
   {
     "items": [
       { "id": 1, "name": "Item 1" },
       { "id": 2, "name": "Item 2" }
     ]
   }
   ```

3. **Install JSON Server**:

   To create a simple API for your data, you can use JSON Server. Install it globally with npm or yarn:

   ```bash
   npm install -g json-server
   # or
   yarn global add json-server
   ```

4. **Start the JSON Server**:

   In your project's root directory, start the JSON Server and point it to your `db.json` file:

   ```bash
   json-server --watch db.json --port 3001
   ```

   This will start a server at `http://localhost:3001` with your data.

5. **Fetch Data in Your React App**:

   In your React app, you can fetch data from the JSON server using JavaScript's `fetch` or a library like Axios. For example, you can create a component to fetch and display the items:

   ```jsx
   import React, { useEffect, useState } from 'react';

   function App() {
     const [items, setItems] = useState([]);

     useEffect(() => {
       fetch('http://localhost:3001/items')
         .then((response) => response.json())
         .then((data) => setItems(data));
     }, []);

     return (
       <div>
         <h1>Items</h1>
         <ul>
           {items.map((item) => (
             <li key={item.id}>{item.name}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

6. **Run Your React App**:

   Start your React app with the following command:

   ```bash
   npm start
   # or
   yarn start
   ```

   Your React app should be accessible at `http://localhost:3000`, and it will fetch data from the JSON server at `http://localhost:3001`.

Now, you have a basic React application connected to a JSON server. You can further expand on this by implementing CRUD operations, routing, and additional features as needed for your project.
