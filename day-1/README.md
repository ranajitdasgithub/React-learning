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
