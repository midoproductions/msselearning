/**
 * Music Solutions School AI Chatbot
 * Smart chatbot with knowledge base about services
 */

const ChatbotConfig = {
  name: "MSS Bot",
  description: "A friendly chatbot to assist you with information about Music Solutions School's programs and courses in Accra.",
  version: "1.0",
  apikey: 'API_KEY',
  useAI: false // AI disabled — using local KnowledgeBase only
};

// Knowledge base about Music Solutions School
const KnowledgeBase = {
  greetings: [
    "Hello! Welcome to Music Solutions School. How can I assist you today?",
    "Hi there! I'm here to help you with information about our music courses and services.",
    "Welcome to Music Solutions School! What would you like to know?",
    "Hi! I'm your MSS assistant. How can I help you today?",
    "Hello! I'm here to provide information about our music lessons. What would you like to know?",
    "Welcome! I'm your Music Solutions School chatbot. How can I assist you today?",
    "Hi! I'm here to help you with any questions about our curriculum and enrollment. What would you like to know?"
  ],
  
  services: {
    keywords: ['service', 'services', 'offer', 'what do you do', 'what services', 'lessons', 'classes', 'instruction', 'recording', 'studio', 'consulting'],
    response: `Music Solutions School offers comprehensive music training and services in Accra:<br><br>

📋 Our Programs & Services Include:<br><br>

<ul>
<li>Comprehensive Instrument Instruction - Piano, Guitar, Violin, Drums, and more</li>
<li>Vocal & Choral Coaching - Voice training for soloists and ensembles</li>
<li>Music Theory & Composition - Graded music theory instruction</li>
<li>Technical Services - Audio production, recording studio, and voiceover/jingle production</li>
<li>Instrument Care & Support - Professional tuning, maintenance, and consultation</li>
</ul>
Each course is delivered by trained, passionate music educators. Would you like to know more about any specific course?`
  },

  about: {
    keywords: ['about', 'who are you', 'company', 'tell me about', 'background', 'info', 'information', 'details', 'what is music solutions school', 'dominic', 'ansah', 'asare'],
    response: `About Music Solutions School: <br><br>

Founded by the visionary music educator Mr. Dominic Ansah Asare, Music Solutions School is a premier music academy in Accra, Ghana. We are dedicated to delivering high-quality musical education and professional audio services. We believe music training should be enriching, creative, and accessible to students of all ages.<br><br>

Our team consists of experienced, certified music instructors and audio engineers committed to helping you achieve your musical goals, whether you are a beginner or looking to advance your skills.`
  },

  location: {
    keywords: ['location', 'where', 'accra', 'address', 'office', 'areas served', 'service area', 'coverage', 'do you serve', 'service locations'],
    response: `Music Solutions School is located in Accra, Ghana. Our main campus provides top-tier facilities for practical lessons, rehearsals, and recording.

For specific location details, directions, or to schedule a visit to our campus, please contact us:<br><br>

Call our support team on +233 24 946 7108 or <br>
Send us an email through our contact page`
  },

  pricing: {
    keywords: ['price', 'cost', 'fee', 'how much', 'payment', 'charges', 'rates'],
    response: `Our program fees vary based on the instrument, course level, and lesson frequency. We offer flexible and affordable enrollment packages tailored to your schedule and learning goals.

For a detailed course brochure and fee structure, please: <br><br>

📞 Contact us directly on +233 24 946 7108 <br>
📧 Fill out our enrollment form on the contact page <br>
💬 Ask us here for more information about specific courses`
  },

  courses: {
    keywords: ['course', 'courses', 'lessons', 'piano', 'guitar', 'violin', 'drums', 'vocals', 'singing', 'voice', 'theory'],
    response: `Music Solutions School Courses:<br><br>

We offer professional training in:<br>
<ul>
<li><strong>Piano & Keyboard:</strong> Classical to contemporary keyboard techniques</li>
<li><strong>Guitar & Bass:</strong> Acoustic, electric, and bass styling</li>
<li><strong>Violin & Strings:</strong> Classical bowing and modern adaptations</li>
<li><strong>Drums & Percussion:</strong> Rhythm control, coordination, and styles</li>
<li><strong>Vocals & Voice:</strong> Vocal health, breath control, and performance</li>
<li><strong>Music Theory & Composition:</strong> Sight-reading, harmony, and ear training</li>
</ul>

Our instructors work with flexible scheduling options for both children and adults.`
  },

  studio: {
    keywords: ['studio', 'recording', 'audio', 'production', 'jingle', 'voiceover', 'track', 'mix', 'master'],
    response: `Recording Studio & Audio Services:<br><br>

We provide professional technical services including:<br>
<ul>
<li>Multitrack recording & digital editing</li>
<li>Mixing and mastering for artists and choirs</li>
<li>Commercial jingles and voiceover production</li>
<li>Audio consulting & equipment selection</li>
<li>Rehearsal space rental</li>
</ul>

Our studio is equipped with industry-standard hardware and software to ensure your projects sound stellar.`
  },

  hours: {
    keywords: ['hours', 'open', 'availability', 'schedule', 'when', 'days'],
    response: `We provide instruction and studio services on flexible schedules:<br><br>
<ul>
<li>Monday - Friday: 8:00 AM - 6:00 PM</li>
<li>Saturday: 9:00 AM - 4:00 PM</li>
<li>Sunday: Closed (Available for special bookings only)</li>
</ul>

Contact us to schedule a lesson time slot that works best for you.`
  },

  booking: {
    keywords: ['book', 'appointment', 'schedule', 'register', 'sign up', 'how to book', 'enroll', 'enrollment'],
    response: `How to Enroll at Music Solutions School:<br><br>
    
<ul>
<li>Contact Us - Call us or fill out our contact/enrollment form</li>
<li>Consultation - We'll assess your current musical level and goals</li>
<li>Customized Plan - We match you with the perfect instructor</li>
<li>Schedule Lessons - Choose dates and times that fit your calendar</li>
<li>Start Learning - Begin your musical journey with Accra's best!</li>
</ul>

📧 Visit our contact page or call +233 24 946 7108 to get started!`
  },

  contact: {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'support', 'help', 'customer service', 'get in touch'],
    response: `Get In Touch with MSS:

Visit our Contact page for multiple ways to reach us:<br><br>
<ul>
<li>Contact Form - Fill out the message/enrollment form on our contact page</li>
<li>Email - Send us an email at info@musicsolutionsschool.com</li>
<li>Call us: +233 24 946 7108</li>
</ul>

We're here to answer your questions and discuss how we can help you start your musical journey. Response time is typically within hours.<br><br>

👉 Go to: contact page`
  },

  team: {
    keywords: ['team', 'staff', 'professionals', 'qualifications', 'teachers', 'instructors', 'dominic', 'asare'],
    response: `Our team consists of: <br><br>

<ul>
<li>Mr. Dominic Ansah Asare - Founder & Principal Director</li>
<li>Experienced instrument instructors</li>
<li>Certified vocal coaches</li>
<li>Professional audio engineers & producers</li>
<li>Dedicated administrative staff</li>
</ul>

All instructors are highly qualified, experienced, and committed to providing excellent instruction. Learn more about us on our Team page.`
  },

  faq: {
    keywords: ['faq', 'frequently asked', 'question', 'common questions'],
    response: `Visit our FAQ page for answers to common questions about our courses, scheduling, and instruments!<br><br>

👉 Go to: FAQ page for more information`
  },

  others: {
    keywords: ['other', 'anything else', 'more', 'help', 'assist', 'support'],
    response: `I'm here to help with any questions you have about Music Solutions School's courses or services. Feel free to ask me anything!`
  },

  default: {
    response: `I can help you with information about: <br><br>
    <ul>
    <li>Our courses (Piano, Guitar, Drums, Vocals, Violin, Theory)</li>
    <li>Recording Studio & Technical Services</li>
    <li>How to contact and enroll</li>
    <li>Our team and founder Mr. Dominic Ansah Asare</li>
    <li>Class schedules and hours of operation</li>
    </ul><br>

What would you like to know?`
  }
};

class MusicSolutionsSchoolBot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.attachEventListeners();
    this.loadGreeting();
  }

  createChatbotHTML() {
    const container = document.createElement('div');
    container.className = 'chatbot-container';
    container.innerHTML = `
      <button class="chatbot-toggle" title="Chat with us">
        <i class="fas fa-comments"></i>
      </button>
      
      <div class="chatbot-window">
        <div class="chatbot-header">
          <h2>MSS Bot</h2>
          <button class="chatbot-close" title="Close chat">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="chatbot-messages"></div>
        
        <div class="chatbot-input-area">
          <input 
            type="text" 
            class="chatbot-input" 
            placeholder="Ask me anything..."
            autocomplete="off"
          >
          <button class="chatbot-send" title="Send message">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  }

  attachEventListeners() {
    const toggle = document.querySelector('.chatbot-toggle');
    const closeBtn = document.querySelector('.chatbot-close');
    const sendBtn = document.querySelector('.chatbot-send');
    const input = document.querySelector('.chatbot-input');
    const window = document.querySelector('.chatbot-window');

    toggle.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.closeChat());
    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Focus input when window opens
    const observer = new MutationObserver(() => {
      if (window.classList.contains('open')) {
        setTimeout(() => input.focus(), 100);
      }
    });
    observer.observe(window, { attributes: true, attributeFilter: ['class'] });
  }

  toggleChat() {
    this.isOpen ? this.closeChat() : this.openChat();
  }

  openChat() {
    const window = document.querySelector('.chatbot-window');
    const toggle = document.querySelector('.chatbot-toggle');
    window.classList.add('open');
    toggle.classList.add('active');
    this.isOpen = true;
  }

  closeChat() {
    const window = document.querySelector('.chatbot-window');
    const toggle = document.querySelector('.chatbot-toggle');
    window.classList.remove('open');
    toggle.classList.remove('active');
    this.isOpen = false;
  }

  loadGreeting() {
    const greeting = KnowledgeBase.greetings[Math.floor(Math.random() * KnowledgeBase.greetings.length)];
    this.addMessage(greeting, 'bot');
  }

  sendMessage() {
    const input = document.querySelector('.chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    this.showTypingIndicator();

    // Get response
    setTimeout(() => {
      const response = this.getResponse(message);
      this.removeTypingIndicator();
      this.addMessage(response, 'bot');
    }, 800);
  }

  getResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Check knowledge base
    for (const [key, value] of Object.entries(KnowledgeBase)) {
      if (key !== 'greetings' && value.keywords) {
        if (value.keywords.some(keyword => message.includes(keyword))) {
          return value.response;
        }
      }
    }

    // If message contains multiple keywords, try to combine responses
    if (message.includes('contact') || message.includes('reach') || message.includes('call')) {
      return KnowledgeBase.contact.response;
    }

    // Default response
    return KnowledgeBase.default.response;
  }

  addMessage(text, sender) {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'chatbot-message-content';
    contentDiv.innerHTML = text;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTypingIndicator() {
    const messagesContainer = document.querySelector('.chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot typing-indicator';
    typingDiv.innerHTML = `
      <div class="chatbot-message-content">
        <div class="chatbot-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  removeTypingIndicator() {
    const indicator = document.querySelector('.typing-indicator');
    if (indicator) indicator.remove();
  }
}

// Initialize chatbot when DOM is ready and expose instance globally
function initMSSBot() {
  try {
    window.MSSBot = new MusicSolutionsSchoolBot();
  } catch (e) {
    console.error('Failed to initialize MSS Bot', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMSSBot);
} else {
  initMSSBot();
}
