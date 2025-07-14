// Testimonial Data
const testimonials = [
    {
        name: "Ahmed Khan",
        role: "E-commerce Store Owner",
        content: "Sir kya baat hai apki. Your course transformed my business profit. I went from 25000 Rs/month to over Rs 300,000/month in profit from sales within 3 months!",
    },
    {
        name: "Fatima Ali",
        role: "Dropshipping Entrepreneur",
        content: "The practical strategies taught in these classes are gold. I implemented them and saw immediate results.",
    },
    {
        name: "Bilal Hussain",
        role: "Amazon Seller",
        content: "Best investment I've made in my e-commerce journey. Naveed explains complex concepts in simple terms.",
    },
    {
        name: "Sana Malik",
        role: "Shopify Store Owner",
        content: "The community support alone is worth the price. Plus the course content is incredibly valuable.",
    },
    {
        name: "Usman Riaz",
        role: "Digital Marketer",
        content: "I've taken many courses but this one stands out for its practical, actionable advice.",
    },
    {
        name: "Ayesha Iqbal",
        role: "E-commerce Newbie",
        content: "As someone completely new to e-commerce, this course gave me the confidence to start my own store.",
    },
    {
        name: "Zubair Ahmed",
        role: "E-commerce Consultant",
        content: "Naveed's insights into the Pakistani market are invaluable. Highly recommended!",
    },
    {
        name: "Hina Shah",
        role: "Fashion Boutique Owner",
        content: "The Facebook ads module alone doubled my sales. Worth every rupee!",
    },
    {
        name: "Omar Farooq",
        role: "Tech Entrepreneur",
        content: "Clear, concise, and packed with value. I've recommended this to all my entrepreneur friends.",
    },
    {
        name: "Mehak Hassan",
        role: "Home Business Owner",
        content: "The support from Naveed and the community is exceptional. Always ready to help!",
    },
    {
        name: "Tariq Mahmood",
        role: "Import/Export Business",
        content: "Changed my perspective on online selling. My business has never been better.",
    },
    {
        name: "Sadia Akhtar",
        role: "Handicrafts Seller",
        content: "Finally someone who understands the challenges of Pakistani e-commerce sellers!",
    },
    {
        name: "Faisal Nadeem",
        role: "Corporate Professional",
        content: "This course gave me the side income I needed. Now earning more than my salary!",
    },
    {
        name: "Rabia Zafar",
        role: "Student Entrepreneur",
        content: "Perfect for students looking to start an online business with limited capital.",
    },
    {
        name: "Kamran Siddiqui",
        role: "Retail Store Owner",
        content: "Helped me transition my physical store to online successfully during COVID.",
    },
    {
        name: "Nadia Hussain",
        role: "Freelancer",
        content: "Now I offer e-commerce setup as an additional service to my clients. Thank you sir!",
    },
    {
        name: "Arsalan Khan",
        role: "Tech Startup Founder",
        content: "The advanced scaling strategies helped me take my business to the next level.",
    },
    {
        name: "Zainab Malik",
        role: "Homemaker Entrepreneur",
        content: "Started selling homemade crafts online. Now making a full-time income from home!",
    },
    {
        name: "Saad Ahmed",
        role: "Digital Nomad",
        content: "Thank you sir for giving us an opportunity, I'm now running my e-commerce business while traveling the world.",
    },
    {
        name: "Amina Sheikh",
        role: "Social Media Influencer",
        content: "Monetized my following with an e-commerce store. Best decision ever!",
    }
];

// Load Testimonials
function loadTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    // Shuffle testimonials for random display
    const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
    
    // Get first 6 testimonials
    const selectedTestimonials = shuffledTestimonials.slice(0, 6);
    
    selectedTestimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        
        testimonialSlider.appendChild(testimonialCard);
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header .container');
    header.insertBefore(menuToggle, header.querySelector('nav'));
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.testimonial-slider')) {
        loadTestimonials();
    }
    
    if (window.innerWidth < 992) {
        setupMobileMenu();
    }
});

// Countdown timer for classes page
if (document.getElementById('countdown')) {
    function startCountdown() {
        let minutes = 5;
        let seconds = 0;
        
        const countdown = setInterval(function() {
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                    document.querySelector('.timer-box h2').textContent = "Class is Starting Now!";
                    document.querySelector('.join-btn').textContent = "Class in Progress - Join Late?";
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
        }, 1000);
    }
    
    startCountdown();
}