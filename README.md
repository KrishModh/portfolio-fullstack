
# 🌐 Full-Stack Portfolio Website with Admin Panel

A modern, responsive, and dynamic portfolio web application built with React (Vite), Flask (Python), and Oracle Database.  
Includes a secure **Admin Panel** to upload Projects, Certificates, and manage Contact Messages — all stored in database and displayed dynamically on user portfolio.



---

## ✨ Features

### 🧑‍💻 User Side (Portfolio)
✔️ Modern UI with Dark/Light mode  
✔️ Dynamic Projects & Certificates from Database  
✔️ Contact form with backend storage  
✔️ Resume Download  
✔️ Social Links (GitHub, LinkedIn)  
✔️ Fully responsive (Mobile + Desktop)

### 🔐 Admin Panel
✔️ Login authentication (JWT)  
✔️ Upload Projects & Certificates  
✔️ Manage Messages (Mark as Read/Unread)  
✔️ Message Read/Unread Counter  

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React (Vite), CSS, React Router |
| Admin Frontend | React, JWT Auth |
| Backend API | Flask, Flask-CORS |
| Database | Oracle SQL |
| Hosting | Ngrok (Temp), Vercel & Render (Future) |

---

## 📂 Folder Structure

```
portfolio-fullstack/
│
├── admin-frontend/       
├── user-frontend/        
├── backend-api/          
│    ├── app/
│    │   ├── routes/      
│    │   ├── models/      
│    │   └── uploads/     
│
├── .gitignore
├── README.md
└── commands of sql.txt
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | Fetch all portfolio projects |
| POST | /api/admin/projects | Upload new project |
| GET | /api/certificates | Fetch certificates |
| POST | /api/admin/certificates | Upload certificate |
| GET | /api/messages | Fetch messages |
| POST | /contact | Submit portfolio message |

---

## 🖼 Screenshots

## 🧑‍💻 User Side

| Home Page | About Page |
|-----------|---------------|
| <img width="2560" height="1440" alt="Screenshot (454)" src="https://github.com/user-attachments/assets/47ae30cb-4665-4450-bdfd-b5ef54bfea9f" />| <img width="2560" height="1440" alt="Screenshot (455)" src="https://github.com/user-attachments/assets/ffee9ad3-e524-4cf6-8738-b8fcd76f83ed" />|

| Certificates | Projects Page |
|--------------|--------------|
| <img width="2560" height="1440" alt="Screenshot (456)" src="https://github.com/user-attachments/assets/631347d0-3606-4ea4-93e3-7acc77c67952" />| <img width="2560" height="1440" alt="Screenshot (457)" src="https://github.com/user-attachments/assets/87e95567-ade1-49b9-88b9-783495f79c13" />|

| Contact Page |
|--------------|
| <img width="2560" height="1440" alt="Screenshot (458)" src="https://github.com/user-attachments/assets/0955234b-4204-49ae-afb2-af1d7424e8db" />|

## 🔐 Admin Side
| Upload Projects Page | Upload Certificate Page | Messages Page |
|--------------|--------------|--------------|
| <img width="2560" height="1440" alt="Screenshot (460)" src="https://github.com/user-attachments/assets/01574c86-3341-41a1-a099-547c355aae11" />| <img width="2560" height="1440" alt="Screenshot (461)" src="https://github.com/user-attachments/assets/6726cf9c-3e49-4d60-b534-65bea8a6b3bb" />| <img width="2560" height="1440" alt="Screenshot (463)" src="https://github.com/user-attachments/assets/6c8c4215-961a-430d-9240-772f667c1ef5" />|
---

## 📄 Database Tables (Oracle SQL)

```sql
CREATE TABLE projects (
  id NUMBER PRIMARY KEY,
  title VARCHAR2(200),
  description CLOB,
  tech_stack VARCHAR2(500),
  image_url VARCHAR2(300),
  github_link VARCHAR2(200),
  demo_link VARCHAR2(200)
);

CREATE TABLE certificates (
  id NUMBER PRIMARY KEY,
  title VARCHAR2(200),
  issuer VARCHAR2(200),
  year VARCHAR2(20),
  image_url VARCHAR2(300),
  cert_link VARCHAR2(200)
);

CREATE TABLE messages (
  id NUMBER PRIMARY KEY,
  name VARCHAR2(100),
  email VARCHAR2(100),
  message CLOB,
  created_at TIMESTAMP,
  is_read NUMBER(1) DEFAULT 0
);
```

---

## 📞 Contact

👨‍💻 Developed by: **{{ Krish Modh }}**  
🔗 LinkedIn: _https://www.linkedin.com/in/krish-modh-b38447300?utm_source=share_via&utm_content=profile&utm_medium=member_android_  
💻 GitHub: _https://github.com/KrishModh_  
📧 Email: _rmodh4@gmail.com_  

⭐ If you like this project, consider giving it a star!
