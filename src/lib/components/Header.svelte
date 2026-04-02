<script>
  import { navigate } from '../../stores/page.js';
  
  export let currentPage = 'home';
</script>

<header class="header">
  <div class="header-container">
    <div class="logo-section">
      <a href="#/home" class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
            <path d="M12 20L20 12L28 20L20 28L12 20Z" fill="currentColor"/>
            <circle cx="20" cy="20" r="6" fill="white"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-title">Johnson STEM</span>
          <span class="logo-subtitle">Activity Center</span>
        </div>
      </a>
    </div>
    
    <div class="header-actions">
      <a href="https://donate.stripe.com/6oUdR97QS91x1OFdkp1RC01" target="_blank" class="donate-btn">
        <span>Donate</span>
      </a>
    </div>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo-section {
    flex-shrink: 0;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-dark);
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    color: var(--color-primary);
  }
  
  .logo-icon svg {
    width: 100%;
    height: 100%;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
  }
  
  .logo-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.1;
  }
  
  .logo-subtitle {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-gray);
  }
  
  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-gray);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }
  
  .nav-link:hover {
    color: var(--color-dark);
    background: rgba(0, 0, 0, 0.04);
  }
  
  .nav-link.active {
    color: var(--color-primary);
    background: rgba(13, 148, 136, 0.08);
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .donate-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.625rem 1.25rem;
    background: var(--color-secondary);
    color: var(--color-dark);
    font-weight: 600;
    font-size: 0.875rem;
    border-radius: 2rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .donate-btn:hover {
    background: var(--color-secondary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .mobile-menu-btn {
    display: none;
    padding: 0.5rem;
    background: none;
    border: none;
    color: var(--color-dark);
    cursor: pointer;
  }
  
  .mobile-menu-btn svg {
    width: 24px;
    height: 24px;
  }
  
  .mobile-nav {
    display: none;
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    background: white;
  }
  
  .mobile-nav-link {
    display: block;
    padding: 0.75rem 0;
    font-size: 1rem;
    color: var(--color-gray);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .mobile-nav-link.active {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  .mobile-donate-btn {
    display: block;
    margin-top: 1rem;
    padding: 0.875rem;
    background: var(--color-secondary);
    color: var(--color-dark);
    font-weight: 600;
    text-align: center;
    border-radius: 0.5rem;
    text-decoration: none;
  }
  
  @media (max-width: 900px) {
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-btn {
      display: block;
    }
    
    .mobile-nav {
      display: block;
    }
  }
</style>