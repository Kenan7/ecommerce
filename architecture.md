# Fourthwall Custom Storefront Architecture

## Overview
This project is a custom e-commerce storefront built using Next.js, leveraging Fourthwall's API for core e-commerce functionality. It serves as a demonstration of a fully functional e-commerce site with features including product display, collection browsing, cart management, and checkout process.

## Tech Stack
- **Framework**: Next.js 15 (Canary)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Headless UI (@headlessui/react)
  - Hero Icons (@heroicons/react)
- **State Management**: React's built-in state management
- **Development Tools**:
  - PNPM for package management
  - Prettier for code formatting
  - TypeScript for type safety

## Project Structure

### Core Directories
```
├── app/                  # Next.js app directory (routing and pages)
├── components/           # Reusable React components
├── lib/                  # Utility functions and API integrations
├── public/              # Static assets
└── fonts/               # Custom font files
```

### Key Components

#### App Directory (`/app`)
- `layout.tsx`: Root layout component
- `page.tsx`: Homepage component
- `product/`: Product-related pages
- `collections/`: Collection browsing pages
- Error handling and metadata files

#### Components Directory (`/components`)
Organized by feature and functionality:
- `layout/`: Layout components
- `home/`: Homepage-specific components
- `product/`: Product-related components
- `cart/`: Shopping cart components
- `grid/`: Grid layout components
- `icons/`: Icon components
- Shared components like `carousel.tsx`, `price.tsx`, etc.

#### Library Directory (`/lib`)
- `fourthwall/`: Fourthwall API integration
- `constants.ts`: Application constants
- `types.ts`: TypeScript type definitions
- `utils.ts`: Utility functions

## Key Features

### 1. Product Management
- Product listing and detail views
- Collection browsing
- Product search and filtering

### 2. Shopping Cart
- Add/remove items
- Quantity management
- Cart persistence

### 3. Checkout Process
- Integration with Fourthwall's checkout system
- Secure payment processing

### 4. UI/UX
- Responsive design
- Modern, clean interface
- Loading states and error handling
- Toast notifications

## Architecture Patterns

### 1. Page Structure
- Uses Next.js App Router
- Server and Client Components separation
- Static and dynamic rendering strategies

### 2. Data Flow
- API integration through lib/fourthwall
- Type-safe data handling
- Server-side data fetching where possible

### 3. Component Architecture
- Modular component design
- Reusable UI components
- Separation of concerns

### 4. Styling Approach
- Tailwind CSS for styling
- Container queries for responsive design
- Typography system
- Custom UI components

## Development Guidelines

### 1. Code Organization
- Feature-based directory structure
- Shared components in root components directory
- Utility functions in lib directory

### 2. Best Practices
- TypeScript for type safety
- ESLint and Prettier for code consistency
- Component modularity
- Performance optimization

### 3. State Management
- React hooks for local state
- Context API for global state where needed
- Server state management through Next.js

## Environment Configuration
Key environment variables required:
- Fourthwall API credentials
- API endpoints
- Environment-specific configurations

## Performance Considerations
- Image optimization
- Component lazy loading
- API response caching
- Static page generation where possible

## Security
- Secure API communication
- Environment variable protection
- Data validation
- XSS prevention
