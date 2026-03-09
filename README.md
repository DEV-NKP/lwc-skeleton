
# LWC Skeleton Component

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/DEV-NKP/lwc-skeleton)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Salesforce](https://img.shields.io/badge/platform-Lightning%20Web%20Components-blue.svg)](https://developer.salesforce.com/docs/component-library/documentation/lwc)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/DEV-NKP/lwc-skeleton/pulls)
[![Stars](https://img.shields.io/github/stars/DEV-NKP/lwc-skeleton?style=social)](https://github.com/DEV-NKP/lwc-skeleton/stargazers)

## 📖 Introduction

**LWC Skeleton** is an enterprise-grade Lightning Web Component that provides beautiful skeleton loaders for Salesforce applications. It uses authentic Salesforce Lightning Design System (SLDS) design and offers 9 different animation types to create professional loading experiences that improve perceived performance and user satisfaction.

Traditional spinners are generic and provide no context about what's loading. Skeleton loaders show the actual structure of content while it's loading, reducing user anxiety and creating a more seamless experience. This component is fully compliant with Salesforce Lightning Design System guidelines and is production-ready for any Salesforce org.

### Live Demo

For a complete interactive demo showcasing all skeleton types and animations, visit our [demo page](https://lwc-skeleton-landing.vercel.app/).

## ✨ Features

- 🎯 **Authentic SLDS Design** - Uses exact Salesforce Lightning skeleton design patterns
- 🎨 **9 Animation Types** - Shimmer, Pulse, Wave, Fade, Gradient Shift, Glow, Slide, Bounce, and None
- 📱 **Fully Responsive** - Automatically adapts to all screen sizes and devices
- ⚡ **Lightweight** - Minimal overhead with tiny bundle size under 1kb
- 🔧 **Highly Customizable** - Easy to configure with simple attributes
- ♿ **Accessibility First** - Built with ARIA attributes and semantic HTML
- 🌐 **Cross-Browser Compatible** - Works across all modern browsers
- 🚀 **Performance Optimized** - Zero dependencies and optimized rendering

## 🚀 Why Skeleton Loaders Are Better

| Feature | LWC Skeleton | Traditional Spinner |
|---------|--------------|---------------------|
| Shows actual content structure | ✅ | ❌ |
| Preserves layout and prevents shifts | ✅ | ❌ |
| Improves perceived performance | ✅ | ❌ |
| Reduces user anxiety | ✅ | ❌ |
| Professional, modern appearance | ✅ | ❌ |
| Better UX patterns | ✅ | ❌ |
| Enterprise-grade experience | ✅ | ❌ |

## 📦 Installation

### Option 1: Manual Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DEV-NKP/lwc-skeleton.git
   ```

2. Copy the `lwcSkeleton` folder into your Salesforce project:
   ```
   force-app/main/default/lwc/
   ```

3. Deploy to your Salesforce org:
   ```bash
   sfdx force:source:deploy -p force-app
   ```

## 📁 Folder Structure

```
lwc-skeleton/
├── lwcSkeleton/                 # Main Component
│   ├── lwcSkeleton.html         # Component template
│   ├── lwcSkeleton.js           # Component JavaScript
│   ├── lwcSkeleton.css          # Component styles
│   └── lwcSkeleton.js-meta.xml  # Component metadata
└── lwcSkeletonDemo/             # Demo Component
    ├── lwcSkeletonDemo.html     # Demo template
    ├── lwcSkeletonDemo.js       # Demo JavaScript
    ├── lwcSkeletonDemo.css      # Demo styles
    └── lwcSkeletonDemo.js-meta.xml # Demo metadata
```

### Component Guidelines

#### Main Component (lwcSkeleton)
The main component is the core skeleton loader that can be used in any Lightning page or component. It provides all the skeleton types and animations mentioned in the API Reference section.

#### Demo Component (lwcSkeletonDemo)
The demo component showcases various combinations of skeleton types and animations. It's designed to:
- Demonstrate all skeleton types with different animations
- Show how to combine multiple skeleton loaders
- Provide code examples for each use case
- Act as a reference implementation

You can place the demo component on any Salesforce page to see the exact demo of each combination of the skeleton loader. The demo component uses the main component internally and applies different configurations to showcase all possibilities.

## 💻 Usage

### Basic Usage

```html
<template if:true={isLoading}>
    <c-lwc-skeleton type="text" lines="4"></c-lwc-skeleton>
</template>
```

### Advanced Usage

```html
<template if:true={isLoading}>
    <!-- Text Skeleton with Shimmer Animation -->
    <c-lwc-skeleton type="text" lines="4" animation="shimmer"></c-lwc-skeleton>
    
    <!-- Small Text Skeleton with Wave Animation -->
    <c-lwc-skeleton type="small-text" lines="2" animation="wave"></c-lwc-skeleton>
    
    <!-- Avatar Skeleton with Pulse Animation -->
    <c-lwc-skeleton type="avatar" animation="pulse"></c-lwc-skeleton>
    
    <!-- Card Skeleton with Fade Animation -->
    <c-lwc-skeleton type="card" animation="fade"></c-lwc-skeleton>
    
    <!-- Table Skeleton with Gradient Shift Animation -->
    <c-lwc-skeleton type="table" rows="6" columns="4" animation="gradient-shift"></c-lwc-skeleton>
    
    <!-- Rectangle Skeleton with Glow Animation -->
    <c-lwc-skeleton type="rectangle" width="100%" height="200px" animation="glow"></c-lwc-skeleton>
    
    <!-- Button Skeleton with Slide Animation -->
    <c-lwc-skeleton type="button" animation="slide"></c-lwc-skeleton>
    
    <!-- Input Skeleton with Bounce Animation -->
    <c-lwc-skeleton type="input" animation="bounce"></c-lwc-skeleton>
</template>
```

### JavaScript Controller

```javascript
import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
    @track isLoading = true;
    
    connectedCallback() {
        // Simulate data loading
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
}
```

## 📚 API Reference

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | String | `'text'` | Skeleton type: `text`, `small-text`, `avatar`, `card`, `table`, `rectangle`, `input`, `button` |
| `animation` | String | `'shimmer'` | Animation type: `shimmer`, `pulse`, `wave`, `fade`, `gradient-shift`, `glow`, `slide`, `bounce`, `none` |
| `lines` | Number | `3` | Number of text lines (for text type) |
| `rows` | Number | `5` | Number of table rows (for table type) |
| `columns` | Number | `3` | Number of table columns (for table type) |
| `width` | String | `'100%'` | Width for rectangle type |
| `height` | String | `'150px'` | Height for rectangle type |
| `radius` | String | `'4px'` | Border radius for rectangle type |
| `isloading` | Boolean | `true` | Controls whether skeleton is visible |

### Animation Types

1. **Shimmer** - Classic shimmer effect with moving highlight
2. **Pulse** - Fading in and out effect
3. **Wave** - Wave-like animation moving across the skeleton
4. **Fade** - Simple fade in and out animation
5. **Gradient Shift** - Shifting gradient effect
6. **Glow** - Pulsing glow/brightness effect
7. **Slide** - Sliding highlight effect
8. **Bounce** - Subtle scale animation
9. **None** - No animation (static skeleton)

## 🎯 Examples

### Text Skeleton

```html
<template if:true={isLoading}>
    <c-lwc-skeleton type="text" lines="4" animation="shimmer"></c-lwc-skeleton>
</template>
```

### Table Skeleton

```html
<template if:true={isLoading}>
    <c-lwc-skeleton type="table" rows="5" columns="3" animation="wave"></c-lwc-skeleton>
</template>
```

### Card Skeleton

```html
<template if:true={isLoading}>
    <c-lwc-skeleton type="card" animation="pulse"></c-lwc-skeleton>
</template>
```

### Custom Rectangle

```html
<template if:true={isLoading}>
    <c-lwc-skeleton 
        type="rectangle" 
        width="100%" 
        height="200px" 
        radius="8px"
        animation="gradient-shift">
    </c-lwc-skeleton>
</template>
```

## 🌐 Browser Compatibility

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 🤝 Contributing

We welcome contributions to the LWC Skeleton component! Please follow the instructions below to get started.

### Development Setup

1. Clone the repository
2. Install dependencies
3. Start the development server
4. Make your changes
5. Add tests for new features
6. Submit a pull request

## 👨‍💻 Author

**Niloy Kanti Paul**

- Senior Software Engineer.
- Salesforce Developer & Architect
- Full-Stack Development Specialist
- AI & Machine Learning Enthusiast

Connect with me:
- [Portfolio](https://dev-nkp.github.io/)
- [Blog](https://devnkp.wordpress.com/)
- [GitHub](https://github.com/DEV-NKP)
- [Twitter](https://twitter.com/niloykantipaul)
- [LinkedIn](https://linkedin.com/in/niloykantipaul)

## 🔍 Keywords

LWC, Lightning Web Component, Salesforce, Skeleton Loader, Loading State, SLDS, Lightning Design System, UI Component, User Experience, Performance, Animation, Shimmer, Pulse, Wave, Frontend, Salesforce Development, Lightning Component, Salesforce Lightning, Web Component, JavaScript, CSS, HTML, Responsive Design, Accessibility, ARIA, Enterprise Software, CRM, Customer Experience, Loading Animation, Skeleton Screen, Placeholder UI, Progressive Loading, Perceived Performance

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Salesforce Lightning Design System for design guidelines
- The Salesforce community for inspiration and feedback
- All contributors who have helped improve this component

---

**⭐ If you find this component useful, please give it a star on GitHub!**
