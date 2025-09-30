# eCourier Integration Package
## Overview

A comprehensive PHP/Laravel package for integrating with eCourier parcel delivery service. This package provides seamless integration with eCourier's API for parcel booking, tracking, and delivery management within Laravel applications.

## ✨ Key Features

- **Parcel Booking:** Automated parcel booking through eCourier API integration
- **Real-time Tracking:** Live tracking updates for shipped parcels
- **Address Validation:** Verify delivery addresses and service coverage areas
- **Rate Calculator:** Calculate shipping costs based on weight, size, and destination
- **Status Management:** Track parcel status from pickup to delivery
- **API Integration:** Comprehensive eCourier API wrapper for Laravel
- **Documentation:** Complete implementation guide and examples
- **Error Handling:** Robust error handling and logging for API interactions

## 🛠️ Technology Stack

### Primary Technologies
- **Framework:** Laravel (PHP Framework)
- **Language:** PHP
- **Integration:** eCourier REST API
- **Architecture:** Service-oriented package architecture

### Package Features
- **Service Provider:** Laravel service provider for easy integration
- **Configuration:** Configurable API credentials and settings
- **Facades:** Laravel facades for convenient API access
- **Middleware:** Request/response middleware for API optimization
- **Testing:** Comprehensive test suite for API interactions

## 📂 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/ecourier-courier
- **Primary Language:** PHP
- **Last Updated:** 15/04/2024
- **Repository Size:** ~0MB
- **Package Type:** Laravel Integration Package

### Project Status
- **Status:** ✅ Active
- **Visibility:** 🌐 Public
- **Category:** API Integration Package
- **Tags:** #laravel #php #ecourier #delivery #logistics #api-integration #package

## 🚀 Getting Started

### Prerequisites
- Laravel 8.0 or higher
- PHP 7.4 or higher
- eCourier merchant account and API credentials
- Composer for package management

### Installation

1. **Install via Composer**
   ```bash
   composer require syed-reza98/ecourier-courier
   ```

2. **Publish Configuration**
   ```bash
   php artisan vendor:publish --provider="EcourierCourier\ServiceProvider"
   ```

3. **Configure API Credentials**
   ```bash
   # Add to .env file
   ECOURIER_API_KEY=your_api_key
   ECOURIER_SECRET=your_secret
   ECOURIER_USER_ID=your_user_id
   ECOURIER_BASE_URL=https://staging.ecourier.com.bd/api/
   ```

4. **Usage in Laravel Application**
   ```php
   use EcourierCourier\Facades\Ecourier;
   
   // Book a parcel
   $response = Ecourier::bookParcel([
       'recipient_name' => 'John Doe',
       'recipient_mobile' => '01700000000',
       'recipient_address' => 'Dhaka, Bangladesh',
       'product_price' => 1000,
       'payment_method' => 'COD'
   ]);
   ```

## 📦 eCourier Integration Features

### Parcel Management
- **Book Parcel:** Create new parcel bookings with recipient details
- **Cancel Booking:** Cancel parcels before pickup
- **Bulk Booking:** Process multiple parcel bookings simultaneously
- **Parcel Tracking:** Real-time tracking with status updates
- **Delivery Confirmation:** Automated delivery notifications

### Service Features
- **Coverage Check:** Verify service availability in delivery areas
- **Price Calculator:** Calculate delivery costs based on parcel details
- **Branch Locator:** Find nearest eCourier branches and pickup points
- **Service Types:** Support for different delivery service types
- **Payment Methods:** COD, prepaid, and other payment options

### API Endpoints Supported
- **Authentication:** Secure API authentication and token management
- **Parcel Booking:** Complete parcel booking workflow
- **Tracking API:** Real-time parcel status tracking
- **Branch API:** Service area and branch information
- **Payment API:** Payment status and COD management

## 🏪 Business Integration

### E-commerce Integration
- **Shopping Cart:** Direct integration with e-commerce platforms
- **Order Fulfillment:** Automated parcel booking for online orders
- **Customer Notifications:** Delivery updates via SMS and email
- **Return Management:** Handle return parcel bookings
- **Analytics:** Delivery performance and customer satisfaction metrics

### Laravel Application Integration
- **Service Container:** Dependency injection support
- **Event System:** Laravel events for parcel status changes
- **Queue Integration:** Background processing for API calls
- **Cache Support:** Optimize API responses with caching
- **Logging:** Comprehensive logging for debugging and monitoring

## 👥 Contributors

- **Lead Developer:** [Syed Salman Reza](https://github.com/syed-reza98)
- **API Integration:** eCourier official API documentation
- **Framework:** Laravel by Taylor Otwell

## 📄 Documentation & Links

- **Repository:** [GitHub Repository](https://github.com/syed-reza98/ecourier-courier)
- **eCourier Official:** [eCourier Bangladesh](https://ecourier.com.bd)
- **Laravel Packages:** [Packagist Registry](https://packagist.org)
- **API Documentation:** eCourier API reference guide

## 🤝 Contributing

Contributions welcome for enhancing courier integration:

1. **API Coverage:** Implement additional eCourier API endpoints
2. **Error Handling:** Improve error handling and user feedback
3. **Testing:** Expand test coverage for various scenarios
4. **Documentation:** Enhance usage examples and guides
5. **Performance:** Optimize API calls and response handling

Contributing guidelines:
- Follow Laravel package development standards
- Include comprehensive tests for new features
- Update documentation for API changes
- Consider backward compatibility

---

**Created:** April 15, 2024  
**Last Updated:** September 30, 2025  
**Integration Type:** eCourier Delivery Service Package

## Code & Repository

- **GitHub:** https://github.com/syed-reza98/ecourier-courier
- **Primary Language:** PHP
- **Last Updated:** 15/04/2024
- **Repository Size:** ~0MB

## Architecture & Tech Stack

- **Technology Stack:** Laravel Framework
- **Architecture:** REST API

## Project Status

- **Status:** ✅ Active
- **Visibility:** 🌐 Public
- **Live Demo:** [https://codeboxr.com](https://codeboxr.com)

## Development Notes

```bash
composer require codeboxr/ecourier-courier
```

- For detailed setup instructions, refer to the [repository README](https://github.com/syed-reza98/ecourier-courier#readme)
- Contributing guidelines and project documentation available in the repository
