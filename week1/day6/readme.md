# 📄 Simple HTML Multi-Page Website

This is a basic HTML website consisting of **four linked pages**:

- `index.html` – Home Page
- `about.html` – About Page
- `contact.html` – Contact Page
- `services.html` – Services Page

Each page includes a simple navigation menu and relevant content.

## 📁 Project File Structure

your-project-folder/ 
    ├── index.html # Home page 
    ├── about.html # About page 
    ├── contact.html # Contact page 
    └── services.html # Services page

## 🧭 Navigation Menu

Each page has a common navigation section like this:

<div>
  <a style="text-decoration: none;" href="index.html">Home</a>
  <a style="text-decoration: none;" href="about.html">About</a>
  <a style="text-decoration: none;" href="contact.html">Contact</a>
  <a style="color: red;" href="services.html">Services</a>
</div>


## 🔎 Explanation:
- `<a>`: The anchor tag, used for creating hyperlinks.
- `href`: Stands for hyperlink reference; it defines the destination of the link.
- `style`: Adds inline CSS to style the element directly.

## 🎨 Styling Purpose:
- `text-decoration: none;`: Removes the underline from the link, giving a cleaner look.
- `color: red;`: Highlights the currently active page (in this case, services.html), helping users know where they are.
