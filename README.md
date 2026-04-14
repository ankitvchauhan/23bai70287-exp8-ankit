# 🚀 Experiment 8: Frontend Integration with JWT APIs (Session-Based UI)

## 📌 Objective

This experiment demonstrates how a React frontend integrates with backend JWT authentication APIs.
It implements session-based authentication, protected routes, and role-based access control.

---
## Submission Details :

* Student - Ankit
* UID - 23BAI70287
* section - 23AML7-A
* Experiment - 8

---
## 🧩 Features Implemented

### 🔐 1. Login Page

* User enters username and password
* Sends request to backend:
  `POST /login`
* On successful login:

  * JWT token stored in `sessionStorage`
  * User redirected to Dashboard

---

### 📊 2. Protected Dashboard

* Accessible only when JWT token exists
* Fetches protected data from backend:

  ```
  GET /protected
  ```
* Token sent via header:

  ```
  Authorization: Bearer <token>
  ```

---

### 🚪 3. Logout Functionality

* Clears JWT token from session:

  ```js
  sessionStorage.removeItem("token");
  ```
* Redirects user back to Login page

---

### 🔒 4. Session-Based Access Control

* If token exists → allow access to dashboard
* If token missing → redirect to login page

---

## 💻 Tech Stack

* React.js
* Bootstrap
* Material UI
* Axios
* Node.js (Backend from Experiment 6)
* JWT Authentication

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Clone Repository

```bash
git clone <your-repo-link>
cd 23bai70287-exp8-ankit/frontend
```

### 🔹 Step 2: Install Dependencies

```bash
npm install
npm install axios bootstrap @mui/material @emotion/react @emotion/styled
```

### 🔹 Step 3: Run Application

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 Backend Requirement

Ensure backend (Experiment 6) is running on:

```
http://localhost:5000
```

---

## 📸 Screenshots

### 1️⃣ Login Page (Frontend UI)

![Login](Screenshots/1_login_ui.png)

---

### 2️⃣ Token Stored in Session Storage

![Token](Screenshots/2_token_storage.png)

---

### 3️⃣ Access Protected API

![Protected](Screenshots/3_protected_access.png)

---

### 4️⃣ Unauthorized Access (Redirect to Login)

![Unauthorized](Screenshots/4_unauthorized_access.png)

---

### 5️⃣ Logout Functionality

![Logout](Screenshots/5_logout.png)

---

## 🧠 Conclusion

This experiment successfully demonstrates:

* JWT-based authentication in frontend
* Secure storage using sessionStorage
* Protected route handling
* Logout and session management
* Integration between frontend and backend APIs

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   └── Dashboard.js
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── Screenshots/
```

---

## ✅ Status

✔ Login Working
✔ Token Storage Working
✔ Protected Route Working
✔ Unauthorized Access Handling Working
✔ Logout Working

---
