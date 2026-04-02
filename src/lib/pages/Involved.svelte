<script>
  import mascot from '$lib/assets/images/Lon-E_Collaborate_or_Ask.png';
  
  const opportunities = [
    {
      title: 'Role Model / Mentoring',
      description: 'Can you be a guest speaker, a field trip host, or provide opportunities for job shadowing? Can you sponsor an intern or provide career fair opportunities? Can you coach teams and provide leadership and life coaching to students or give mini-classes and collaborate with students in person or through virtual resources?'
    },
    {
      title: 'Develop Partnerships',
      description: 'If you can identify or recruit and manage partnerships with other organizations that support our mission, we need you.'
    },
    {
      title: 'Marketing / Communications / Visual Arts',
      description: 'Develop your skills by volunteering to do any of the following: social media, web communications, community outreach, marketing, and event development, or project management, photography and videography. We are always looking for photographers and videographers.'
    },
    {
      title: 'Fundraising',
      description: 'Fundraising is an important part of our continuing success. Individual and corporate support is vital. All donations received are crucial to keeping the program running. We always need help obtaining individual and corporate support to help further our mission.'
    },
    {
      title: 'Be a Tour Guide',
      description: 'Are you a great communicator? Are you personable and can easily strike up a conversation with a stranger? Are you interested in sharing the history of JSAC with others? If so, WE NEED YOU!'
    }
  ];
</script>

<div class="involved-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Volunteer Opportunities</h1>
        <img src={mascot} alt="Get Involved" class="page-header-mascot mascot-img" />
      </div>
      <p class="lead">Help us make a difference. Want to volunteer to help out at the Johnson STEM Activity Center? We'd love to have you.</p>
    </div>
  </section>
  
  <section class="volunteer-section">
    <div class="container">
      <div class="volunteer-content">
        <div class="volunteer-image">
          <img src="https://johnsonstem.com/wp-content/uploads/2025/12/DSC08397-scaled.jpg" alt="Mentoring" />
        </div>
        <div class="volunteer-text">
          <h2>Learn more about Volunteering</h2>
          
          <div class="opportunities-list">
            {#each opportunities as opportunity}
              <div class="opportunity-item">
                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
              </div>
            {/each}
          </div>
          
          <a href="https://johnsonstem.com/register-to-volunteer/" target="_blank" class="btn btn-primary">Register to Volunteer</a>
        </div>
      </div>
    </div>
  </section>
  
  <section class="donate-section">
    <div class="container">
      <div class="donate-content">
        <h2>Donate to JSAC</h2>
        <p>When you donate to JSAC, you're enabling us to provide quality STEM education and opportunities, ensuring underserved students have access to a brighter future.</p>
        <a href="https://donate.stripe.com/6oUdR97QS91x1OFdkp1RC01" target="_blank" class="btn btn-secondary">Go to Donation Page</a>
      </div>
    </div>
  </section>
</div>

<style>
  .involved-page {
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
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
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
    margin-bottom: 0.5rem;
  }
  
  .page-header .lead {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .volunteer-section {
    padding: 6rem 0;
  }
  
  .volunteer-content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: start;
  }
  
  .volunteer-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    position: sticky;
    top: 100px;
  }
  
  .volunteer-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .volunteer-image:hover img {
    transform: scale(1.02);
  }
  
  .volunteer-text h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: var(--color-dark);
    margin-bottom: 2rem;
  }
  
  .opportunities-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .opportunity-item {
    padding: 1.5rem;
    background: var(--color-light);
    border-radius: 0.75rem;
    border-left: 4px solid var(--color-primary);
    transition: all 0.2s ease;
  }
  
  .opportunity-item:hover {
    box-shadow: var(--shadow-sm);
    transform: translateX(4px);
  }
  
  .opportunity-item h3 {
    font-family: var(--font-body);
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }
  
  .opportunity-item p {
    font-size: 0.9375rem;
    color: var(--color-gray);
    line-height: 1.6;
  }
  
  .donate-section {
    padding: 6rem 0;
    background: var(--color-dark);
  }
  
  .donate-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .donate-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: white;
    margin-bottom: 1rem;
  }
  
  .donate-content p {
    font-size: 1.0625rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    line-height: 1.7;
  }
  
  .donate-section .btn-secondary {
    background: var(--color-secondary);
    color: var(--color-dark);
  }
  
  @media (max-width: 900px) {
    .volunteer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .volunteer-image {
      position: static;
    }
  }
</style>