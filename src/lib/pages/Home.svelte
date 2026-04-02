<script>
  import { navigate } from '../../stores/page.js';
</script>

<div class="home-page">
  <section class="hero-banner">
    <div class="hero-card">
      <a href="https://www.tickettailor.com/events/johnsonstemactivitycenter" target="_blank" rel="noopener noreferrer">
        <img src="https://johnsonstem.com/wp-content/uploads/2026/02/JSAC-Innovator-Dinner-Banner.jpg" alt="JSAC Innovator Dinner - Get Tickets" />
      </a>
    </div>
  </section>
  
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">
        Empowering the Next Generation of <span class="highlight">Innovators</span>
      </h1>
      <p class="hero-subtitle">
        Our mission is to empower the next generation of innovators to dream big, build fearlessly, and tackle global challenges through Science, Technology, Engineering and Math (STEM).
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary" on:click={() => navigate('involved')}>
          Get Involved
        </button>
        <button class="btn btn-outline" on:click={() => navigate('programs')}>
          Our Programs
        </button>
      </div>
    </div>
  </section>
  
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">6,103</span>
          <span class="stat-label">Student Visits in 2024</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">92%</span>
          <span class="stat-label">JSAC graduates declared a STEM major in 2024</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">21,000</span>
          <span class="stat-label">Square feet dedicated to STEM programming</span>
        </div>
      </div>
    </div>
  </section>
  
  <section class="programs-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Programs</h2>
        <p>Explore the diverse range of programs and services we offer at Johnson STEM Activity Center.</p>
      </div>
      
      <div class="programs-grid">
        <div class="program-card">
          <div class="program-image">
            <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/100sra2023carrollga9797-square-3dbc575374e6761d4eb2b9655a4f85bc-qtcy94nl1kb5.jpg" alt="Robotics" />
          </div>
          <div class="program-content">
            <h3>Robotics</h3>
            <p>Designing, Building and Programming Robots. Our most popular program with immersive hands-on experiences.</p>
            <button class="program-link" on:click={() => navigate('programs')}>Learn More →</button>
          </div>
        </div>
        
        <div class="program-card">
          <div class="program-image">
            <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/computer_lab-square-0182277c16d99e811aba2f10387a754d-85jmq602zrl7.png" alt="Coding and Game Design" />
          </div>
          <div class="program-content">
            <h3>Coding & Game Design</h3>
            <p>Learn JAVA, Python, C++, and create your own video games using professional game engines.</p>
            <button class="program-link" on:click={() => navigate('programs')}>Learn More →</button>
          </div>
        </div>
        
        <div class="program-card">
          <div class="program-image">
            <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/image_2024-10-05_083820945-square-176a59ef06c207b1603dc35e4058cabf-x1ovr750tmlz.png" alt="Virtual Reality" />
          </div>
          <div class="program-content">
            <h3>Virtual Reality</h3>
            <p>Create in 3D with immersive VR experiences for design, exploration, and learning.</p>
            <button class="program-link" on:click={() => navigate('programs')}>Learn More →</button>
          </div>
        </div>
        
        <div class="program-card">
          <div class="program-image">
            <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/scienceOnASphere-square-838d0c557e3deca4d93eaf6073291183-8tye3o5a9g2k.jpg" alt="Science on a Sphere" />
          </div>
          <div class="program-content">
            <h3>Science on a Sphere</h3>
            <p>Exploring Earth and Beyond with NOAA's captivating educational sphere technology.</p>
            <button class="program-link" on:click={() => navigate('programs')}>Learn More →</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Start Your STEM Journey?</h2>
        <p>Join thousands of students who have discovered their passion for science, technology, engineering, and math at JSAC.</p>
        <div class="cta-buttons">
          <a href="https://donate.stripe.com/6oUdR97QS91x1OFdkp1RC01" target="_blank" class="btn btn-secondary">Donate</a>
          <button class="btn btn-outline" style="border-color: white; color: white;" on:click={() => navigate('contact')}>Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .home-page {
    padding-top: 72px;
  }
  
  .hero-banner {
    width: 100%;
    background: var(--color-dark);
    padding: 0;
  }
  
  .hero-banner .hero-card {
    max-width: 100%;
    transform: none;
  }
  
  .hero-banner .hero-card a {
    display: block;
  }
  
  .hero-banner .hero-card a img {
    width: 100%;
    height: auto;
    max-height: none;
    display: block;
  }
  
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    padding: 3rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    min-height: calc(90vh - 72px);
    background: 
      radial-gradient(ellipse at 30% 20%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
  }
  
  .hero-content {
    max-width: 520px;
  }
  
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    color: var(--color-dark);
  }
  
  .highlight {
    color: var(--color-primary);
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-gray);
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .hero-visual {
    position: relative;
  }
  
  .hero-card {
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    transform: rotate(2deg);
    transition: transform 0.3s ease;
    max-width: 100%;
  }
  
  .hero-card:hover {
    transform: rotate(0deg) scale(1.02);
  }
  
  .hero-card img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 70vh;
    object-fit: cover;
  }
  
  .stats-section {
    background: var(--color-dark);
    padding: 4rem 0;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: center;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .stat-number {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 280px;
    margin: 0 auto;
  }
  
  .programs-section {
    padding: 6rem 0;
    background: var(--color-light);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 1rem;
    color: var(--color-dark);
  }
  
  .section-header p {
    font-size: 1.125rem;
    color: var(--color-gray);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .program-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }
  
  .program-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
  
  .program-image {
    aspect-ratio: 16/10;
    overflow: hidden;
  }
  
  .program-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .program-card:hover .program-image img {
    transform: scale(1.05);
  }
  
  .program-content {
    padding: 1.5rem;
  }
  
  .program-content h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--color-dark);
  }
  
  .program-content p {
    font-size: 0.9375rem;
    color: var(--color-gray);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .program-link {
    background: none;
    border: none;
    color: var(--color-primary);
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    font-size: 0.9375rem;
    transition: color 0.2s ease;
  }
  
  .program-link:hover {
    color: var(--color-primary-dark);
  }
  
  .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  }
  
  .cta-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    color: white;
    margin-bottom: 1rem;
  }
  
  .cta-content p {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-section .btn-secondary {
    background: var(--color-secondary);
    color: var(--color-dark);
  }
  
  .cta-section .btn-secondary:hover {
    background: white;
  }
  
  .cta-section .btn-outline {
    border-color: white;
    color: white;
  }
  
  .cta-section .btn-outline:hover {
    background: white;
    color: var(--color-primary);
  }
  
  @media (max-width: 900px) {
    .hero-section {
      grid-template-columns: 1fr;
      padding: 2rem 1.5rem;
      text-align: center;
      gap: 2rem;
    }
    
    .hero-content {
      max-width: none;
    }
    
    .hero-visual {
      order: -1;
    }
    
    .hero-card {
      transform: none;
    }
    
  .hero-card a {
    display: block;
  }
  
  .hero-card a img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 80vh;
    object-fit: cover;
  }
    
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>