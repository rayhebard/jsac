<script>
  import mascot from '$lib/assets/images/Lon-E_Navigation.png';
  
  const tours = [
    {
      title: 'Basic Guided Tour',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/guided_tour_basic-square-e404431d4ac50d2b4620a74faeabe86d-3ke8ai0u95bp.webp',
      description: 'Join us for a comprehensive personally guided 1 hour tour of our state-of-the-art STEM Center for a behind-the-scenes look. Learn first-hand about our past, present and future innovations in technology. This experience is perfect for anyone ages 5-100 who is curious about STEM, robotics, Virtual Reality (VR), video game design, computer programming, and its impact on our future. Casual dress and comfy shoes recommended!',
      cta: 'Sign Up Today'
    },
    {
      title: 'Activity Bundle Tour',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/activity_bundle_tour-square-c2960393b6ac5dd5310512941b42d4c3-029nqy6bepro.webp',
      description: 'This 2 hour personally guided interactive experience includes everything in the Basic Guided Tour along with at least two of the following hands-on, experiential activities including robotics, video game design, Virtual Reality (VR) or Science on a Sphere (SOS) experience specifically tailored to your group. This tour is ideal for groups looking for hands-on experiences with a deeper dive into the world of STEM.',
      cta: 'Sign Up Today'
    },
    {
      title: 'Premium Package Tour',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Copy-of-DSC08609-scaled-square-8da955d366e38767f9328f2e8cc6c87f-mj9q2zdekg3o.jpg',
      description: "This extraordinary 3 hour personally guided interactive tour is the ultimate experience! It includes everything in the Activity Bundle Tour plus a private, inspiring talk and Q&A with Dr. Lonnie Johnson! This tour is perfect for those seeking an exclusive, customized STEM experience with an opportunity to meet, and take pictures with Dr. Johnson.",
      cta: 'Sign Up Today'
    }
  ];
  
  const venues = [
    { name: '8-80 Arena', image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/IMG_7324-square-bba91027da12e28edafe119a809e6078-v7bhs942l8dw.jpg' },
    { name: "Creator's Zone", image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/IMG_1531-square-73130e06b159320cf3375ceb2f48e95e-e64ajfwcqt8p.jpg' },
    { name: 'SOS Room', image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/IMG_1551-square-04990ecf98e952934ad23ce19b24724d-y6ul95e3hc7i.jpg' },
    { name: 'Main Stage', image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/IMG_1533-square-e1ea1fb508fef4c912488af0cb157a20-79y08h1aiwpn.jpg' },
  ];
</script>

<div class="tours-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Tours, Venue Rentals and Speaker Requests</h1>
        <img src={mascot} alt="Tours" class="page-header-mascot mascot-img" />
      </div>
    </div>
  </section>
  
  <section class="tours-section">
    <div class="container">
      <div class="section-title">
        <h2>Tours (aka "Educational Expeditions")</h2>
        <p>Our tours are an exciting way to learn first hand about our programs in just a few short hours!</p>
      </div>
      
      <div class="tours-list">
        {#each tours as tour, index}
          <div class="tour-item" class:reverse={index % 2 === 1}>
            <div class="tour-image">
              <img src={tour.image} alt={tour.title} />
            </div>
            <div class="tour-content">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <a href="https://johnsonstem.com/request-a-tour/" target="_blank" class="btn btn-primary">{tour.cta}</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="venues-section">
    <div class="container">
      <div class="section-title">
        <h2>Event Space Rental</h2>
        <p>Want to host an event at a unique and unforgettable venue? We can accommodate all size groups from less than a dozen to several hundred people.</p>
      </div>
      
      <div class="venues-grid">
        {#each venues as venue}
          <div class="venue-card">
            <div class="venue-image">
              <img src={venue.image} alt={venue.name} />
            </div>
            <h3>{venue.name}</h3>
          </div>
        {/each}
      </div>
      
      <div class="venue-cta">
        <a href="#/contact" class="btn btn-primary">Request Venue Rental</a>
      </div>
    </div>
  </section>
  
  <section class="speaker-section">
    <div class="container">
      <div class="speaker-content">
        <div class="speaker-image">
          <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/speaker_request-square-11f1acccc064d8ff6899f606a63abd3c-tx5fc9usvhew.webp" alt="Dr. Lonnie Johnson" />
        </div>
        <div class="speaker-info">
          <h2>Speaker Request</h2>
          <p>Our founder, Dr. Lonnie Johnson, is available twice a year for speaking engagements either as a keynote speaker or as part of a panel. To inquire, please fill out the form below.</p>
          <div class="speaker-social">
            <a href="https://www.instagram.com/drlonniejohnson" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-3 01-3.792.294-.825.318-1.465 1.035-1.792 1.835-.327.8-.294 1.92 0 2.793.294.8 1.035 1.465 1.792 1.792.8.327 1.92.294 2.793 0 .8-.294 1.465-1.035 1.792-1.792.327-.8.294-1.92 0-2.793-.294-.8-1.035-1.465-1.792-1.792C15.944 3 15.617 3 12 3zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1BmmEE5bCe/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/lonnie-g-johnson-aba0332a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@drlonniejohnson" target="_blank" rel="noopener noreferrer" title="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.39-3.53-4.42-3.53-8.11V8.5c0-1.17.14-2.35.41-3.47.2-.8.51-1.57.92-2.28.35-.6.76-1.17 1.22-1.69.03-.02.05-.03.08-.04V.02z"/></svg>
            </a>
          </div>
          <a href="#/contact" class="btn btn-primary">Request Speaker</a>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .tours-page {
    padding-top: var(--page-padding-top);
  }

  .page-header .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .page-header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .page-header {
    background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-darker) 100%);
    padding: var(--page-header-padding) 0;
    text-align: center;
  }
  
  .page-header-mascot {
    width: var(--page-header-mascot-size);
    height: var(--page-header-mascot-size);
    object-fit: contain;
    margin-bottom: 0.75rem;
  }
  
  .page-header h1 {
    font-size: var(--page-header-title-size);
    color: white;
  }
  
  .tours-section, .venues-section, .speaker-section {
    padding: 4rem 0;
  }
  
  .venues-section {
    background: var(--color-light);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }
  
  .section-title p {
    font-size: 1.0625rem;
    color: var(--color-gray);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .tours-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  
  .tour-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .tour-item.reverse .tour-image {
    order: 2;
  }
  
  .tour-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .tour-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .tour-image:hover img {
    transform: scale(1.03);
  }
  
  .tour-content h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--color-dark);
    margin-bottom: 1rem;
  }
  
  .tour-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-gray);
    margin-bottom: 1.5rem;
  }
  
  .venues-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .venue-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }
  
  .venue-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
  
  .venue-image {
    aspect-ratio: 4/3;
    overflow: hidden;
  }
  
  .venue-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .venue-card:hover .venue-image img {
    transform: scale(1.05);
  }
  
  .venue-card h3 {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-dark);
    padding: 1rem;
  }
  
  .venue-cta {
    text-align: center;
  }
  
  .speaker-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .speaker-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .speaker-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .speaker-info h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--color-dark);
    margin-bottom: 1rem;
  }
  
  .speaker-info p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-gray);
    margin-bottom: 1.5rem;
  }
  
  .speaker-social {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .speaker-social a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-light);
    border-radius: 50%;
    color: var(--color-gray);
    transition: all 0.2s ease;
  }
  
  .speaker-social a:hover {
    background: var(--color-primary);
    color: white;
  }
  
  .speaker-social svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 900px) {
    .tour-item {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .tour-item.reverse .tour-image {
      order: 0;
    }
    
    .speaker-content {
      grid-template-columns: 1fr;
    }
    
    .speaker-image {
      max-width: 280px;
      margin: 0 auto;
    }
  }
</style>