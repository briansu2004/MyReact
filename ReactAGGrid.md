# React AG Grid

## Keywords

- ag-grid-community
- ag-grid-react
- ag-grid-community/styles/ag-grid.css // Core grid CSS, always needed
- ag-grid-community/styles/ag-theme-alpine.css // Optional theme CSS

## Kickstart a React application with AG Grid

To kickstart a React application with AG Grid, you'll need to follow a few steps. AG Grid is a powerful data grid library for JavaScript and React, which allows you to display and manipulate large sets of data. Here's a basic guide to get you started:

1. **Set Up a React Project**:
   If you haven't already, you need to set up a React project. You can do this using Create React App or any other method of your choice. If you don't have Create React App installed, you can install it globally using npm:

   ```bash
   npm install -g create-react-app
   ```

   Then, create a new React project:

   ```bash
   npx create-react-app my-awesome-react-app

   npx create-react-app ag-grid-react-app
   ```

2. **Install AG Grid**:
   Inside your React project directory, install the AG Grid and AG Grid React packages:

   ```bash
   npm install --save ag-grid-community ag-grid-react
   ```

3. **Create a Simple Grid**:
   In your React component, import AG Grid and set up a simple grid. Create a new component or modify the `App.js` file as follows:

   ```jsx
   import React from 'react';
   import { AgGridReact } from 'ag-grid-react';
   import 'ag-grid-community/styles/ag-grid.css';
   import 'ag-grid-community/styles/ag-theme-alpine.css';

   const App = () => {
     const rowData = [
       { make: 'Toyota', model: 'Celica', price: 35000 },
       { make: 'Ford', model: 'Mondeo', price: 32000 },
       { make: 'Porsche', model: 'Boxster', price: 72000 },
     ];

     const columnDefs = [
       { headerName: 'Make', field: 'make' },
       { headerName: 'Model', field: 'model' },
       { headerName: 'Price', field: 'price' },
     ];

     return (
       <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
         <AgGridReact rowData={rowData} columnDefs={columnDefs} />
       </div>
     );
   };

   export default App;
   ```

4. **Run Your Application**:
   Start your React application:

   ```bash
   npm start
   ```

   This will run your application, and you should see a basic AG Grid with the sample data.

5. **Customize and Explore**:
   AG Grid provides extensive options for customization and features. You can explore their documentation for advanced configurations, themes, and features: [AG Grid Documentation](https://www.ag-grid.com/documentation/react/)

This is a basic setup to get you started with AG Grid in a React application. You can build upon this foundation by adding more advanced features and customizing the grid according to your requirements.
