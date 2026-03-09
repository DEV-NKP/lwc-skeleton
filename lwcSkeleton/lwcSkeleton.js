import { LightningElement, api } from 'lwc';

/**
 * @description A flexible skeleton loading component for Lightning Web Components
 * @author Your Name
 * @version 1.0.0
 * @see https://github.com/yourusername/lwc-skeleton
 * @example
 * <c-lwc-skeleton 
 *     type="card" 
 *     lines="3" 
 *     animation="shimmer"
 *     isloading={isLoading}>
 * </c-lwc-skeleton>
 */
export default class LwcSkeleton extends LightningElement {
    /* PUBLIC API */
    
    // Core properties
    @api type = 'text';     // text | small-text | avatar | card | table | rectangle | button | input
    @api variant; // For backward compatibility with newer API
    
    @api lines = 3; // Original property
    @api count; // For backward compatibility with newer API
    
    @api rows = 5;
    @api columns = 3;
    
    @api width;
    @api height;
    
    // Animation property
    @api animation = 'shimmer'; // shimmer | pulse | wave | fade | gradient-shift | glow | slide | bounce | none
    @api radius = '4px';
    
    // Loading state
    _isLoading = true; // Default to true to show skeleton by default
    
    @api
    get isloading() {
        return this._isLoading;
    }
    
    set isloading(value) {
        this._isLoading = value !== 'false' && value !== false; // Handle string and boolean
    }
    
    // Backward compatibility for isLoading
    @api
    get isLoading() {
        return this._isLoading;
    }
    
    set isLoading(value) {
        this._isLoading = value !== 'false' && value !== false;
    }
    
    /* PRIVATE PROPERTIES */
    
    _textLineItems = null;
    
    /* COMPUTED PROPERTIES */
    
    // Backward compatibility
    get effectiveType() {
        return this.type || this.variant || 'text';
    }
    
    get effectiveLines() {
        return this.lines || this.count || 3;
    }
    
    // ARIA Attributes for accessibility
    get ariaBusy() {
        return this._isLoading ? 'true' : 'false';
    }
    
    get ariaLive() {
        return this._isLoading ? 'polite' : 'off';
    }
    
    get ariaRole() {
        return this._isLoading ? 'alert' : null;
    }
    
    // Pre-computed text line items with unique keys and variable widths
    get textLineItems() {
        if (this._textLineItems === null || this._textLineItems.length !== this.effectiveLines) {
            this._textLineItems = this.generateTextLineItems();
        }
        return this._textLineItems;
    }
    
    /* VARIANT CHECKS */
    
    get isText() {
        return this.effectiveType === 'text' || this.effectiveType === 'small-text';
    }

    get isAvatar() {
        return this.effectiveType === 'avatar';
    }

    get isCard() {
        return this.effectiveType === 'card';
    }

    get isTable() {
        return this.effectiveType === 'table';
    }

    get isRectangle() {
        return this.effectiveType === 'rectangle';
    }
    
    get isButton() {
        return this.effectiveType === 'button';
    }
    
    get isInput() {
        return this.effectiveType === 'input';
    }
    
    /* ARRAY GENERATORS */

    get linesArray() {
        return Array.from({ length: this.effectiveLines }, (_, i) => i);
    }

    get rowsArray() {
        return Array.from({ length: this.rows }, (_, i) => i);
    }

    get columnsArray() {
        return Array.from({ length: this.columns }, (_, i) => i);
    }

    /* STYLE HELPERS */

    get computedTextClass() {
        let className = 'skeleton-line';
        
        if (this.effectiveType === 'small-text') {
            className += ' small';
        }
        
        return className;
    }
    
    // Combined classes for different skeleton types - REMOVED SIZE
    get avatarClass() {
        let classes = 'skeleton-avatar';
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return classes;
    }
    
    get cardClass() {
        let classes = 'skeleton-line';
        
        if (this.effectiveType === 'small-text') {
            classes += ' small';
        }
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return classes;
    }
    
    get tableCellClass() {
        let classes = 'skeleton-table-cell';
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return classes;
    }
    
    get rectangleClass() {
        let classes = 'skeleton-rectangle';
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return classes;
    }
    
    get buttonClass() {
        let classes = 'skeleton-button';
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return classes;
    }
    
    // Combined class for text lines - REMOVED SIZE
    getTextLineClass(index) {
        const widths = ['100%', '90%', '80%', '70%'];
        const style = `width:${widths[index % widths.length]}`;
        
        let classes = 'skeleton-line';
        
        if (this.effectiveType === 'small-text') {
            classes += ' small';
        }
        
        if (this.animation) {
            classes += ` skeleton-${this.animation}`;
        }
        
        return {
            key: `text-line-${index}-${style.replace(/[^a-zA-Z0-9]/g, '-')}`,
            style: style,
            class: classes
        };
    }

    get rectangleStyle() {
        return `
            width:${this.width || '100%'};
            height:${this.height || '150px'};
            border-radius:${this.radius};
        `;
    }
    
    // Generate text line items with unique keys and variable widths
    generateTextLineItems() {
        const items = [];
        
        for (let i = 0; i < this.effectiveLines; i++) {
            items.push(this.getTextLineClass(i));
        }
        
        return items;
    }
    
    /* LIFECYCLE */
    
    connectedCallback() {
        // If no isloading attribute is provided, default to showing the skeleton
        if (this._isLoading === undefined) {
            this._isLoading = true;
        }
        
        // Debug: Log the animation value
        console.log('Animation:', this.animation);
    }
    
    renderedCallback() {
        // Debug: Log after rendering
        console.log('Rendered - Animation:', this.animation);
    }
    
    /* VALIDATION */
    
    validateInputs() {
        // Validate lines/count
        if (this.effectiveLines < 1 || this.effectiveLines > 20) {
            console.warn('LwcSkeleton: lines/count should be between 1 and 20');
            this.lines = Math.max(1, Math.min(20, this.effectiveLines));
        }
        
        // Validate rows
        if (this.rows < 1 || this.rows > 20) {
            console.warn('LwcSkeleton: rows should be between 1 and 20');
            this.rows = Math.max(1, Math.min(20, this.rows));
        }
        
        // Validate columns
        if (this.columns < 1 || this.columns > 10) {
            console.warn('LwcSkeleton: columns should be between 1 and 10');
            this.columns = Math.max(1, Math.min(10, this.columns));
        }
        
        // Validate animation
        const validAnimations = ['shimmer', 'pulse', 'wave', 'fade', 'gradient-shift', 'glow', 'slide', 'bounce', 'none'];
        if (!validAnimations.includes(this.animation)) {
            console.warn(`LwcSkeleton: animation should be one of ${validAnimations.join(', ')}`);
            this.animation = 'shimmer'; // Default to shimmer
        }
    }
}