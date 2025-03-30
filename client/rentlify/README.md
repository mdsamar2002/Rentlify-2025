# Rentlify - The Ultimate Rental Platform

## 🚀 About Rentlify
Rentlify is a **feature-rich rental platform** built with the **MERN stack**, designed to streamline the process of renting or listing homes and vehicles. Whether you're a host looking to monetize your property or a user searching for the perfect rental, Rentlify makes the experience seamless and efficient.

## ✨ Key Features
- **Seamless Authentication & Role-Based Access** using JWT
- **List & Rent Properties or Vehicles** effortlessly
- **Wishlist Feature** to save favorite listings
- **Integrated Stripe Payments** for secure transactions
- **Advanced Search & Filtering** to find the perfect rental
- **Cloudinary Integration** for smooth media uploads
- **Effortless Booking & Order Management**
- **Intuitive & Responsive UI** powered by **React & Tailwind CSS**

---

## 🛠️ Tech Stack
### **Frontend:**
- React.js
- Redux Toolkit for state management
- React Router
- Tailwind CSS.

### **Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication

### **Integrations:**
- **Stripe API** for secure payments
- **Cloudinary** for image hosting
- **Multer** for file management

---

## 🚀 Getting Started
### **Prerequisites**
Before running Rentlify, ensure you have:
- **[Node.js](https://nodejs.org/)** installed
- **MongoDB** (local or MongoDB Atlas)
- **Stripe API Key** for payment processing

### **Clone the Repository**
```sh
git clone https://github.com/yourusername/rentlify.git
cd rentlify
```

### **Install Dependencies**
#### **Backend Setup**
```sh
cd backend
npm install
```

#### **Frontend Setup**
```sh
cd frontend
npm install
```

### **Configure Environment Variables**
Create a `.env` file in the **backend** folder and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 🔥 Running the Application
### **Start the Backend**
```sh
cd backend
npm start
```

### **Start the Frontend**
```sh
cd frontend
npm start
```

The application will be live at **http://localhost:3000**

---

## 🚀 API Endpoints
### **Users**
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| POST   | /api/users/login | Authenticate user   |
| POST   | /api/users       | Register new user   |
| GET    | /api/users/me    | Get user profile    |

### **Rentals**
| Method | Endpoint          | Description                |
|--------|------------------|----------------------------|
| GET    | /api/rentals     | Fetch all rental listings  |
| GET    | /api/rentals/:id | Retrieve a specific rental |
| POST   | /api/rentals     | List a new rental (Host)   |
| PUT    | /api/rentals/:id | Update rental details      |
| DELETE | /api/rentals/:id | Remove rental listing      |

### **Bookings**
| Method | Endpoint            | Description            |
|--------|--------------------|------------------------|
| POST   | /api/bookings      | Create a new booking  |
| GET    | /api/bookings/user | View user bookings    |
| DELETE | /api/bookings/:id  | Cancel a booking      |

---

## 🌍 Deployment Guide
Rentlify can be deployed using:
- **Frontend:** Vercel / Netlify
- **Backend:** Heroku / Render / AWS
- **Database:** MongoDB Atlas

### **Deploying the Frontend**
```sh
npm run build
```
Then, upload the `build/` folder to Vercel or Netlify.

### **Deploying the Backend**
Ensure `.env` is correctly configured, then deploy to **Heroku / Render / AWS**.

---

## 🔒 Security Enhancements
- **JWT-based authentication** for secure logins
- **Password encryption** with bcrypt
- **Role-based access control** for users & hosts
- **Input validation & sanitization**

---

## 🚀Features
- **Social Login** (Google & Facebook Authentication)
- **Real-time Booking Notifications**
- **Dynamic Pricing & Discounts**
- **Multi-Property Hosting**

---

## 🤝 Contributing
We welcome contributions! Feel free to fork the repository, submit pull requests, or open issues for improvements.

---

## 📞 Contact
For support or collaboration, reach out at **mdsamaratib@email.com**


