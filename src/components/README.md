# Resume Components

This folder contains React components for creating a professional one-page resume that follows the same design system as the portfolio.

## Components

### `Resume`

The main resume component that combines all sections into a complete one-page layout.

### `ResumeHeader`

Header section with name, title, contact information, and optional philosophy statement.

### `SkillsSection`

Displays skills organized by categories with clean bullet-point styling.

### `ExperienceSection`

Shows professional experience in a timeline format with company details and responsibilities.

### `ProjectsSection`

Showcases selected projects in a grid layout with descriptions and technologies used.

## Data Structure

Resume data is defined in `src/data/resumeData.ts` and follows the TypeScript interfaces in `src/types/resume.ts`.

## Styling

- Uses the same Tailwind CSS design system as the portfolio
- Consistent typography, spacing, and colors
- Print-friendly styles included
- Responsive layout for mobile and desktop

## Usage

The resume can be accessed by clicking the "Resume" link in the navigation or the "View Resume" button in the hero section.

## Customization

To customize the resume content:

1. Edit `src/data/resumeData.ts` with your information
2. Modify component styling in individual component files
3. Adjust the layout in the main `Resume` component

## Print Support

The resume includes print-optimized styles and can be printed directly from the browser (Ctrl/Cmd + P).
