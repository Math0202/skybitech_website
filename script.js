document.addEventListener('DOMContentLoaded', () => {
    // Services data
    const services = [
        {
            title: "Data Center & Server Room Cleaning",
            description: "Professional cleaning services for critical IT infrastructure",
            details: [
                "Hardware cleaning and maintenance",
                "Anti-static floor finishing",
                "Subfloor surface cleaning",
                "Ceiling plenum cleaning",
                "Concrete sealing",
                "HEPA/ULPA filtration vacuum cleaning",
                "Interior server cabinet cleaning"
            ]
        },
        {
            title: "IT Equipment Cleaning",
            description: "Specialized cleaning for all IT devices",
            details: [
                "Desktop and laptop deep cleaning",
                "Printer and scanner maintenance",
                "Network equipment cleaning",
                "Telephone system cleaning",
                "UPS and generator room cleaning",
                "Computer laboratory cleaning"
            ]
        },
        {
            title: "Additional Services",
            description: "Comprehensive IT solutions",
            details: [
                "Software development",
                "Network installation & maintenance",
                "IT equipment supply",
                "Website design & hosting",
                "Cybersecurity consultancy",
                "Business IT consultancy"
            ]
        }
    ];

    // Render services with Font Awesome icons
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <h3><i class="fas fa-tools"></i> ${service.title}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Tools data
    const cleaningTools = [
        {
            category: "Basic Cleaning Materials",
            items: [
                "Microfiber cloths for delicate surfaces",
                "Isopropyl alcohol for removing residue",
                "Compressed air for dust removal",
                "Lint-free cloths",
                "Soft-bristled brushes"
            ]
        },
        {
            category: "Specialized Equipment",
            items: [
                "HEPA/ULPA filtration vacuums (0.3μ efficiency)",
                "Anti-static cleaning solutions",
                "ESD-compliant cleaning tools",
                "Professional-grade cleaning swabs",
                "Anti-static wrist straps",
                "Cleaning gel for dust removal"
            ]
        }
    ];

    // Render tools with Font Awesome icons
    const toolsGrid = document.querySelector('.tools-grid');
    cleaningTools.forEach(category => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <h3><i class="fas fa-cogs"></i> ${category.category}</h3>
            <ul>
                ${category.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        toolsGrid.appendChild(toolCard);
    });

    // Ensure the services and tools grid exist in the HTML before appending
    if (!servicesGrid) {
        console.error("Services grid not found.");
    }
    if (!toolsGrid) {
        console.error("Tools grid not found.");
    }

    // Pricing data (remain the same as in your code)
    const pricing = {
        individual: [
            { device: "Desktop Computer", price: "N$ 80" },
            { device: "Laptop", price: "N$ 90" },
            { device: "MacBook", price: "N$ 110" },
            { device: "iMac", price: "N$ 120" },
            { device: "Office Printer", price: "N$ 220" }
        ],
        facility: [
            "Data Centers",
            "Computer Labs",
            "Server Rooms",
            "Telecommunication Rooms"
        ]
    };

    // Render individual pricing
    const pricingList = document.querySelector('.pricing-list');
    pricing.individual.forEach(item => {
        const pricingItem = document.createElement('div');
        pricingItem.innerHTML = `
            <span>${item.device}</span>
            <span>${item.price}</span>
        `;
        pricingList.appendChild(pricingItem);
    });

    // Render facility services
    const facilityServices = document.querySelector('.facility-services');
    pricing.facility.forEach(service => {
        const serviceItem = document.createElement('li');
        serviceItem.textContent = service;
        facilityServices.appendChild(serviceItem);
    });

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Sample product data with images from the /products folder
    const products = [
        {
            name: "High-Performance Vacuum",
            specifications: "HEPA filter, 1200W, 5L capacity",
            availability: "In Stock",
            price: "N$ 1,200",
            category: "cleaning",
            image: "/products/desk top.jpeg"
        },
        // Add more products as needed
    ];

    // Function to render products
    function renderProducts(filterCategory = "") {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = ""; // Clear existing products

        products.forEach(product => {
            if (filterCategory === "" || product.category === filterCategory) {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.specifications}</p>
                    <p>Availability: ${product.availability}</p>
                    <p class="price">${product.price}</p>
                `;
                productGrid.appendChild(productCard);
            }
        });
    }

    // Initial render
    renderProducts();

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderFilteredProducts(filteredProducts);
    });

    // Filter functionality
    document.getElementById('filter').addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        renderProducts(selectedCategory);
    });

    function renderFilteredProducts(filteredProducts) {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = ""; // Clear existing products

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.specifications}</p>
                <p>Availability: ${product.availability}</p>
                <p class="price">${product.price}</p>
            `;
            productGrid.appendChild(productCard);
        });
    }
});
