# AlloraBD - Full-Stack E-Commerce Platform

## Overview

AlloraBD is a modern full-stack e-commerce platform built with Laravel backend and Nuxt.js (TypeScript) frontend, featuring a complete separation of concerns between API and presentation layers. The project demonstrates a professional implementation of a decoupled architecture combining Laravel's robust backend capabilities with Nuxt.js's powerful Vue.js-based frontend.

This platform provides a comprehensive e-commerce solution for businesses in Bangladesh and beyond, offering product management, order processing, customer management, and administrative tools through a modern, responsive interface.

## ✨ Key Features

- **Decoupled Architecture:** Separate Laravel backend API and Nuxt.js frontend
- **Modern Tech Stack:** Laravel 8+ backend with Vue.js/Nuxt frontend
- **TypeScript Support:** Type-safe frontend development with TypeScript
- **RESTful API:** Clean API design for frontend-backend communication
- **Product Management:** Complete e-commerce product catalog system
- **Order Processing:** Full order management and fulfillment workflow
- **User Authentication:** Secure authentication and authorization
- **Responsive Design:** Mobile-friendly interface with Vue.js components

## ✨ Key Features

- **Decoupled Architecture:** Separate Laravel backend and Nuxt.js frontend
- **API-First Design:** RESTful API for flexibility and scalability
- **Modern Frontend:** Vue.js/Nuxt.js with TypeScript for type safety
- **Laravel Backend:** Robust PHP backend with Eloquent ORM
- **Real-Time Updates:** Dynamic UI with Vue.js reactivity
- **Authentication:** Secure user authentication and authorization
- **Database Management:** Efficient data handling with Laravel Eloquent
- **TypeScript Support:** Type-safe frontend development

## 🏗️ Technology Stack

### Backend Technologies
- **Framework:** Laravel Framework
- **Language:** PHP 7.4+ (61.5% of codebase)
- **Database:** MySQL/PostgreSQL
- **API:** RESTful architecture

### Frontend Technologies
- **Framework:** Vue.js with Nuxt.js
- **Language:** TypeScript (2.9%), JavaScript (10.0%)
- **UI:** Vue components (25.6%)
- **Styling:** CSS/SCSS

## 📊 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/allorabd
- **Primary Language:** PHP
- **Languages Breakdown:** PHP (61.5%), Vue (25.6%), JavaScript (10.0%), TypeScript (2.9%)
- **Repository Size:** ~206MB
- **Last Updated:** 06/05/2025

### Project Status
- **Status:** 🟢 Active
- **Visibility:** 🌐 Public

## 🏷️ Categories & Tags

**Primary Category:** Web Development / Full-Stack

**Tags:** `laravel` `vue` `nuxt` `typescript` `full-stack` `rest-api` `php` `spa`

## 🚀 Getting Started

### Prerequisites
- PHP 8.0 or higher
- Composer
- Node.js 16+ and npm
- MySQL 8.0+
- Web server (Apache/Nginx)

### Installation

#### Backend Setup (Laravel)

1. **Clone the repository**
   ```bash
   git clone https://github.com/syed-reza98/allorabd.git
   cd allorabd
   ```

2. **Navigate to backend folder**
   ```bash
   cd backend
   ```

3. **Install PHP dependencies**
   ```bash
   composer install
   ```

4. **Configure environment**
   ```bash
   cp .env2.example .env
   # Configure database credentials and API settings
   ```

5. **Set up database**
   - Create database named `backend` in MySQL/XAMPP
   - Import the `backend.sql` file
   
6. **Generate application key**
   ```bash
   php artisan key:generate
   ```

7. **Start Laravel backend**
   ```bash
   php artisan serve
   ```

### Frontend Setup (Nuxt.js)

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoints**
   ```bash
   # Edit nuxt.config.ts to point to backend API
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📖 Usage

AlloraBD provides a modern full-stack experience:
- **Backend API:** Laravel provides RESTful endpoints
- **Frontend SPA:** Nuxt.js/Vue application with TypeScript
- **Development:** Hot-reload for both frontend and backend
- **Production:** Optimized builds for deployment

## 🏛️ Architecture

**Architecture Pattern:** Separated Frontend/Backend with REST API

**Key Architectural Decisions:**
- Laravel backend provides robust API
- Nuxt.js (Vue.js) frontend with TypeScript
- RESTful API communication
- Separate frontend and backend deployments
- Token-based authentication
- Database-driven content management
- Modern JavaScript framework integration

**Project Structure:**
```
allorabd/
├── backend/         # Laravel API
├── frontend/        # Nuxt.js application
├── database/        # SQL files and migrations
└── docs/           # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For detailed contribution guidelines, see [CONTRIBUTING.md](../../CONTRIBUTING.md).

## 📝 Additional Information

### Development Notes
- Large repository size due to included assets and dependencies
- Follows Laravel and Vue.js best practices
- TypeScript support for type-safe frontend development
- Includes sample data and database schema
- Comprehensive API documentation in repository

### Project Structure
```
allorabd/
├── backend/        # Laravel API
├── frontend/       # Nuxt.js application
├── database/       # SQL files and migrations
└── docs/          # Additional documentation
```

### Technologies Highlight
- **Backend:** Laravel 8+ with PHP 7.4+
- **Frontend:** Nuxt.js 2.x with TypeScript
- **State Management:** Vuex
- **API:** RESTful architecture
- **Database:** MySQL/PostgreSQL

### Credits & Attribution
- **Lead Developer:** Syed Salman Reza
- Built with Laravel and Nuxt.js for modern web applications

---

**For detailed setup instructions and documentation, refer to the [repository README](https://github.com/syed-reza98/allorabd#readme).**
