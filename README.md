# Ayush Gupta Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## 🚀 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Code Quality**: ESLint + Prettier
- **Deployment**: Ready for GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/ayushgupta11/ayushgupta11.github.io.git

# Navigate to the project directory
cd ayushgupta11.github.io

# Install dependencies
pnpm install
```

### Development Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check

# Type checking
pnpm type-check
```

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
├── lib/                # Utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports

public/                 # Static assets
├── vite.svg
└── ...

config files/
├── components.json     # shadcn/ui configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── .prettierrc         # Prettier configuration
```

## 🎨 Design System

This project uses shadcn/ui components with Tailwind CSS for a consistent and modern design system:

- **Colors**: Customizable color palette with dark/light mode support
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent spacing scale
- **Components**: Pre-built, accessible UI components

## 🚀 Deployment

### GitHub Pages

1. Update the `base` in `vite.config.ts` if needed
2. Build the project: `pnpm build`
3. Deploy the `dist` folder to GitHub Pages

### Other Platforms

This project can be deployed to any static hosting service:

- Vercel
- Netlify
- Cloudflare Pages
- And more...

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ayush Gupta**

- GitHub: [@ayushgupta11](https://github.com/ayushgupta11)
- Portfolio: [ayushgupta11.github.io](https://ayushgupta11.github.io)
