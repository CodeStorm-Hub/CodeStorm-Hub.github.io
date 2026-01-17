# Walkinroom - Hotel Booking Website

## Overview

A comprehensive hotel booking and management website built with Laravel and JavaScript. Walkinroom provides hotels with a complete digital presence including online booking capabilities, room showcase, amenities information, and guest management tools.

This platform serves as both a customer-facing hotel website and an internal management system, enabling seamless operations from initial booking through guest checkout, with features designed specifically for the hospitality industry.

## ✨ Key Features

- **Online Booking Engine:** Real-time room availability and instant reservation system
- **Room Showcase:** Beautiful galleries and detailed room descriptions
- **Dynamic Pricing:** Flexible pricing based on seasons, demand, and special offers
- **Guest Management:** Complete guest profile and booking history tracking
- **Amenities Display:** Showcase hotel facilities and services
- **Location & Directions:** Interactive maps and travel information
- **Review System:** Guest ratings and feedback management
- **Multi-Language Support:** Serve international guests effectively

## 🏗️ Technology Stack

### Primary Technologies
- **Frontend:** JavaScript (63.9% of codebase)
- **Backend Framework:** Laravel Framework
- **Language:** PHP 7.4+
- **Template Engine:** Blade (16.2%)
- **Styling:** CSS (4.3%)

### Additional Technologies
- Hack language components
- MySQL database
- RESTful API architecture
- Third-party integrations (payment gateways, email services)

## 📊 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/walkinroom
- **Primary Language:** JavaScript
- **Languages Breakdown:** JavaScript (63.9%), Blade (16.2%), PHP (14.9%), CSS (4.3%), Hack (0.6%)
- **Repository Size:** ~188MB
- **Statistics:** ⭐ 2 stars, 🍴 0 forks
- **Last Updated:** 28/01/2023

### Project Status
- **Status:** 🟢 Active
- **Visibility:** 🌐 Public

## 🏷️ Categories & Tags

**Primary Category:** Hospitality / Web Development

**Tags:** `laravel` `javascript` `hotel-website` `booking-system` `hospitality` `reservation` `tourism` `php`

## 🚀 Getting Started

### Prerequisites
- PHP 7.4 or higher
- Node.js 14+ and npm
- Composer
- MySQL 5.7+
- Web server (Apache/Nginx)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syed-reza98/walkinroom.git
   cd walkinroom
   ```

2. **Install backend dependencies**
   ```bash
   composer install
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Set up environment**
   ```bash
   cp .env.example .env
   # Configure database, mail server, and payment gateway
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Run migrations and seed hotel data**
   ```bash
   php artisan migrate --seed
   ```

7. **Compile frontend assets**
   ```bash
   npm run build
   ```

8. **Start development server**
   ```bash
   php artisan serve
   ```

Access the website at `http://localhost:8000`

## 📖 Usage

Walkinroom provides comprehensive functionality for:
- **Hotel Guests:** Browse rooms, check availability, make reservations, view amenities
- **Hotel Staff:** Manage bookings, update room status, handle guest check-in/out
- **Hotel Management:** Configure pricing, manage inventory, generate business reports
- **Website Visitors:** Explore hotel information, view galleries, read reviews

### Main Features:
- Search and filter rooms by dates, guests, and preferences
- View detailed room information with photo galleries
- Secure online booking with payment processing
- Email confirmations and booking management
- Admin dashboard for hotel operations

## 🏛️ Architecture

**Architecture Pattern:** Full-Stack with REST API

**Key Architectural Decisions:**
- Laravel backend provides robust API and server-side rendering
- JavaScript-heavy frontend for dynamic user interactions
- Blade templates for SEO-friendly page rendering
- Real-time availability checking system
- Event-driven notification system
- Queue-based email processing
- Database-backed content management

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
- Large repository size due to included media assets
- Designed for hotel and hospitality industry
- Includes demo hotel data and images
- Responsive design for mobile bookings
- Follow Laravel and JavaScript best practices

### Features Overview
- Online reservation system with real-time availability
- Content management for hotel information
- Photo gallery management
- Guest review and rating system
- Booking calendar and management tools

### Related Projects
- Enhanced version: Walkinroom v2.0
- Other hotel management solutions in portfolio

### Credits & Attribution
- **Lead Developer:** Syed Salman Reza
- **Community:** 2 stars on GitHub
- Built with Laravel and JavaScript for hospitality sector

---

**For detailed setup instructions and documentation, refer to the [repository README](https://github.com/syed-reza98/walkinroom#readme).**
