# QR Code Generator & Manager

A modern React application that enables users to instantly generate QR codes from text, URLs, or custom content. The application provides QR code history management, favorites, search functionality, download support, and insightful statistics through a clean and responsive interface.

## Features

* Generate QR codes from text or URLs
* Save generated QR codes automatically
* Download QR codes as image files
* Search previously generated QR codes
* Mark and manage favorite QR codes
* View dashboard statistics and analytics
* Persistent data storage using Local Storage
* Responsive design for desktop and mobile devices

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* CSS3
* Vite

### Libraries

* qrcode.react

### Storage

* Browser Local Storage

## Project Structure

```text
QRCodeManager/
│
├── src/
│   ├── components/
│   │   ├── QRForm.jsx
│   │   ├── QRList.jsx
│   │   ├── QRItem.jsx
│   │   ├── SearchBar.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/vinayak833/QRCodeManager.git
```

Navigate to the project folder:

```bash
cd QRCodeManager
```

Install dependencies:

```bash
npm install
npm install qrcode.react
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## How It Works

1. Enter text, a website URL, or any custom content.
2. Generate a QR code instantly.
3. Save generated QR codes to history.
4. Mark important QR codes as favorites.
5. Search and filter stored QR codes.
6. Download QR codes for offline use.
7. Track usage through dashboard statistics.

## Dashboard Overview

The dashboard provides:

* Total QR Codes Generated
* Favorite QR Codes Count
* Saved QR Code History
* Quick Usage Insights

## Key Concepts Demonstrated

* React Component Architecture
* State Management with Hooks
* Local Storage Integration
* Search and Filtering Logic
* Data Persistence
* QR Code Generation
* File Download Functionality
* Responsive UI Development

## What I Learned

* Building reusable React components
* Managing application state efficiently
* Working with third-party React libraries
* Implementing client-side data storage
* Creating search and filtering features
* Generating and exporting QR code images
* Designing responsive user interfaces

## Future Enhancements

* QR Code Categories
* Export History as CSV
* Dark Mode Support
* QR Code Customization (Colors & Logos)
* Cloud Sync and User Accounts
* QR Code Scan Analytics

## Author

Vinayak S

React Developer | MERN Stack Enthusiast | Open Source Learner
