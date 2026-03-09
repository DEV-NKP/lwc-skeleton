import { LightningElement, track } from 'lwc';

export default class LwcSkeletonDemo extends LightningElement {
    // Global controls
    @track showSkeleton = true;
    @track animationType = 'shimmer';
    
    // Text skeleton controls
    @track textCount = 3;
    
    // Avatar skeleton controls
    @track avatarSize = 'medium'; // Keep for internal use
    
    // Button skeleton controls
    @track buttonSize = 'medium'; // Keep for internal use
    
    // Input skeleton controls
    @track inputSize = 'medium'; // Keep for internal use
    
    // Card skeleton controls
    @track cardSize = 'medium'; // Keep for internal use
    
    // Table skeleton controls
    @track tableRows = 5;
    @track tableColumns = 3;
    
    // Rectangle skeleton controls
    @track rectWidth = '100%';
    @track rectHeight = '150px';
    @track rectRadius = '4px';
    
    // Code example visibility
    @track showTextCodeBlock = false;
    @track showAvatarCodeBlock = false;
    @track showButtonCodeBlock = false;
    @track showInputCodeBlock = false;
    @track showCardCodeBlock = false;
    @track showTableCodeBlock = false;
    @track showRectangleCodeBlock = false;
    @track showProfileCodeBlock = false;
    @track showDashboardCodeBlock = false;
    @track showListCodeBlock = false;
    @track showTypeCodeBlock = false;
    @track showMixedCodeBlock = false;
    @track showConditionalCodeBlock = false;
    @track showNestedCodeBlock = false;
    @track showCustomCodeBlock = false;
    @track showAdvancedCodeBlock = false;
    @track showPerformanceCodeBlock = false;
    
    // Conditional loading
    @track conditionalLoading = true;
    
    // List items for list view example
    @track listItems = [
        { id: 1, name: 'Acme Deal', company: 'Acme Corporation', amount: '50,000', stage: 'Prospecting' },
        { id: 2, name: 'Global Tech', company: 'Global Tech Inc.', amount: '75,000', stage: 'Qualification' },
        { id: 3, name: 'Innovation Labs', company: 'Innovation Labs LLC', amount: '120,000', stage: 'Proposal' },
        { id: 4, name: 'Enterprise Corp', company: 'Enterprise Solutions', amount: '250,000', stage: 'Negotiation' },
        { id: 5, name: 'StartupXYZ', company: 'StartupXYZ Inc.', amount: '35,000', stage: 'Closed Won' }
    ];
    
    // Options for comboboxes
    get animationOptions() {
        return [
            { label: 'Shimmer', value: 'shimmer' },
            { label: 'Pulse', value: 'pulse' },
            { label: 'Wave', value: 'wave' },
            { label: 'Fade', value: 'fade' },
            { label: 'Gradient Shift', value: 'gradient-shift' },
            { label: 'Glow', value: 'glow' },
            { label: 'Slide', value: 'slide' },
            { label: 'Bounce', value: 'bounce' },
            { label: 'None', value: 'none' }
        ];
    }
    
    // Code examples - REMOVED SIZE FROM ALL EXAMPLES
    get textCodeExample() {
        return `<c-lwc-skeleton 
    type="text" 
    lines="${this.textCount}"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <p>This is the actual text content that appears when loading is complete.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
    </template>
</c-lwc-skeleton>`;
    }
    
    get avatarCodeExample() {
        return `<c-lwc-skeleton 
    type="avatar" 
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
    </template>
</c-lwc-skeleton>`;
    }
    
    get buttonCodeExample() {
        return `<c-lwc-skeleton 
    type="button" 
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <lightning-button label="Save" variant="brand"></lightning-button>
    </template>
</c-lwc-skeleton>`;
    }
    
    get inputCodeExample() {
        return `<c-lwc-skeleton 
    type="input" 
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <lightning-input label="User Name" value="John Doe"></lightning-input>
    </template>
</c-lwc-skeleton>`;
    }
    
    get cardCodeExample() {
        return `<c-lwc-skeleton 
    type="card" 
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <div class="slds-media">
            <div class="slds-media__figure">
                <img src="https://via.placeholder.com/40" alt="User Avatar" />
            </div>
            <div class="slds-media__body">
                <p class="slds-text-heading_small slds-m-bottom_xx-small">John Doe</p>
                <p class="slds-text-body_small">Software Developer</p>
            </div>
        </div>
    </template>
</c-lwc-skeleton>`;
    }
    
    get tableCodeExample() {
        return `<c-lwc-skeleton 
    type="table" 
    rows="${this.tableRows}"
    columns="${this.tableColumns}"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <table class="slds-table slds-table_cell-buffer slds-no-row-hover">
            <thead>
                <tr class="slds-line-height_reset">
                    <th scope="col">
                        <div class="slds-truncate" title="Name">Name</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Company">Company</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Title">Title</div>
                    </th>
                    <th scope="col">
                        <div class="slds-truncate" title="Email">Email</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="slds-hint-parent">
                    <th scope="row">
                        <div class="slds-truncate" title="Amy Jones">Amy Jones</div>
                    </th>
                    <td>
                        <div class="slds-truncate" title="Company One">Company One</div>
                    </td>
                    <td>
                        <div class="slds-truncate" title="Sales Director">Sales Director</div>
                    </td>
                    <td>
                        <div class="slds-truncate" title="amy@example.com">amy@example.com</div>
                    </td>
                </tr>
                <tr class="slds-hint-parent">
                    <th scope="row">
                        <div class="slds-truncate" title="Bob Smith">Bob Smith</div>
                    </th>
                    <td>
                        <div class="slds-truncate" title="Company Two">Company Two</div>
                    </td>
                    <td>
                        <div class="slds-truncate" title="Developer">Developer</div>
                    </td>
                    <td>
                        <div class="slds-truncate" title="bob@example.com">bob@example.com</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </template>
</c-lwc-skeleton>`;
    }
    
    get rectangleCodeExample() {
        return `<c-lwc-skeleton 
    type="rectangle" 
    width="${this.rectWidth}"
    height="${this.rectHeight}"
    radius="${this.rectRadius}"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <div class="slds-media">
            <div class="slds-media__figure">
                <img src="https://via.placeholder.com/100x100" alt="Product Image" />
            </div>
            <div class="slds-media__body">
                <h3 class="slds-text-heading_medium slds-m-bottom_small">Product Name</h3>
                <p>This is a product description that appears when the content is loaded.</p>
            </div>
        </div>
    </template>
</c-lwc-skeleton>`;
    }
    
    get profileCodeExample() {
        return `<div class="slds-grid slds-wrap slds-gutters">
    <div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-4">
        <c-lwc-skeleton 
            type="avatar" 
            animation="${this.animationType}"
            isloading="${this.showSkeleton}">
            <template if:false={showSkeleton}>
                <img src="https://via.placeholder.com/80" alt="User Avatar" />
            </template>
        </c-lwc-skeleton>
    </div>
    <div class="slds-col slds-size_1-of-1 slds-medium-size_3-of-4">
        <c-lwc-skeleton 
            type="text" 
            lines="3"
            animation="${this.animationType}"
            isloading="${this.showSkeleton}">
            <template if:false={showSkeleton}>
                <h3 class="slds-text-heading_large">John Doe</h3>
                <p class="slds-text-body_small">Software Developer</p>
                <p>john.doe@example.com</p>
            </template>
        </c-lwc-skeleton>
    </div>
</div>`;
    }
    
    get dashboardCodeExample() {
        return `<div class="slds-grid slds-wrap slds-gutters">
    <!-- Metric Cards -->
    <div class="slds-col slds-size_1-of-1 slds-medium-size_1-of-3">
        <lightning-card title="Total Sales" icon-name="standard:account">
            <div class="slds-p-around_medium">
                <c-lwc-skeleton 
                    type="text" 
                    lines="2"
                    animation="${this.animationType}"
                    isloading="${this.showSkeleton}">
                    <template if:false={showSkeleton}>
                        <p class="slds-text-heading_large">$125,430</p>
                        <p class="slds-text-body_small">+12% from last month</p>
                    </template>
                </c-lwc-skeleton>
            </div>
        </lightning-card>
    </div>
    <!-- More metric cards... -->
</div>

<!-- Chart Area -->
<div class="slds-m-top_medium">
    <lightning-card title="Sales Trend" icon-name="standard:chart">
        <div class="slds-p-around_medium">
            <c-lwc-skeleton 
                type="rectangle" 
                width="100%"
                height="200px"
                animation="${this.animationType}"
                isloading="${this.showSkeleton}">
                <template if:false={showSkeleton}>
                    <img src="https://via.placeholder.com/600x200" alt="Sales Chart" />
                </template>
            </c-lwc-skeleton>
        </div>
    </lightning-card>
</div>`;
    }
    
    get listCodeExample() {
        return `<template for:each={listItems} for:item="item">
    <div key={item.id} class="slds-p-vertical_small">
        <c-lwc-skeleton 
            type="card" 
            animation="${this.animationType}"
            isloading="${this.showSkeleton}">
            <template if:false={showSkeleton}>
                <div class="slds-media">
                    <div class="slds-media__figure">
                        <lightning-icon icon-name="standard:opportunity" size="small"></lightning-icon>
                    </div>
                    <div class="slds-media__body">
                        <p class="slds-text-heading_small slds-m-bottom_xx-small">{item.name}</p>
                        <p class="slds-text-body_small">{item.company}</p>
                    </div>
                    <div class="slds-media__figure slds-media__figure_reverse">
                        <p class="slds-text-heading_small">${item.amount}</p>
                    </div>
                </div>
            </template>
        </c-lwc-skeleton>
    </div>
</template>`;
    }
    
    get typeCodeExample() {
        return `<c-lwc-skeleton 
    type="text" 
    lines="3"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <p>This is the actual text content that appears when loading is complete.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </template>
</c-lwc-skeleton>`;
    }
    
    get mixedCodeExample() {
        return `<c-lwc-skeleton 
    type="card"
    lines="2"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <!-- Content here -->
    </template>
</c-lwc-skeleton>`;
    }
    
    get conditionalCodeExample() {
        return `// In your JavaScript
@track conditionalLoading = true;

// In your HTML
<lightning-button 
    label="Toggle Loading State" 
    onclick={toggleLoading}>
</lightning-button>

<c-lwc-skeleton 
    type="card" 
    animation="${this.animationType}"
    isloading={conditionalLoading}>
    <template if:false={conditionalLoading}>
        <!-- Content here -->
    </template>
</c-lwc-skeleton>

// In your JavaScript
toggleLoading() {
    this.conditionalLoading = !this.conditionalLoading;
}`;
    }
    
    get nestedCodeExample() {
        return `<c-lwc-skeleton 
    type="text" 
    lines="1"
    animation="${this.animationType}"
    isloading="${this.showSkeleton}">
    <template if:false={showSkeleton}>
        <h3 class="slds-text-heading_medium">Nested Content</h3>
    </template>
</c-lwc-skeleton>

<div class="slds-m-top_small slds-p-left_medium">
    <c-lwc-skeleton 
        type="card" 
        animation="${this.animationType}"
        isloading="${this.showSkeleton}">
        <template if:false={showSkeleton}>
            <!-- Nested content here -->
        </template>
    </c-lwc-skeleton>
</div>`;
    }
    
    get customCodeExample() {
        return `<div class="custom-skeleton-container">
    <c-lwc-skeleton 
        type="rectangle" 
        width="100%"
        height="150px"
        radius="8px"
        animation="${this.animationType}"
        isloading="${this.showSkeleton}">
        <template if:false={showSkeleton}>
            <div class="custom-content">
                <h3 class="slds-text-heading_medium">Custom Styled Content</h3>
                <p>This content has custom styling applied.</p>
            </div>
        </template>
    </c-lwc-skeleton>
</div>`;
    }
    
    get advancedCodeExample() {
        return `// Advanced Usage Example
// Multiple skeleton types with different configurations

<c-lwc-skeleton 
    type="table" 
    rows="10"
    columns="5"
    animation="wave"
    isloading={isLoading}>
    <template if:false={isLoading}>
        <!-- Table content -->
    </template>
</c-lwc-skeleton>

// Performance optimization
<c-lwc-skeleton 
    type="text" 
    lines="5"
    animation="none"
    isloading={fastLoading}>
    <template if:false={fastLoading}>
        <!-- Text content -->
    </template>
</c-lwc-skeleton>`;
    }
    
    get performanceCodeExample() {
        return `// Performance Best Practices

// 1. Use "none" animation for better performance
<c-lwc-skeleton 
    type="text" 
    animation="none"
    isloading={isLoading}>
    <!-- Content -->
</c-lwc-skeleton>

// 2. Limit the number of skeleton elements
<c-lwc-skeleton 
    type="table" 
    rows="5"
    columns="3"
    isloading={isLoading}>
    <!-- Table content -->
</c-lwc-skeleton>

// 3. Use smaller sizes for mobile
<c-lwc-skeleton 
    type="text" 
    size="small"
    isloading={isLoading}>
    <!-- Text content -->
</c-lwc-skeleton>`;
    }
    
    // Event handlers
    handleShowSkeletonChange(event) {
        this.showSkeleton = event.target.checked;
    }
    
    handleAnimationChange(event) {
        this.animationType = event.target.value;
    }
    
    handleTabActive() {
        // Tab activated - no specific action needed
    }
    
    // Text skeleton controls
    handleTextCountChange(event) {
        this.textCount = parseInt(event.target.value, 10);
    }
    
    // REMOVED ALL SIZE HANDLERS
    
    // Table skeleton controls
    handleTableRowsChange(event) {
        this.tableRows = parseInt(event.target.value, 10);
    }
    
    handleTableColumnsChange(event) {
        this.tableColumns = parseInt(event.target.value, 10);
    }
    
    // Rectangle skeleton controls
    handleRectWidthChange(event) {
        this.rectWidth = event.target.value;
    }
    
    handleRectHeightChange(event) {
        this.rectHeight = event.target.value;
    }
    
    handleRectRadiusChange(event) {
        this.rectRadius = event.target.value;
    }
    
    // Conditional loading
    toggleLoading() {
        this.conditionalLoading = !this.conditionalLoading;
    }
    
    // Code example visibility
    showTextCode() {
        this.showTextCodeBlock = !this.showTextCodeBlock;
    }
    
    showAvatarCode() {
        this.showAvatarCodeBlock = !this.showAvatarCodeBlock;
    }
    
    showButtonCode() {
        this.showButtonCodeBlock = !this.showButtonCodeBlock;
    }
    
    showInputCode() {
        this.showInputCodeBlock = !this.showInputCodeBlock;
    }
    
    showCardCode() {
        this.showCardCodeBlock = !this.showCardCodeBlock;
    }
    
    showTableCode() {
        this.showTableCodeBlock = !this.showTableCodeBlock;
    }
    
    showRectangleCode() {
        this.showRectangleCodeBlock = !this.showRectangleCodeBlock;
    }
    
    showProfileCode() {
        this.showProfileCodeBlock = !this.showProfileCodeBlock;
    }
    
    showDashboardCode() {
        this.showDashboardCodeBlock = !this.showDashboardCodeBlock;
    }
    
    showListCode() {
        this.showListCodeBlock = !this.showListCodeBlock;
    }
    
    showTypeCode() {
        this.showTypeCodeBlock = !this.showTypeCodeBlock;
    }
    
    showMixedCode() {
        this.showMixedCodeBlock = !this.showMixedCodeBlock;
    }
    
    showConditionalCode() {
        this.showConditionalCodeBlock = !this.showConditionalCodeBlock;
    }
    
    showNestedCode() {
        this.showNestedCodeBlock = !this.showNestedCodeBlock;
    }
    
    showCustomCode() {
        this.showCustomCodeBlock = !this.showCustomCodeBlock;
    }
    
    showAdvancedCode() {
        this.showAdvancedCodeBlock = !this.showAdvancedCodeBlock;
    }
    
    showPerformanceCode() {
        this.showPerformanceCodeBlock = !this.showPerformanceCodeBlock;
    }
}