# Class 1 - Inception

## **Notes**

### 1. What is CDN?

A **CDN**, or **Content Delivery Network**, in the context of React (or web development in general), is a network of servers distributed across various locations that deliver web content to users based on their geographic location.

#### **Key Points:**

1. **Faster Load Times**: CDNs reduce latency by serving content from a server closer to the user.
2. **Static Asset Delivery**: CDNs are often used to serve static assets like JavaScript libraries, CSS files, images, and other resources.
3. **Caching**: CDNs cache content, which allows for quicker access to frequently requested resources.
4. **Scalability**: Using a CDN can help your application handle more traffic by distributing the load across multiple servers.
5. **Reliability**: CDNs improve application reliability by providing redundancy; if one server goes down, others can still serve the content.

#### **Example Usage in React:**

To include the React library using a CDN, you can add the following script tags to your HTML file:

```html
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
```
## Note: ## 
The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript
files from different origin than the hosting web page. This
allows the script to access resources from the server hosting
the script, such as making HTTP requests or accessing data.

### 2. What is Cross-origin?

**Cross-Origin** refers to requests made from one origin (domain, protocol, or port) to a different origin.

## Key Points

1. **Same-Origin Policy**: A security measure that restricts how documents or scripts loaded from one origin can interact with resources from another origin.

2. **Cross-Origin Requests**: Occur when a web application requests resources from a different origin (e.g., `https://example.com` requesting from `https://api.example.org`).

3. **CORS (Cross-Origin Resource Sharing)**: A protocol that allows servers to specify who can access their resources by adding specific HTTP headers.
   - **Example Headers**:
     - `Access-Control-Allow-Origin`: Specifies allowed origins.
     - `Access-Control-Allow-Methods`: Specifies allowed HTTP methods.

4. **Use Cases**: Common in fetching data from APIs, loading resources from CDNs, etc.

5. **Security Implications**: Cross-origin requests can pose security risks (e.g., CSRF, XSS), requiring proper CORS implementation.

## Example Scenario

A JavaScript application on `https://myapp.com` trying to access an API at `https://api.example.com` will be blocked unless the API allows it with CORS headers.

---

# Class 2 - Inginiting our App

### 3. Difference between git and github?

- Git: A version control system used for tracking changes in code locally. It allows you to manage source code history, create branches, and collaborate on projects.

- GitHub: A web-based platform that hosts Git repositories online. It facilitates collaboration by providing features like issue tracking, pull requests, and project management tools.

**Key Difference**
- Git is the tool for version control; GitHub is a platform that uses Git for sharing and collaborating on code. You can use Git independently of GitHub, but GitHub relies on Git.

### 4. What is NPM?

NPM (Node Package Manager) is widely used in JavaScript and Node.js development for several key reasons:

Dependency Management: NPM allows developers to easily install, update, and manage libraries and packages that their projects depend on. This simplifies the process of integrating third-party code.

Package Registry: NPM hosts a vast registry of open-source packages, making it easy to find and use existing solutions instead of building everything from scratch. This fosters code reuse and accelerates development.

Version Control: NPM helps manage package versions, ensuring that projects can specify which versions of dependencies they require. This prevents issues caused by breaking changes in libraries.

Scripts and Automation: NPM enables developers to define scripts for common tasks (e.g., testing, building, starting the application) in the package.json file. This standardizes workflows and automates repetitive tasks.

Community and Ecosystem: NPM has a large and active community, providing a wealth of resources, tutorials, and plugins. This ecosystem enhances collaboration and support among developers.

Local and Global Installations: NPM allows packages to be installed locally (for a specific project) or globally (available system-wide), providing flexibility in how tools and libraries are used.

Development Tools: Many development tools and frameworks, such as React, Angular, and Express, are distributed via NPM, making it a crucial part of modern web development.

Ease of Use: NPM provides a straightforward command-line interface, making it easy to manage packages without needing complex configuration.

In summary, NPM is essential for managing dependencies, leveraging community resources, automating tasks, and streamlining the development process in JavaScript and Node.js projects.

### 5. Why we use package.json file?
1. Introduction:
"package.json is a fundamental file used in Node.js and JavaScript projects that serves multiple key functions."

2. Dependency Management:
"It lists all the project's dependencies, allowing developers to easily install them with a single command using npm. This ensures that everyone working on the project has the same libraries and versions."

3. Project Metadata:
"The file contains important metadata about the project, such as its name, version, description, author, and license. This information is useful for documentation and for others who may work with or use the project."

4. Scripts:
"package.json allows developers to define scripts for common tasks, such as building, testing, or starting the application. This makes it easier to automate repetitive tasks and standardize workflows across the team."

5. Version Control:
"It specifies the versions of dependencies, which helps maintain consistency and avoid issues caused by breaking changes in libraries. This is crucial for ensuring that the application behaves the same way in different environments."

6. Configuration:
"The file can also include configuration settings for various tools and libraries used in the project, centralizing management and making it easier to adjust settings."

7. Publishing:
"Finally, if you're developing a package to share, package.json is essential for publishing to the npm registry, as it provides all necessary information about the package."

8. Conclusion:
"In summary, package.json is vital for managing dependencies, providing project metadata, automating tasks, ensuring version control, and facilitating package sharing, making it an indispensable part of modern JavaScript development."


