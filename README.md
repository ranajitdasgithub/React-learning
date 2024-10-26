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