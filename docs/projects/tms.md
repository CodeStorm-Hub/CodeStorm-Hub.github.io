# TMS (Task Management System)

## Overview

A comprehensive Task Management System built with Laravel and PHP, designed to help teams organize, track, and manage their tasks efficiently. This system provides essential project management features with a clean, user-friendly interface.

The application enables teams to create, assign, and monitor tasks throughout their lifecycle, ensuring better collaboration and productivity in project workflows.

## 📸 Screenshots

### Login Page
![TMS Login Page](/products/tms-login.png)

## ✨ Key Features

- **Task Creation & Management:** Create, edit, and organize tasks with detailed information
- **Team Collaboration:** Assign tasks to team members and track their progress
- **Status Tracking:** Monitor task status through different stages of completion
- **User Management:** Role-based access control for team members
- **Dashboard Overview:** Comprehensive dashboard for project and task visibility
- **Blade Templates:** Server-side rendered views for fast page loads

## 🏗️ Technology Stack

### Primary Technologies
- **Framework:** Laravel Framework
- **Language:** PHP 7.4+
- **Template Engine:** Blade (Laravel)
- **Database:** MySQL

### Additional Technologies
- JavaScript for client-side interactions
- CSS for styling
- Shell scripts for deployment automation

## 📊 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/tms
- **Primary Language:** PHP
- **Languages Breakdown:** PHP (77.6%), Blade (21.5%), CSS (0.4%), Shell (0.3%), JavaScript (0.2%)
- **Repository Size:** ~0MB
- **Last Updated:** 28/06/2022

### Project Status
- **Status:** 🟢 Active
- **Visibility:** 🌐 Public

## 🏷️ Categories & Tags

**Primary Category:** Web Development

**Tags:** `laravel` `php` `task-management` `project-management` `blade` `mysql` `team-collaboration` `dashboard`

## 🚀 Getting Started

### Prerequisites
- PHP 7.4 or higher
- Composer
- MySQL 5.7+
- Node.js and npm (for asset compilation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syed-reza98/tms.git
   cd tms
   ```

2. **Install dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Generate application key**
   ```bash
   php artisan key:generate
   ```

5. **Run migrations**
   ```bash
   php artisan migrate
   ```

6. **Start development server**
   ```bash
   php artisan serve
   ```

The application will be available at `http://localhost:8000`

## 🏛️ Architecture

**Architecture Pattern:** Monolithic Application

**Key Architectural Decisions:**
- MVC pattern following Laravel conventions
- Blade template engine for server-side rendering
- RESTful routing for clean URL structure
- Database migrations for version control of schema changes

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
- Source code is organized in the TMS folder
- Follow Laravel best practices for code structure
- Ensure proper validation for all user inputs
- Write tests for new features

### Credits & Attribution
- **Lead Developer:** Syed Salman Reza
- Built with Laravel Framework

---

**For detailed setup instructions and documentation, refer to the [repository README](https://github.com/syed-reza98/tms#readme).**
