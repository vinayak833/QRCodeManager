# QR Code Generator & Manager

A React-based application that allows users to generate QR codes from text or URLs, save them for future use, mark favorites, download QR images, and search through previously generated QR codes.

## Features

- Generate QR Codes
- Save QR Code History
- Download QR Images
- Search QR Codes
- Favorite QR Codes
- Dashboard Statistics
- Local Storage Support
- Responsive User Interface

## Tech Stack

- React
- JavaScript (ES6)
- CSS
- Vite
- qrcode.react
- Local Storage

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

Navigate to the project directory:

```bash
cd QRCodeManager
```

Install dependencies:

```bash
npm install
npm install qrcode.react
```

Run the application:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Usage

1. Enter a URL or text.
2. Click **Generate QR**.
3. View the generated QR code.
4. Save it automatically to history.
5. Mark important QR codes as favorites.
6. Search previously generated QR codes.
7. Download QR codes as images.

## Dashboard Statistics

- Total QR Codes
- Favorite QR Codes
- Generated History Count

## Skills Demonstrated

- React Components
- useState Hook
- useEffect Hook
- Props Management
- Local Storage
- Search & Filtering
- QR Code Generation
- File Download Functionality
- Responsive Design

## Learning Outcomes

- Working with third-party React libraries
- Managing application state
- Persisting data with Local Storage
- Building reusable components
- Implementing search functionality
- Generating and downloading images

## Author

Vinayak S
