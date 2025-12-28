# My React

- [My React Udemy Course](#my-react-udemy-course)
- [My React Projects](#my-react-projects)
  - [Project 7](#project-7)
  - [Project 6](#project-6)
  - [Project 5](#project-5)
  - [Project 4](#project-4)
  - [Project 3](#project-3)
  - [Project 2](#project-2)
  - [Project 1](#project-1)
- [My React Versions](#my-react-versions)
- [Misc](#misc)

## My React Udemy Course

- [React Rapid: Rapidstart Your Responsive App](https://www.udemy.com/course/react-rapidstart-creating-an-responsive-react-app-in-1-hour/)

<a href="https://www.udemy.com/course/react-rapidstart-creating-an-responsive-react-app-in-1-hour/">![React Rapid: Rapidstart Your Responsive App](image/course_logo_react.jpg)</a>

Hot items:

- AG Grid
- Json Server
- State Management
- Routing
- Component Lifecycle
- Forms and Forms Validation
- Authentication
- API Integration
- Unit Testing
- Styling
- Error Handing and Debugging
- Optimizing Performance
- Deployment
- Accessibility
- Husky

## My React Projects

### Project 7

<!-- Lizhong - AI Project 2 - Secure LLM + MCP Automation for Sales Forecasting & Inventory Optimization -->

- Built an AI-driven decision-support system using LLM + Model Context Protocol (MCP) to deliver automated insights on sales forecasting and inventory health.
- Developed secure MCP tools and APIs using LangChain, Python, FastAPI, and PostgreSQL to:
  - Retrieve and aggregate historical sales data
  - Perform forecast reasoning
  - Compare projected demand against live inventory
  - Generate real-time recommendations
- Enforced secure tool invocation and context-aware authorization, preventing unauthorized data access by the LLM.
- Implemented data protection mechanisms including:
  - Schema-level access controls
  - Sensitive field masking and NER-based redaction
  - Input/output validation to reduce LLM hallucination and data leakage risks
- Added observability and monitoring hooks to track AI tool usage, anomalous queries, and reasoning behavior, enabling AI security posture assessment.
- Delivered a clean, intuitive UI enabling interactive, LLM-powered analytics while maintaining secure API boundaries and audit-ready logging.

### Project 6

<!-- Lizhong - AI Project 1 - Secure Enterprise RAG + LLM Conversational Platform -->

- Designed and delivered a privacy-preserving, business-facing GenAI chatbot integrating enterprise data with LLM capabilities, acting as a virtual sales/customer representative while enforcing strict data isolation and access control.
- Architected an end-to-end secure RAG pipeline using Python and FastAPI, including embedding generation, vector indexing, similarity search, and controlled response generation, with safeguards against data leakage and prompt injection.
- Implemented AI security controls: Input validation and prompt sanitization; Context scoping and role-based access control (RBAC); Output filtering to prevent sensitive data exposure
- Evaluated vector databases (FAISS, Pinecone, Weaviate) and selected Qdrant Cloud, implementing namespace isolation, tenant-level security, and restricted embedding access.
- Integrated Qwen Cloud LLM with secure inference APIs, rate limiting, and policy-based guardrails to mitigate jailbreaking and abuse attempts.
- Built a modern chat UI using React, incorporating secure session handling and context expiration.
- Successfully demonstrated the ability to blend proprietary enterprise data with LLM outputs while maintaining data privacy, auditability, and industry-grade security posture.

### Project 5

<!-- Hatfield -->

Built a web application to manage Dask Kubernetes Clusters and deployed it to Microsoft Azure, using a Golang REST API on the backend and Angular on the frontend.

- Backend (Golang): Developed a robust backend using Golang and the Gin framework to create lightweight, high-performance REST APIs for managing Dask Kubernetes Clusters. The APIs supported dynamic provisioning, scaling, monitoring, and deletion of clusters on Azure Kubernetes Service (AKS).
  - Implemented cluster lifecycle operations, including creation, scaling, and teardown.
  - Used GORM to persist cluster state and configuration data.
  - Integrated Swaggo for automated API documentation to improve maintainability and developer onboarding.
- Testing & Mocking: Applied Gomock for unit testing, creating mocked interfaces to validate cluster management logic and ensure high code quality, reliability, and test coverage.
- Frontend (Angular): Built a responsive and modular user interface using Angular and TypeScript, following a component-based architecture. Leveraged Angular Services and RxJS Observables to manage state and handle asynchronous operations. Integrated Angular HTTPClient for secure communication with backend APIs and used Angular Material to deliver an intuitive, enterprise-grade UI. The frontend enabled users to visualize and manage Kubernetes clusters with near real-time updates on cluster status and resource utilization.
- Containerization & Deployment: Containerized both backend APIs and frontend applications using Docker, stored images in Azure Container Registry (ACR), and deployed them to Azure Kubernetes Service (AKS) for scalable, production-ready workloads.
- Networking: Exposed the Golang REST API via a public IP and Kubernetes services to enable secure external access to the application.

### Project 4

<!-- Sunlife -->

Built the Canadian Dental Care Plan enrollment web app for Health Canada

- Backend: Developed a full-stack web application using Java as the backend to handle RESTful API services, implementing business logic and integrating with the database layer using JPA and Hibernate for seamless data management. Utilized Spring Security to implement secure authentication and authorization mechanisms.
- On the frontend, utilized React to build responsive and dynamic user interfaces, incorporating modern features such as React Hooks and Context API to manage state effectively. Integrated Axios for API communication and Material-UI to deliver a clean, user-friendly design. Ensured code quality and scalability by adhering to best practices in component-based development, and conducted comprehensive unit testing using JUnit for the backend and Jest for the frontend.

### Project 3

<!-- CRA -->

<!-- - Successfully migrated UI components to React, addressing accessibility issues and ensuring compatibility across various devices.
- Utilized Jest and React Testing Library for comprehensive unit testing. -->

Modernized a legacy Java Struts project to React to enhance user experience, accessibility, and responsiveness.

- Migration to React: Spearheaded the transformation of an outdated Java Struts project's UI to React, leveraging modern web development practices and enhancing overall performance and maintainability.

- Accessibility Enhancement: Implemented accessibility best practices during the conversion process, ensuring compliance with WCAG guidelines and improving usability for users with disabilities.

- Responsive Design: Engineered responsive layouts and interfaces, optimizing the application for seamless functionality across desktop and mobile devices, thereby expanding the reach and usability of the platform.

- Unit Testing: Utilized Jest and React Testing Library to develop and execute thorough unit tests, ensuring code quality, reliability, and robustness of the React components.

### Project 2

<!-- Telus - CASA -->

Developed and maintained a complex React application utilized by Call Center agents, ensuring seamless operation and enhanced user experience.

- Updated front-end web components to align with backend API changes, facilitating smooth integration and efficient communication between the front-end and backend systems.
- Implemented comprehensive unit tests using Jest and React Testing Library, resulting in a significant increase in code reliability and a reduction in bug occurrences by X%.
- Designed and built customized reusable UI components to improve development efficiency and consistency across the application, resulting in a X% reduction in development time for new features.
- Created Storybook documentation for UI components, enabling rapid prototyping, collaboration among team members, and ensuring consistency in UI design and functionality.
- Collaborated closely with cross-functional teams including UX/UI designers, backend developers, and QA engineers to deliver high-quality solutions within project timelines.
- Actively participated in code reviews, providing constructive feedback and ensuring adherence to best practices and coding standards.
- Mentored junior developers, sharing best practices and fostering a culture of continuous learning and improvement within the team.

### Project 1

<!-- CBSA -->

- Developed a Full Stack web app with React and deploed to AWS

  - Built a new web application with React, TypeScript, Material UI, Bootstrap, Router, i18n, axios, formik, lodash and S3 on the front-end, Node.js JavaScript, AWS Lambda functions, Amazon API Gateway, Aurora PostgreSQL on the back end.
  - Created CI/CD pipelines for different projects with Azure DevOps and AWS CloudFormation, CloudBuild, CodeCommit, CodePipeline.

- Created a Full Stack web app with Java and React for a large telecommunication client
  - Designed, created and updated the Swagger file for the REST APIs.
  - Implement the API endpoints with Python FastAPI framework.
  - Managed the Python libraries and packages with pip and requirement file.
  - Created the test cases and automated the unit tests and integration tests.
  - Containerize REST APIs with Docker and uploaded to the artifact repository.
  - Deployed to OpenShift and GCP with Jenkins pipeline.
  - Created front-end app with React, Material UI, and Bootstrap.

## My React Versions

- v15
- v16
- v17
- v18

## Misc

[Full Stack with React and Spring Boot](FullStackWithReactJavaSpringBoot.md)

[React AG Grid](ReactAGGrid.md)

[React Context API](ReactContextAPI.md)

[Misc](ReactMisc.md)
