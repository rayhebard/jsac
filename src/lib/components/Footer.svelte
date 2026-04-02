<script>
  import { sidebarCollapsed } from '../../stores/page.js';
  
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Privacy Policy', href: 'https://johnsonstem.com/privacy-policy/' },
    { label: 'Board of Directors', href: '#/directors' },
    { label: 'Advisors', href: '#/directors' },
    { label: 'Partnerships', href: '#/about' },
  ];
  
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/johnsonSTEMac', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { label: 'Instagram', href: 'https://www.instagram.com/johnsonstemactivitycenter/', icon: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-3 01-3.792.294-.825.318-1.465 1.035-1.792 1.835-.327.8-.294 1.92 0 2.793.294.8 1.035 1.465 1.792 1.792.8.327 1.92.294 2.793 0 .8-.294 1.465-1.035 1.792-1.792.327-.8.294-1.92 0-2.793-.294-.8-1.035-1.465-1.792-1.792C15.944 3 15.617 3 12 3zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z' },
    { label: 'X (Twitter)', href: 'https://twitter.com/ActivityStem', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/johnsonstemactivitycenter/', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z' },
  ];
</script>

<footer class="footer" class:sidebar-collapsed={$sidebarCollapsed}>
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-icon">
            <img src="/Lon-E_Contact_or_Email.png" alt="JSAC Mascot" class="mascot-img" />
          </div>
          <div class="logo-text">
            <span class="logo-title">Johnson STEM</span>
            <span class="logo-subtitle">Activity Center</span>
          </div>
        </div>
        <p class="footer-tagline">
          Empowering the next generation of innovators through Science, Technology, Engineering and Math.
        </p>
        <div class="footer-social">
          {#each socialLinks as social}
            <a href={social.href} target="_blank" rel="noopener noreferrer" class="social-link" title={social.label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d={social.icon}/>
              </svg>
            </a>
          {/each}
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          {#each quickLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Get In Touch</h4>
        <div class="contact-info">
          <a href="tel:+14045842475" class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>(404) 584-2475 Ext 4</span>
          </a>
          <a href="mailto:info@johnsonstem.com" class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>info@johnsonstem.com</span>
          </a>
          <a href="https://www.google.com/maps/place/Johnson+STEM+Activity+Center/@33.7493832,-84.3801862,15z/data=!4m2!3m1!1s0x0:0xa3716e8958ebf272" target="_blank" rel="noopener noreferrer" class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
            </svg>
            <span>275 Decatur St. SE, Atlanta, GA 30312</span>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {currentYear} Johnson STEM Activity Center. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-darker);
    color: rgba(255, 255, 255, 0.8);
    padding: 4rem 0 2rem;
    margin-top: auto;
  }
  
  .footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-left: 260px;
    transition: margin-left 0.3s ease;
  }
  
  .footer.sidebar-collapsed .footer-container {
    margin-left: 72px;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .footer-brand {
    max-width: 320px;
  }
  
  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .logo-icon {
    width: 44px;
    height: 44px;
  }
  
  .logo-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
  }
  
  .logo-title {
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 500;
    color: white;
    line-height: 1.1;
  }
  
  .logo-subtitle {
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .footer-tagline {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .footer-social {
    display: flex;
    gap: 0.75rem;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s ease;
  }
  
  .social-link:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .footer-section h4 {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .footer-section a:hover {
    color: var(--color-primary-light);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .contact-item:hover {
    color: var(--color-primary-light);
  }
  
  .contact-item svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-bottom p {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .footer-brand {
      max-width: none;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>