# Counter App

A simple, elegant counter application built with React and TypeScript. This project demonstrates fundamental React concepts including state management, custom hooks, and component composition.

## Features

- ✨ Clean and modern UI design
- 🔢 Increment and decrement counter
- 🔄 Reset functionality
- 📱 Responsive design
- 🎨 Smooth animations and transitions
- 🛡️ TypeScript for type safety
- 🎯 Custom hooks for state management

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling with modern features
- **Custom Hooks** - Reusable state logic

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd counter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx      # Main counter component
│   └── Counter.css      # Counter component styles
├── hooks/
│   └── useCounter.ts    # Custom counter hook
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main app component
├── App.css              # App styles
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## Architecture

### Custom Hook Pattern

The app uses a custom `useCounter` hook that encapsulates all counter logic:

- State management
- Increment/decrement operations
- Reset functionality
- Boundary checking (min/max values)
- Configurable step size

### Component Structure

- **App.tsx** - Main application wrapper
- **Counter.tsx** - Counter display and controls
- **useCounter.ts** - Counter state logic
- **types/index.ts** - TypeScript definitions

## Customization

The counter hook accepts options for customization:

```typescript
const { count, increment, decrement, reset } = useCounter({
  initialValue: 0,    // Starting value
  min: -10,          // Minimum value
  max: 100,          // Maximum value
  step: 2            // Increment/decrement step
});
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Create React App
- Inspired by modern UI design principles
- TypeScript for enhanced developer experience