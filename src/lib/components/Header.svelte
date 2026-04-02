<script>
  import { navigate } from '../../stores/page.js';
</script>

<header class="header">
  <div class="header-container">
    <div class="logo-section">
      <a href="#/home" class="logo">
        <img src="/src/assets/Lon-E_Welcome_or_Info.png" alt="JSAC Mascot" class="header-mascot" />
        <img src="/src/assets/HeaderLogo01-1536x890.png" alt="Johnson STEM Activity Center" class="header-logo" />
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
    background: linear-gradient(90deg, #7C3AED 0%, #14B8A6 100%);
  }
  
  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
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
    gap: 0.5rem;
  }

  .header-mascot {
    height: 36px;
    width: auto;
    object-fit: contain;
  }
  
  .header-logo {
    height: 44px;
    width: auto;
    object-fit: contain;
  }
  
  .donate-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #F97316;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    border-radius: 2rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .donate-btn:hover {
    background: #EA580C;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  @media (max-width: 900px) {
    .header-mascot {
      height: 28px;
    }
    .header-logo {
      height: 36px;
    }
  }
</style>