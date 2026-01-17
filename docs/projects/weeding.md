# Wedding Website Platform

## Overview

A complete, modern wedding website platform built with Laravel 11 and Next.js 14, featuring multi-language support (English/Bengali), comprehensive event management, and production-ready deployment. This full-stack application provides couples with a beautiful, functional digital hub for their wedding celebration.

The platform combines the power of Laravel's backend capabilities with Next.js's modern frontend features, offering guests an engaging experience for RSVP management, event information, photo galleries, and live streaming capabilities.

## ✨ Key Features

- **Bilingual Support:** Full English and Bengali language support for diverse audiences
- **Event Management:** Comprehensive management of multi-day wedding events
- **RSVP System:** Guest RSVP tracking and meal preference selection
- **Photo Galleries:** Beautiful galleries for pre-wedding and event photos
- **Live Streaming:** Integration for ceremony live streaming
- **Guest Information:** Detailed event schedules, venue information, and directions
- **Admin Dashboard:** Complete administrative interface for managing all aspects
- **CI/CD Pipeline:** Production-ready deployment with automated testing
- **Responsive Design:** Mobile-first design ensuring great experience on all devices
- **SEO Optimized:** Built-in SEO features for better discoverability

## 🏗️ Technology Stack

### Primary Technologies
- **Frontend Framework:** Next.js 14 (React 18)
- **Backend Framework:** Laravel 11
- **Languages:** TypeScript 5.0+, PHP 8.2+
- **Styling:** Tailwind CSS
- **Database:** MySQL 8.0+

### Additional Technologies
- Docker for containerization
- Shell scripts for deployment automation
- Blade templates for email notifications
- API integration for third-party services

## 📊 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/Weeding
- **Primary Language:** TypeScript
- **Languages Breakdown:** TypeScript (51.1%), PHP (36.3%), Shell (8.7%), Dockerfile (1.9%), Blade (1.5%)
- **Repository Size:** ~1MB
- **Last Updated:** 9/1/2025

### Project Status
- **Status:** 🟢 Active
- **Visibility:** 🌐 Public
- **CI/CD:** ✅ Complete Pipeline Configured

## 🏷️ Categories & Tags

**Primary Category:** Web Development

**Tags:** `nextjs` `laravel` `typescript` `php` `wedding-website` `full-stack` `bilingual` `event-management` `docker` `ci-cd`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PHP 8.2+
- Composer
- MySQL 8.0+
- Docker (optional, for containerized deployment)

### Installation

#### Backend Setup (Laravel)

1. **Clone the repository**
   ```bash
   git clone https://github.com/syed-reza98/Weeding.git
   cd Weeding/backend
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Generate key and run migrations**
   ```bash
   php artisan key:generate
   php artisan migrate --seed
   ```

5. **Start Laravel server**
   ```bash
   php artisan serve
   ```

#### Frontend Setup (Next.js)

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Configure API endpoint and other settings
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:3000`

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📖 Usage

### For Couples (Administrators):
- Customize wedding information and theme
- Manage guest lists and RSVPs
- Upload photos to galleries
- Send email notifications to guests
- Configure event schedules and venues

### For Guests:
- Browse wedding information and event schedule
- RSVP to events with meal preferences
- View photo galleries
- Access live streaming during ceremonies
- Get directions to venues

## 🏛️ Architecture

**Architecture Pattern:** Full-Stack with REST API

**Key Architectural Decisions:**
- Decoupled frontend (Next.js) and backend (Laravel) for flexibility
- RESTful API for communication between frontend and backend
- Server-side rendering (SSR) and Static Site Generation (SSG) with Next.js
- Laravel API resources for consistent data formatting
- Multi-language support with i18n
- CI/CD pipeline for automated testing and deployment
- Docker containerization for consistent environments

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
- Complete CI/CD pipeline configured for automated testing
- Both frontend and backend have comprehensive test suites
- Production-ready with proper error handling and logging
- Optimized for performance and SEO
- Bilingual content management system

### Features in Development
- Payment integration for wedding registry
- Real-time guest messaging system
- Advanced photo sharing and commenting

### Related Projects
- Similar to Sharothee-Wedding project but with enhanced features
- Template can be adapted for other event types

### Credits & Attribution
- **Lead Developer:** Syed Salman Reza
- Built with Laravel 11 and Next.js 14
- Bilingual support for English and Bengali audiences

---

**For detailed setup instructions and documentation, refer to the [repository README](https://github.com/syed-reza98/Weeding#readme).**
