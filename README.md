# 🚀 Blog-App



## 📖 Overview

This project is a blog application built using Next.js for the frontend and MongoDB as the database.  It allows users to create, read, update, and delete blog posts.  The application is deployed on Vercel.

## ✨ Features

- **Create Blog Posts:**  Users can create new blog posts with titles, content, and optionally, images.
- **Read Blog Posts:** Users can view existing blog posts.
- **Update Blog Posts:** Users can edit existing blog posts.
- **Delete Blog Posts:** Users can delete existing blog posts.
- **Client-side Routing:**  Next.js's built-in routing ensures smooth navigation.
- **Deployment on Vercel:** The application is easily deployed and scaled via Vercel.



## 🛠️ Tech Stack

**Frontend:**
- Next.js
- JavaScript XML
- (Likely) React (implied by Next.js)

**Backend:**
- (Likely) an API route system provided by Next.js for interaction with MongoDB.  Specific backend framework not explicitly identified in provided files.

**Database:**
- MongoDB

**DevOps:**
- Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js (version specified in `package.json`)
- npm or yarn (preferred package manager: npm, based on `.npmrc`)
- MongoDB (running instance, or connection string for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithbirat1/Blog-App.git
   cd Blog-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env.local` file in the root directory (Next.js convention) with environment variables like `MONGODB_URI`  pointing to your MongoDB instance.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000`


## 📁 Project Structure

```
Blog-App/
├── public/            # Static assets
├── src/
│   └── ...           # Source code (pages, components, etc. - structure not fully detailed in provided files)
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── package-lock.json  # Dependency lockfile
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## ⚙️ Configuration

### Environment Variables
- `MONGODB_URI`:  The connection string for your MongoDB database.  This is crucial and should be set in a `.env.local` file.  Refer to your MongoDB deployment for the appropriate connection string.


## 🔧 Development

### Available Scripts

| Command          | Description             |

|-----------------|--------------------------|

| `npm run dev`    | Starts the development server |

| `npm run build`  | Builds the application for production |

| `npm run start`  | Starts the production server |


## 🚀 Deployment

The application is configured for deployment to Vercel.  Use the Vercel CLI or the Vercel platform to deploy.






---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by codewithbirat1

</div>


