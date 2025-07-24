// Real-Life Applications JavaScript

// Application data - TO ADD: Add new real-life math applications here
const applications = {
    shopping: {
        title: 'Shopping Math',
        icon: '🛒',
        description: 'Learn about discounts, taxes, and budgeting',
        scenarios: [
            {
                id: 'discount-calculator',
                title: 'Discount Calculator',
                description: 'Calculate savings and final prices with discounts',
                render: renderDiscountCalculator
            },
            {
                id: 'tax-calculator',
                title: 'Sales Tax Calculator',
                description: 'Find the total cost including tax',
                render: renderTaxCalculator
            },
            {
                id: 'budget-planner',
                title: 'Budget Planner',
                description: 'Plan your shopping within a budget',
                render: renderBudgetPlanner
            }
        ]
    },
    travel: {
        title: 'Travel Planning',
        icon: '✈️',
        description: 'Calculate distance, time, speed, and costs',
        scenarios: [
            {
                id: 'distance-calculator',
                title: 'Distance & Time Calculator',
                description: 'Calculate travel time and distance',
                render: renderDistanceCalculator
            },
            {
                id: 'fuel-calculator',
                title: 'Fuel Cost Calculator',
                description: 'Estimate fuel costs for your trip',
                render: renderFuelCalculator
            },
            {
                id: 'currency-converter',
                title: 'Currency Converter',
                description: 'Convert between different currencies',
                render: renderCurrencyConverter
            }
        ]
    },
    finance: {
        title: 'Finance & Banking',
        icon: '💰',
        description: 'Understand interest, loans, and investments',
        scenarios: [
            {
                id: 'simple-interest',
                title: 'Simple Interest Calculator',
                description: 'Calculate interest on savings and loans',
                render: renderSimpleInterest
            },
            {
                id: 'compound-interest',
                title: 'Compound Interest Calculator',
                description: 'See how money grows with compound interest',
                render: renderCompoundInterest
            },
            {
                id: 'loan-calculator',
                title: 'Loan Payment Calculator',
                description: 'Calculate monthly loan payments',
                render: renderLoanCalculator
            }
        ]
    },
    construction: {
        title: 'Construction Math',
        icon: '🏗️',
        description: 'Area, volume, and material calculations',
        scenarios: [
            {
                id: 'area-calculator',
                title: 'Area Calculator',
                description: 'Calculate area of different shapes',
                render: renderAreaCalculator
            },
            {
                id: 'volume-calculator',
                title: 'Volume Calculator',
                description: 'Calculate volume for construction projects',
                render: renderVolumeCalculator
            },
            {
                id: 'material-calculator',
                title: 'Material Cost Calculator',
                description: 'Estimate material costs for projects',
                render: renderMaterialCalculator
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    showAllApplications();
});

function showAllApplications() {
    const container = document.getElementById('application-content');
    
    container.innerHTML = `
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold mb-4">Choose an Application Category</h2>
            <p class="text-muted-foreground">Click on any category above to explore real-world math applications</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${Object.entries(applications).map(([key, app]) => `
                <div class="card">
                    <div class="card-header">
                        <div class="flex items-center space-x-3 mb-4">
                            <span class="text-3xl">${app.icon}</span>
                            <h3 class="card-title">${app.title}</h3>
                        </div>
                        <p class="card-description">${app.description}</p>
                    </div>
                    <div class="card-content">
                        <h4 class="font-semibold mb-3">Available Tools:</h4>
                        <ul class="space-y-2 text-sm text-muted-foreground">
                            ${app.scenarios.map(scenario => `
                                <li>• ${scenario.title}</li>
                            `).join('')}
                        </ul>
                        <button onclick="showApplication('${key}')" class="btn btn-primary w-full mt-4">
                            Explore ${app.title}
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function showApplication(appKey) {
    const app = applications[appKey];
    if (!app) return;
    
    const container = document.getElementById('application-content');
    
    container.innerHTML = `
        <div class="mb-8">
            <button onclick="showAllApplications()" class="btn btn-outline mb-4">
                ← Back to All Applications
            </button>
            <div class="text-center">
                <h2 class="text-3xl font-bold mb-4">
                    <span class="text-4xl mr-3">${app.icon}</span>
                    ${app.title}
                </h2>
                <p class="text-xl text-muted-foreground">${app.description}</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${app.scenarios.map(scenario => `
                <div class="card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-card"
                     onclick="showScenario('${appKey}', '${scenario.id}')">
                    <div class="card-header">
                        <h3 class="card-title">${scenario.title}</h3>
                        <p class="card-description">${scenario.description}</p>
                    </div>
                    <div class="card-content">
                        <button class="btn btn-primary w-full">Try This Tool</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function showScenario(appKey, scenarioId) {
    const app = applications[appKey];
    const scenario = app.scenarios.find(s => s.id === scenarioId);
    
    if (!scenario) return;
    
    const container = document.getElementById('application-content');
    
    container.innerHTML = `
        <div class="mb-6">
            <button onclick="showApplication('${appKey}')" class="btn btn-outline">
                ← Back to ${app.title}
            </button>
        </div>
        
        <div id="scenario-content">
            <!-- Scenario content will be rendered here -->
        </div>
    `;
    
    scenario.render();
}

// Shopping Applications

function renderDiscountCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">🛒 Discount Calculator</h2>
                <p class="text-muted-foreground">Calculate how much you save with discounts</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Original Price ($)</label>
                            <input type="number" id="original-price" class="input" placeholder="100" min="0" step="0.01">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Discount Percentage (%)</label>
                            <input type="number" id="discount-percent" class="input" placeholder="20" min="0" max="100">
                        </div>
                        <button onclick="calculateDiscount()" class="btn btn-primary w-full">Calculate Savings</button>
                    </div>
                    
                    <div id="discount-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Results:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Original Price:</span>
                                    <span id="display-original">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Discount Amount:</span>
                                    <span id="display-discount" class="text-green-600">-$0.00</span>
                                </div>
                                <div class="flex justify-between font-bold">
                                    <span>Final Price:</span>
                                    <span id="display-final">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>You Save:</span>
                                    <span id="display-savings" class="text-green-600 font-bold">$0.00</span>
                                </div>
                            </div>
                        </div>
                        
                        <div id="discount-explanation" class="p-4 bg-muted rounded text-sm hidden">
                            <!-- Explanation will be shown here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('original-price').value) || 0;
    const discountPercent = parseFloat(document.getElementById('discount-percent').value) || 0;
    
    const discountAmount = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - discountAmount;
    
    document.getElementById('display-original').textContent = `$${originalPrice.toFixed(2)}`;
    document.getElementById('display-discount').textContent = `-$${discountAmount.toFixed(2)}`;
    document.getElementById('display-final').textContent = `$${finalPrice.toFixed(2)}`;
    document.getElementById('display-savings').textContent = `$${discountAmount.toFixed(2)}`;
    
    const explanation = document.getElementById('discount-explanation');
    explanation.innerHTML = `
        <h4 class="font-semibold mb-2">How it's calculated:</h4>
        <p>1. Discount Amount = Original Price × (Discount % ÷ 100)</p>
        <p>2. Discount Amount = $${originalPrice} × (${discountPercent}% ÷ 100) = $${discountAmount.toFixed(2)}</p>
        <p>3. Final Price = Original Price - Discount Amount</p>
        <p>4. Final Price = $${originalPrice} - $${discountAmount.toFixed(2)} = $${finalPrice.toFixed(2)}</p>
    `;
    explanation.classList.remove('hidden');
}

function renderTaxCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">🧾 Sales Tax Calculator</h2>
                <p class="text-muted-foreground">Find the total cost including sales tax</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Item Price ($)</label>
                            <input type="number" id="item-price" class="input" placeholder="50" min="0" step="0.01">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Tax Rate (%)</label>
                            <input type="number" id="tax-rate" class="input" placeholder="8.5" min="0" max="50" step="0.1">
                        </div>
                        <button onclick="calculateTax()" class="btn btn-primary w-full">Calculate Total</button>
                    </div>
                    
                    <div id="tax-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Results:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Item Price:</span>
                                    <span id="display-item-price">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Tax Amount:</span>
                                    <span id="display-tax-amount" class="text-red-600">+$0.00</span>
                                </div>
                                <div class="flex justify-between font-bold text-lg">
                                    <span>Total Cost:</span>
                                    <span id="display-total-cost">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateTax() {
    const itemPrice = parseFloat(document.getElementById('item-price').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
    
    const taxAmount = (itemPrice * taxRate) / 100;
    const totalCost = itemPrice + taxAmount;
    
    document.getElementById('display-item-price').textContent = `$${itemPrice.toFixed(2)}`;
    document.getElementById('display-tax-amount').textContent = `+$${taxAmount.toFixed(2)}`;
    document.getElementById('display-total-cost').textContent = `$${totalCost.toFixed(2)}`;
}

function renderBudgetPlanner() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">💳 Budget Planner</h2>
                <p class="text-muted-foreground">Plan your purchases within your budget</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Your Budget ($)</label>
                            <input type="number" id="budget-amount" class="input" placeholder="200" min="0" step="0.01">
                        </div>
                        
                        <div id="budget-items">
                            <h4 class="font-semibold mb-2">Items to Buy:</h4>
                            <div class="space-y-2" id="items-list">
                                <div class="flex space-x-2">
                                    <input type="text" class="input flex-1" placeholder="Item name" data-type="name">
                                    <input type="number" class="input w-24" placeholder="Price" data-type="price" step="0.01">
                                    <button onclick="removeItem(this)" class="btn btn-destructive">×</button>
                                </div>
                            </div>
                            <button onclick="addBudgetItem()" class="btn btn-outline w-full mt-2">+ Add Item</button>
                        </div>
                        
                        <button onclick="calculateBudget()" class="btn btn-primary w-full">Check Budget</button>
                    </div>
                    
                    <div id="budget-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Budget Summary:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Total Budget:</span>
                                    <span id="display-budget">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total Cost:</span>
                                    <span id="display-total">$0.00</span>
                                </div>
                                <div class="flex justify-between font-bold">
                                    <span>Remaining:</span>
                                    <span id="display-remaining">$0.00</span>
                                </div>
                            </div>
                        </div>
                        
                        <div id="budget-status" class="p-4 rounded hidden">
                            <!-- Status message will appear here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function addBudgetItem() {
    const itemsList = document.getElementById('items-list');
    const newItem = document.createElement('div');
    newItem.className = 'flex space-x-2';
    newItem.innerHTML = `
        <input type="text" class="input flex-1" placeholder="Item name" data-type="name">
        <input type="number" class="input w-24" placeholder="Price" data-type="price" step="0.01">
        <button onclick="removeItem(this)" class="btn btn-destructive">×</button>
    `;
    itemsList.appendChild(newItem);
}

function removeItem(button) {
    button.parentElement.remove();
}

function calculateBudget() {
    const budget = parseFloat(document.getElementById('budget-amount').value) || 0;
    const items = document.querySelectorAll('#items-list > div');
    
    let totalCost = 0;
    items.forEach(item => {
        const price = parseFloat(item.querySelector('[data-type="price"]').value) || 0;
        totalCost += price;
    });
    
    const remaining = budget - totalCost;
    
    document.getElementById('display-budget').textContent = `$${budget.toFixed(2)}`;
    document.getElementById('display-total').textContent = `$${totalCost.toFixed(2)}`;
    document.getElementById('display-remaining').textContent = `$${remaining.toFixed(2)}`;
    
    const status = document.getElementById('budget-status');
    if (remaining >= 0) {
        status.className = 'p-4 rounded bg-green-100 text-green-800';
        status.textContent = `Great! You're within budget with $${remaining.toFixed(2)} to spare.`;
    } else {
        status.className = 'p-4 rounded bg-red-100 text-red-800';
        status.textContent = `You're over budget by $${Math.abs(remaining).toFixed(2)}. Consider removing some items.`;
    }
    status.classList.remove('hidden');
}

// Travel Applications

function renderDistanceCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">🗺️ Distance & Time Calculator</h2>
                <p class="text-muted-foreground">Calculate travel time using the formula: Time = Distance ÷ Speed</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Distance (miles)</label>
                            <input type="number" id="travel-distance" class="input" placeholder="120" min="0">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Average Speed (mph)</label>
                            <input type="number" id="travel-speed" class="input" placeholder="60" min="1">
                        </div>
                        <button onclick="calculateTravelTime()" class="btn btn-primary w-full">Calculate Time</button>
                    </div>
                    
                    <div id="travel-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Travel Information:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Distance:</span>
                                    <span id="display-distance">0 miles</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Speed:</span>
                                    <span id="display-speed">0 mph</span>
                                </div>
                                <div class="flex justify-between font-bold">
                                    <span>Travel Time:</span>
                                    <span id="display-time">0 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateTravelTime() {
    const distance = parseFloat(document.getElementById('travel-distance').value) || 0;
    const speed = parseFloat(document.getElementById('travel-speed').value) || 1;
    
    const time = distance / speed;
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    
    document.getElementById('display-distance').textContent = `${distance} miles`;
    document.getElementById('display-speed').textContent = `${speed} mph`;
    document.getElementById('display-time').textContent = 
        hours > 0 ? `${hours}h ${minutes}m` : `${minutes} minutes`;
}

function renderFuelCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">⛽ Fuel Cost Calculator</h2>
                <p class="text-muted-foreground">Estimate fuel costs for your trip</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Trip Distance (miles)</label>
                            <input type="number" id="fuel-distance" class="input" placeholder="300" min="0">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Car's MPG (miles per gallon)</label>
                            <input type="number" id="car-mpg" class="input" placeholder="25" min="1">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Gas Price per Gallon ($)</label>
                            <input type="number" id="gas-price" class="input" placeholder="3.50" min="0" step="0.01">
                        </div>
                        <button onclick="calculateFuelCost()" class="btn btn-primary w-full">Calculate Cost</button>
                    </div>
                    
                    <div id="fuel-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Fuel Cost Breakdown:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Gallons Needed:</span>
                                    <span id="display-gallons">0</span>
                                </div>
                                <div class="flex justify-between font-bold text-lg">
                                    <span>Total Fuel Cost:</span>
                                    <span id="display-fuel-cost">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('fuel-distance').value) || 0;
    const mpg = parseFloat(document.getElementById('car-mpg').value) || 1;
    const gasPrice = parseFloat(document.getElementById('gas-price').value) || 0;
    
    const gallonsNeeded = distance / mpg;
    const totalCost = gallonsNeeded * gasPrice;
    
    document.getElementById('display-gallons').textContent = `${gallonsNeeded.toFixed(1)} gallons`;
    document.getElementById('display-fuel-cost').textContent = `$${totalCost.toFixed(2)}`;
}

function renderCurrencyConverter() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">💱 Currency Converter</h2>
                <p class="text-muted-foreground">Convert between different currencies (using sample rates)</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Amount</label>
                            <input type="number" id="currency-amount" class="input" placeholder="100" min="0" step="0.01">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">From Currency</label>
                            <select id="from-currency" class="select">
                                <option value="USD">USD (US Dollar)</option>
                                <option value="EUR">EUR (Euro)</option>
                                <option value="GBP">GBP (British Pound)</option>
                                <option value="INR">INR (Indian Rupee)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">To Currency</label>
                            <select id="to-currency" class="select">
                                <option value="USD">USD (US Dollar)</option>
                                <option value="EUR" selected>EUR (Euro)</option>
                                <option value="GBP">GBP (British Pound)</option>
                                <option value="INR">INR (Indian Rupee)</option>
                            </select>
                        </div>
                        <button onclick="convertCurrency()" class="btn btn-primary w-full">Convert</button>
                    </div>
                    
                    <div id="currency-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Conversion Result:</h3>
                            <div class="space-y-2">
                                <div class="text-center">
                                    <div class="text-2xl font-bold" id="conversion-result">$0.00 = €0.00</div>
                                    <div class="text-sm text-muted-foreground mt-2" id="exchange-rate">Exchange rate: 1 USD = 0.85 EUR</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 bg-blue-50 rounded text-sm">
                            <p class="font-semibold mb-1">Note:</p>
                            <p>These are sample exchange rates for educational purposes. Real rates change constantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function convertCurrency() {
    // Sample exchange rates (to USD)
    const rates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        INR: 82.5
    };
    
    const amount = parseFloat(document.getElementById('currency-amount').value) || 0;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    // Convert to USD first, then to target currency
    const usdAmount = amount / rates[fromCurrency];
    const convertedAmount = usdAmount * rates[toCurrency];
    
    const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹' };
    
    document.getElementById('conversion-result').textContent = 
        `${symbols[fromCurrency]}${amount.toFixed(2)} = ${symbols[toCurrency]}${convertedAmount.toFixed(2)}`;
    
    const rate = rates[toCurrency] / rates[fromCurrency];
    document.getElementById('exchange-rate').textContent = 
        `Exchange rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
}

// Finance Applications

function renderSimpleInterest() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">💰 Simple Interest Calculator</h2>
                <p class="text-muted-foreground">Formula: Interest = Principal × Rate × Time</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Principal Amount ($)</label>
                            <input type="number" id="principal" class="input" placeholder="1000" min="0" step="0.01">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Annual Interest Rate (%)</label>
                            <input type="number" id="interest-rate" class="input" placeholder="5" min="0" step="0.1">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Time Period (years)</label>
                            <input type="number" id="time-period" class="input" placeholder="3" min="0" step="0.1">
                        </div>
                        <button onclick="calculateSimpleInterest()" class="btn btn-primary w-full">Calculate Interest</button>
                    </div>
                    
                    <div id="interest-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Results:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Principal:</span>
                                    <span id="display-principal">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Interest Earned:</span>
                                    <span id="display-interest" class="text-green-600">$0.00</span>
                                </div>
                                <div class="flex justify-between font-bold">
                                    <span>Total Amount:</span>
                                    <span id="display-total-amount">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('principal').value) || 0;
    const rate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const time = parseFloat(document.getElementById('time-period').value) || 0;
    
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    
    document.getElementById('display-principal').textContent = `$${principal.toFixed(2)}`;
    document.getElementById('display-interest').textContent = `$${interest.toFixed(2)}`;
    document.getElementById('display-total-amount').textContent = `$${totalAmount.toFixed(2)}`;
}

function renderCompoundInterest() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">📈 Compound Interest Calculator</h2>
                <p class="text-muted-foreground">See how money grows with compound interest</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Initial Investment ($)</label>
                            <input type="number" id="compound-principal" class="input" placeholder="1000" min="0" step="0.01">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Annual Interest Rate (%)</label>
                            <input type="number" id="compound-rate" class="input" placeholder="6" min="0" step="0.1">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Compounding Frequency</label>
                            <select id="compound-frequency" class="select">
                                <option value="1">Annually</option>
                                <option value="2">Semi-annually</option>
                                <option value="4">Quarterly</option>
                                <option value="12" selected>Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Time Period (years)</label>
                            <input type="number" id="compound-time" class="input" placeholder="5" min="0" step="0.1">
                        </div>
                        <button onclick="calculateCompoundInterest()" class="btn btn-primary w-full">Calculate Growth</button>
                    </div>
                    
                    <div id="compound-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Investment Growth:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Initial Investment:</span>
                                    <span id="display-compound-principal">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Interest Earned:</span>
                                    <span id="display-compound-interest" class="text-green-600">$0.00</span>
                                </div>
                                <div class="flex justify-between font-bold text-lg">
                                    <span>Final Amount:</span>
                                    <span id="display-compound-total">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('compound-principal').value) || 0;
    const rate = parseFloat(document.getElementById('compound-rate').value) || 0;
    const frequency = parseInt(document.getElementById('compound-frequency').value);
    const time = parseFloat(document.getElementById('compound-time').value) || 0;
    
    // Compound interest formula: A = P(1 + r/n)^(nt)
    const amount = principal * Math.pow(1 + (rate/100)/frequency, frequency * time);
    const interest = amount - principal;
    
    document.getElementById('display-compound-principal').textContent = `$${principal.toFixed(2)}`;
    document.getElementById('display-compound-interest').textContent = `$${interest.toFixed(2)}`;
    document.getElementById('display-compound-total').textContent = `$${amount.toFixed(2)}`;
}

function renderLoanCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">🏠 Loan Payment Calculator</h2>
                <p class="text-muted-foreground">Calculate monthly loan payments</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Loan Amount ($)</label>
                            <input type="number" id="loan-amount" class="input" placeholder="200000" min="0" step="1000">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Annual Interest Rate (%)</label>
                            <input type="number" id="loan-rate" class="input" placeholder="4.5" min="0" step="0.1">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Loan Term (years)</label>
                            <input type="number" id="loan-term" class="input" placeholder="30" min="1">
                        </div>
                        <button onclick="calculateLoanPayment()" class="btn btn-primary w-full">Calculate Payment</button>
                    </div>
                    
                    <div id="loan-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Loan Details:</h3>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span>Loan Amount:</span>
                                    <span id="display-loan-amount">$0</span>
                                </div>
                                <div class="flex justify-between font-bold text-lg">
                                    <span>Monthly Payment:</span>
                                    <span id="display-monthly-payment">$0.00</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total Interest:</span>
                                    <span id="display-total-interest" class="text-red-600">$0</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total Amount Paid:</span>
                                    <span id="display-total-paid">$0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function calculateLoanPayment() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const annualRate = parseFloat(document.getElementById('loan-rate').value) || 0;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) || 1;
    
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    let monthlyPayment;
    if (monthlyRate === 0) {
        monthlyPayment = loanAmount / numPayments;
    } else {
        monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }
    
    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - loanAmount;
    
    document.getElementById('display-loan-amount').textContent = `$${loanAmount.toLocaleString()}`;
    document.getElementById('display-monthly-payment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('display-total-interest').textContent = `$${totalInterest.toLocaleString()}`;
    document.getElementById('display-total-paid').textContent = `$${totalPaid.toLocaleString()}`;
}

// Construction Applications

function renderAreaCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">📐 Area Calculator</h2>
                <p class="text-muted-foreground">Calculate area of different shapes for construction projects</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Shape Type</label>
                            <select id="shape-type" class="select" onchange="updateAreaInputs()">
                                <option value="rectangle">Rectangle</option>
                                <option value="circle">Circle</option>
                                <option value="triangle">Triangle</option>
                            </select>
                        </div>
                        
                        <div id="area-inputs">
                            <!-- Inputs will be populated based on shape type -->
                        </div>
                        
                        <button onclick="calculateArea()" class="btn btn-primary w-full">Calculate Area</button>
                    </div>
                    
                    <div id="area-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Area Result:</h3>
                            <div class="text-center">
                                <div class="text-3xl font-bold" id="display-area">0 sq ft</div>
                                <div class="text-sm text-muted-foreground mt-2" id="area-formula"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    updateAreaInputs();
}

function updateAreaInputs() {
    const shapeType = document.getElementById('shape-type').value;
    const inputsContainer = document.getElementById('area-inputs');
    
    let html = '';
    switch(shapeType) {
        case 'rectangle':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Length (ft)</label>
                    <input type="number" id="length" class="input" placeholder="10" min="0" step="0.1">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Width (ft)</label>
                    <input type="number" id="width" class="input" placeholder="8" min="0" step="0.1">
                </div>
            `;
            break;
        case 'circle':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Radius (ft)</label>
                    <input type="number" id="radius" class="input" placeholder="5" min="0" step="0.1">
                </div>
            `;
            break;
        case 'triangle':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Base (ft)</label>
                    <input type="number" id="base" class="input" placeholder="6" min="0" step="0.1">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Height (ft)</label>
                    <input type="number" id="height" class="input" placeholder="4" min="0" step="0.1">
                </div>
            `;
            break;
    }
    
    inputsContainer.innerHTML = html;
}

function calculateArea() {
    const shapeType = document.getElementById('shape-type').value;
    let area = 0;
    let formula = '';
    
    switch(shapeType) {
        case 'rectangle':
            const length = parseFloat(document.getElementById('length').value) || 0;
            const width = parseFloat(document.getElementById('width').value) || 0;
            area = length * width;
            formula = `Area = Length × Width = ${length} × ${width}`;
            break;
        case 'circle':
            const radius = parseFloat(document.getElementById('radius').value) || 0;
            area = Math.PI * radius * radius;
            formula = `Area = π × r² = π × ${radius}²`;
            break;
        case 'triangle':
            const base = parseFloat(document.getElementById('base').value) || 0;
            const height = parseFloat(document.getElementById('height').value) || 0;
            area = 0.5 * base * height;
            formula = `Area = ½ × Base × Height = ½ × ${base} × ${height}`;
            break;
    }
    
    document.getElementById('display-area').textContent = `${area.toFixed(2)} sq ft`;
    document.getElementById('area-formula').textContent = formula;
}

function renderVolumeCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">📦 Volume Calculator</h2>
                <p class="text-muted-foreground">Calculate volume for construction and storage needs</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Shape Type</label>
                            <select id="volume-shape-type" class="select" onchange="updateVolumeInputs()">
                                <option value="rectangular">Rectangular Prism</option>
                                <option value="cylinder">Cylinder</option>
                                <option value="sphere">Sphere</option>
                            </select>
                        </div>
                        
                        <div id="volume-inputs">
                            <!-- Inputs will be populated based on shape type -->
                        </div>
                        
                        <button onclick="calculateVolume()" class="btn btn-primary w-full">Calculate Volume</button>
                    </div>
                    
                    <div id="volume-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Volume Result:</h3>
                            <div class="text-center">
                                <div class="text-3xl font-bold" id="display-volume">0 cu ft</div>
                                <div class="text-sm text-muted-foreground mt-2" id="volume-formula"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    updateVolumeInputs();
}

function updateVolumeInputs() {
    const shapeType = document.getElementById('volume-shape-type').value;
    const inputsContainer = document.getElementById('volume-inputs');
    
    let html = '';
    switch(shapeType) {
        case 'rectangular':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Length (ft)</label>
                    <input type="number" id="vol-length" class="input" placeholder="10" min="0" step="0.1">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Width (ft)</label>
                    <input type="number" id="vol-width" class="input" placeholder="8" min="0" step="0.1">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Height (ft)</label>
                    <input type="number" id="vol-height" class="input" placeholder="6" min="0" step="0.1">
                </div>
            `;
            break;
        case 'cylinder':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Radius (ft)</label>
                    <input type="number" id="vol-radius" class="input" placeholder="3" min="0" step="0.1">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Height (ft)</label>
                    <input type="number" id="vol-height" class="input" placeholder="8" min="0" step="0.1">
                </div>
            `;
            break;
        case 'sphere':
            html = `
                <div>
                    <label class="block text-sm font-medium mb-2">Radius (ft)</label>
                    <input type="number" id="vol-radius" class="input" placeholder="4" min="0" step="0.1">
                </div>
            `;
            break;
    }
    
    inputsContainer.innerHTML = html;
}

function calculateVolume() {
    const shapeType = document.getElementById('volume-shape-type').value;
    let volume = 0;
    let formula = '';
    
    switch(shapeType) {
        case 'rectangular':
            const length = parseFloat(document.getElementById('vol-length').value) || 0;
            const width = parseFloat(document.getElementById('vol-width').value) || 0;
            const height = parseFloat(document.getElementById('vol-height').value) || 0;
            volume = length * width * height;
            formula = `Volume = L × W × H = ${length} × ${width} × ${height}`;
            break;
        case 'cylinder':
            const radius = parseFloat(document.getElementById('vol-radius').value) || 0;
            const cylHeight = parseFloat(document.getElementById('vol-height').value) || 0;
            volume = Math.PI * radius * radius * cylHeight;
            formula = `Volume = π × r² × h = π × ${radius}² × ${cylHeight}`;
            break;
        case 'sphere':
            const sphereRadius = parseFloat(document.getElementById('vol-radius').value) || 0;
            volume = (4/3) * Math.PI * Math.pow(sphereRadius, 3);
            formula = `Volume = 4/3 × π × r³ = 4/3 × π × ${sphereRadius}³`;
            break;
    }
    
    document.getElementById('display-volume').textContent = `${volume.toFixed(2)} cu ft`;
    document.getElementById('volume-formula').textContent = formula;
}

function renderMaterialCalculator() {
    const container = document.getElementById('scenario-content');
    
    container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2 class="text-2xl font-bold">🧱 Material Cost Calculator</h2>
                <p class="text-muted-foreground">Estimate material costs for construction projects</p>
            </div>
            <div class="card-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Project Area (sq ft)</label>
                            <input type="number" id="project-area" class="input" placeholder="500" min="0" step="0.1">
                        </div>
                        
                        <div id="material-list">
                            <h4 class="font-semibold mb-2">Materials:</h4>
                            <div class="space-y-2" id="materials">
                                <div class="flex space-x-2">
                                    <input type="text" class="input flex-1" placeholder="Material name" data-type="material-name">
                                    <input type="number" class="input w-24" placeholder="Cost per sq ft" data-type="material-cost" step="0.01">
                                    <button onclick="removeMaterial(this)" class="btn btn-destructive">×</button>
                                </div>
                            </div>
                            <button onclick="addMaterial()" class="btn btn-outline w-full mt-2">+ Add Material</button>
                        </div>
                        
                        <button onclick="calculateMaterialCost()" class="btn btn-primary w-full">Calculate Total Cost</button>
                    </div>
                    
                    <div id="material-results" class="space-y-4">
                        <div class="p-4 bg-muted rounded">
                            <h3 class="font-semibold mb-3">Cost Breakdown:</h3>
                            <div id="cost-breakdown" class="space-y-2 text-sm">
                                <!-- Cost breakdown will appear here -->
                            </div>
                            <div class="border-t pt-2 mt-3">
                                <div class="flex justify-between font-bold text-lg">
                                    <span>Total Cost:</span>
                                    <span id="display-material-total">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function addMaterial() {
    const materialsList = document.getElementById('materials');
    const newMaterial = document.createElement('div');
    newMaterial.className = 'flex space-x-2';
    newMaterial.innerHTML = `
        <input type="text" class="input flex-1" placeholder="Material name" data-type="material-name">
        <input type="number" class="input w-24" placeholder="Cost per sq ft" data-type="material-cost" step="0.01">
        <button onclick="removeMaterial(this)" class="btn btn-destructive">×</button>
    `;
    materialsList.appendChild(newMaterial);
}

function removeMaterial(button) {
    button.parentElement.remove();
}

function calculateMaterialCost() {
    const area = parseFloat(document.getElementById('project-area').value) || 0;
    const materials = document.querySelectorAll('#materials > div');
    
    let totalCost = 0;
    const breakdown = document.getElementById('cost-breakdown');
    breakdown.innerHTML = '';
    
    materials.forEach(material => {
        const name = material.querySelector('[data-type="material-name"]').value || 'Unnamed Material';
        const costPerSqFt = parseFloat(material.querySelector('[data-type="material-cost"]').value) || 0;
        const totalMaterialCost = area * costPerSqFt;
        totalCost += totalMaterialCost;
        
        const item = document.createElement('div');
        item.className = 'flex justify-between';
        item.innerHTML = `
            <span>${name}:</span>
            <span>$${totalMaterialCost.toFixed(2)}</span>
        `;
        breakdown.appendChild(item);
    });
    
    document.getElementById('display-material-total').textContent = `$${totalCost.toFixed(2)}`;
}