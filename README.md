# Book-Review-Platform

A full-stack Book Review Platform built with **React**, **Node.js**, **Express**, and **PostgreSQL**. Users can browse books, search and filter by title or rating, and view average ratings from reviews.  



 Features
✅ Display a list of books with pagination (9 per page)  
✅ Search books by title  
✅ Filter books by average rating  
✅ View detailed book information and average user ratings  
✅ Backend REST API with Express and Sequelize  
✅ Frontend with React (Vite) and TailwindCSS  

---

Tech Stack
-Frontend: React, Vite, TailwindCSS, Axios
-Backend: Node.js, Express, Sequelize ORM
- Database: MySQL




Prerequisites
- Node.js (v14 or higher)
- MySQL installed locally or on a server
- Git

---
 Backend Setup
bash
cd backend
npm install

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Start the backend server
npm start
