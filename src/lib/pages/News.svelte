<script>
  import mascot from '$lib/assets/images/Lon-E_success.png';
  
  const articles = [
    {
      title: 'College majors with the highest and lowest rate of return',
      image: 'https://johnsonstem.com/wp-content/uploads/2024/10/100sra2023frcandersonsc9152-1-1024x683.jpg',
      description: 'Earning a degree is almost always worthwhile, research shows, but some majors pay off more than others.',
      link: 'https://www.cnbc.com/2024/03/14/here-are-college-majors-with-the-highest-and-lowest-rate-of-return.html'
    },
    {
      title: "Black Children Are Highly Interested In STEM Careers—They Just Lack Early Access, According To New Data",
      image: 'https://johnsonstem.com/wp-content/uploads/2024/10/Students-doing-a-robotics-activity-@JSAC-September-2023-2-1024x768.jpeg',
      description: "Black children are interested in careers in STEM, but access gaps make it a bit harder for their dreams to become a reality.",
      link: 'https://www.essence.com/news/money-career/black-children-youth-stem/'
    }
  ];
  
  const podcasts = [
    { 
      title: 'JSAC STEMCast: The Influence of Robotics', 
      videoId: 'C0cs4wZGnYU',
      description: 'Exploring the impact of robotics in education and the future of STEM.'
    },
    { 
      title: 'JSAC STEMCast: Our Status in Tech', 
      videoId: 'C0cs4wZGnYU',
      description: 'A look at the current state of technology and innovation.'
    },
    { 
      title: 'JSAC STEMCast: The Art of Engineering With Dr. Lonnie Johnson', 
      videoId: 'z4uu-2nn5Y0',
      description: 'Dr. Lonnie Johnson shares insights on engineering and innovation.'
    },
    { 
      title: 'JSAC STEMCast: Building STEM from Scratch', 
      videoId: 'z4uu-2nn5Y0',
      description: 'How to build a foundation in STEM education.'
    },
    { 
      title: 'JSAC STEMCast: Cyber Security - Securing STEM Into Our Lives', 
      videoId: 'gK24lJRbVZ4',
      description: 'Understanding cybersecurity in our modern world.'
    },
  ];
</script>

<div class="news-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>News & Media</h1>
        <img src={mascot} alt="News & Media" class="page-header-mascot mascot-img" />
      </div>
    </div>
  </section>
  
  <section class="articles-section">
    <div class="container">
      <div class="section-title">
        <h2>Articles</h2>
      </div>
      <div class="articles-grid">
        {#each articles as article}
          <article class="article-card">
            <div class="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div class="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" class="article-link">Learn more</a>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="podcast-section">
    <div class="container">
      <div class="podcast-header">
        <div class="podcast-logo">
          <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/jsac_stemcast-square-ed8594e0bd3ac7960dabe24770c8f0a9-lqh36wnvidyr.png" alt="JSAC STEMCast" />
        </div>
        <div class="podcast-intro">
          <h2>JSAC STEMCast</h2>
          <p>The JSAC STEMCast Podcast drives conversations about how STEM (Science Technology, Engineering, and Math) are all around us. With distinguished guests, we explore their careers and experience with STEM, unpacking how you can interact with STEM too!</p>
        </div>
      </div>
      
      <div class="featured-video">
        <div class="video-wrapper-large">
          <iframe 
            loading="lazy"
            src="https://www.youtube.com/embed/WdKyhct8Uvw" 
            title="JSAC STEMCast: Science, Spirituality, and Emotional Health With Dr. Sylvia Bartley"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="featured-info">
          <h3>JSAC STEMCast: Science, Spirituality, and Emotional Health With Dr. Sylvia Bartley</h3>
        </div>
      </div>
      
      <div class="video-grid">
        {#each podcasts as podcast}
          <div class="video-card">
            <div class="video-wrapper">
              <iframe 
                loading="lazy"
                src="https://www.youtube.com/embed/{podcast.videoId}" 
                title={podcast.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            <div class="video-info">
              <h3>{podcast.title}</h3>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .news-page {
    padding-top: var(--page-padding-top);
  }
  
  .page-header {
    background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-darker) 100%);
    padding: var(--page-header-padding) 0;
    text-align: center;
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
  
  .articles-section {
    padding: 4rem 0;
    background: var(--color-light);
  }
  
  .podcast-section {
    padding: 4rem 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: var(--color-dark);
  }
  
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }
  
  .article-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }
  
  .article-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
  
  .article-image {
    aspect-ratio: 16/10;
    overflow: hidden;
  }
  
  .article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .article-card:hover .article-image img {
    transform: scale(1.05);
  }
  
  .article-content {
    padding: 1.5rem;
  }
  
  .article-content h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--color-dark);
    margin-bottom: 0.75rem;
  }
  
  .article-content p {
    font-size: 0.9375rem;
    color: var(--color-gray);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .article-link {
    display: inline-block;
    color: var(--color-primary);
    font-weight: 500;
    font-size: 0.9375rem;
  }
  
  .article-link:hover {
    color: var(--color-primary-dark);
  }
  
  .podcast-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    padding: 2rem;
    background: var(--color-light);
    border-radius: 1rem;
  }
  
  .podcast-logo {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
  }
  
  .podcast-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .podcast-intro h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--color-dark);
    margin-bottom: 0.75rem;
  }
  
  .podcast-intro p {
    font-size: 1rem;
    color: var(--color-gray);
    line-height: 1.6;
  }
  
  /* removed video-grid styles */
  
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .video-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }

  .video-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-info {
    padding: 1rem;
  }

  .video-info h3 {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-dark);
    line-height: 1.4;
  }
  
  .featured-video {
    margin-bottom: 3rem;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  
  .video-wrapper-large {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  
  .video-wrapper-large iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .featured-info {
    padding: 1.5rem;
  }
  
  .featured-info h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--color-dark);
  }
  
  /* removed video-list styles */

  @media (max-width: 768px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }
    
    .podcast-header {
      flex-direction: column;
      text-align: center;
    }
  }
</style>