# eCourier Integration Package

## Overview

A PHP/Laravel package that provides seamless integration with eCourier's parcel delivery service API. This composer package enables Laravel applications to easily integrate eCourier's courier services for order fulfillment, shipment tracking, and parcel management.

The package abstracts eCourier's API complexity, providing a clean, Laravel-friendly interface for managing courier operations, tracking shipments, and handling parcel bookings directly from your Laravel application.

## ✨ Key Features

- **Easy Integration:** Simple composer package installation for Laravel
- **API Abstraction:** Clean PHP interface for eCourier API endpoints
- **Parcel Booking:** Programmatic parcel booking and order creation
- **Shipment Tracking:** Real-time tracking of parcels and deliveries
- **Rate Calculator:** Get delivery rates and pricing information
- **Order Management:** Create, update, and cancel courier orders
- **Address Validation:** Validate delivery addresses before booking
- **Webhook Support:** Handle eCourier webhook notifications

## 🏗️ Technology Stack

### Primary Technologies
- **Language:** PHP 7.4+
- **Framework:** Laravel 8+ compatible
- **Package Type:** Composer package
- **API:** RESTful HTTP client integration

### Additional Technologies
- Guzzle HTTP client for API calls
- Laravel service providers
- Configuration publishing
- Event and listener support

## 📊 Project Information

### Repository Details
- **GitHub:** https://github.com/syed-reza98/ecourier-courier
- **Primary Language:** PHP
- **Repository Size:** ~0MB (lightweight package)
- **Last Updated:** 15/04/2024
- **Package Name:** `codeboxr/ecourier-courier`

### Project Status
- **Status:** 🟢 Active
- **Visibility:** 🌐 Public
- **Live Demo:** [https://codeboxr.com](https://codeboxr.com)

## 🏷️ Categories & Tags

**Primary Category:** Package / Integration

**Tags:** `laravel` `php` `ecourier` `courier` `shipping` `delivery` `logistics` `composer-package`

## 🚀 Getting Started

### Prerequisites
- PHP 7.4 or higher
- Laravel 8.0 or higher
- Composer
- eCourier API credentials (obtain from eCourier)

### Installation

1. **Install via Composer**
   ```bash
   composer require codeboxr/ecourier-courier
   ```

2. **Publish configuration (if needed)**
   ```bash
   php artisan vendor:publish --provider="Codeboxr\ECourierCourier\ServiceProvider"
   ```

3. **Configure API credentials**
   ```php
   // config/ecourier.php or .env
   ECOURIER_API_KEY=your_api_key
   ECOURIER_API_SECRET=your_api_secret
   ECOURIER_USER_ID=your_user_id
   ```

4. **Use in your Laravel application**
   ```php
   use Codeboxr\ECourierCourier\ECourier;
   
   $ecourier = new ECourier();
   $result = $ecourier->createParcel($parcelData);
   ```

## 📖 Usage

### Basic Parcel Booking
```php
use Codeboxr\ECourierCourier\ECourier;

$ecourier = new ECourier();

// Create a parcel
$parcelData = [
    'recipient_name' => 'John Doe',
    'recipient_mobile' => '01711111111',
    'recipient_address' => 'Dhaka, Bangladesh',
    'parcel_weight' => 1.5,
    'product_value' => 1000,
];

$booking = $ecourier->bookParcel($parcelData);

// Track parcel
$tracking = $ecourier->trackParcel($booking->tracking_code);

// Get delivery rates
$rate = $ecourier->getRate([
    'destination' => 'Dhaka',
    'weight' => 1.5,
]);
```

### Available Methods
- `bookParcel($data)` - Book a new parcel
- `trackParcel($trackingCode)` - Track parcel status
- `cancelParcel($parcelId)` - Cancel a booking
- `getRate($params)` - Calculate delivery cost
- `getCities()` - Get available cities
- `getAreas($cityId)` - Get areas in a city

## 🏛️ Architecture

**Architecture Pattern:** Laravel Service Provider Package

**Key Architectural Decisions:**
- Service provider for Laravel integration
- Facade support for easy access
- Configuration publishing for customization
- HTTP client abstraction for API calls
- Event dispatching for webhooks
- Comprehensive error handling
- Cacheable responses for performance

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
- Lightweight package with minimal dependencies
- Compatible with Laravel 8, 9, and 10
- Follows PSR-4 autoloading standards
- Includes comprehensive documentation
- Unit tests for API methods

### Package Features
- **Easy Installation:** One-command composer installation
- **Configuration:** Publishable config file
- **Facades:** Laravel facade for convenient access
- **Events:** Dispatch events for parcel status changes
- **Testing:** Mock API responses for testing
- **Documentation:** Comprehensive inline documentation

### Integration Benefits
- Reduce development time
- Clean, maintainable code
- Laravel best practices
- Automatic API error handling
- Rate limiting support
- Webhook integration ready

### Use Cases
- E-commerce order fulfillment
- Automated parcel booking
- Shipment tracking systems
- Multi-courier integration
- Logistics management platforms

### API Coverage
- Parcel booking and management
- Tracking and status updates
- Rate calculation
- Address validation
- City and area lookup
- Bulk operations support

### Credits & Attribution
- **Package Maintainer:** CodeBoxr / Syed Salman Reza
- **Service Provider:** eCourier Bangladesh
- Built for Laravel developers needing courier integration

### Support & Documentation
- Repository: [GitHub](https://github.com/syed-reza98/ecourier-courier)
- Documentation: Available in repository README
- Demo: [https://codeboxr.com](https://codeboxr.com)

---

**For detailed setup instructions and API documentation, refer to the [repository README](https://github.com/syed-reza98/ecourier-courier#readme).**
