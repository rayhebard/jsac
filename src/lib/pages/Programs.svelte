<script>
  const programs = [
    {
      title: 'Robotics',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/100sra2023carrollga9797-square-3dbc575374e6761d4eb2b9655a4f85bc-qtcy94nl1kb5.jpg',
      description: 'Designing, Building and Programming Robots',
      details: 'Robotics, our most popular program, empowers students through immersive, hands-on experiences in design, engineering, physics, math and computer programming. This program gives students access to our 20,000 square foot Center with design/build areas, innovation and maker space, a computer lab, a competition field and most importantly, one-on-one mentorship with engaging, collaborative learning opportunities. Whether a student is a novice or has several years experience in robotics, there is a place for every student at JSAC.',
      cta: 'Sign Up Today'
    },
    {
      title: 'Coding and Game Design',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/computer_lab-square-0182277c16d99e811aba2f10387a754d-85jmq602zrl7.png',
      description: 'Empowering the next generation of digital creators',
      details: 'Students can learn JAVA, Python, C++, SolidWorks, CAD and other programming languages in a dynamic, state of the art computer lab. Students also have an opportunity to create their own unique, one-of-a-kind video game using the same engines utilized in some popular games such as "Rocket League" and "Hogwarts Legacy". This gives students the opportunity to engage with programming principles in a new and exciting way. Working with "Pepper", a humanoid robot, students also learn how to build a better world using AI technology.',
      cta: 'Sign Up Today'
    },
    {
      title: 'Virtual Reality (VR)',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/image_2024-10-05_083820945-square-176a59ef06c207b1603dc35e4058cabf-x1ovr750tmlz.png',
      description: 'Creating in 3D',
      details: 'Our Virtual Reality (VR) program opens a world of fully immersive, three dimensional (3D) learning in countless subjects through use of a VR headset. Virtual Reality is not just a cutting-edge technology, it\'s a transformative tool that helps students design, explore, create and interact with digital environments in ways that surpass traditional learning. Create, design and work with a prototype, walk through the International Space Station, learn Physics, climb the Himalayas or virtually dissect an animal without a single real world consequence.',
      cta: 'Sign Up Today'
    },
    {
      title: 'Science on a Sphere (SOS)',
      image: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/scienceOnASphere-square-838d0c557e3deca4d93eaf6073291183-8tye3o5a9g2k.jpg',
      description: 'Exploring Earth and Beyond',
      details: 'Science On a Sphere® (SOS) is a captivating educational tool that brings learning to life through a six (6) foot diameter sphere developed by the National Oceanic and Atmospheric Administration (NOAA). Students, educators and scientists can learn a vast array of topics. Archived and real time data can be accessed through NASA\'s satellites orbiting the Earth and can be displayed on the SOS providing students with up to the most accurate and up-to-the-minute information. Some subject areas include: meteorology, sustainability and climate change, oceanography, marine ecosystems, astronomy and planetary science as well as many others.',
      cta: 'Sign Up Today'
    }
  ];
</script>

<div class="programs-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Our Programs</h1>
        <img src="/Lon-E_Thinking.png" alt="Programs" class="page-header-mascot mascot-img" />
      </div>
      <p class="lead">Explore the diverse range of programs and services we offer at Johnson STEM Activity Center. Each program is carefully designed to foster curiosity, creativity, and critical thinking, equipping students with the skills they need to thrive in STEM fields.</p>
    </div>
  </section>
  
  <section class="programs-section">
    <div class="container">
      <div class="programs-list">
        {#each programs as program, index}
          <div class="program-item" class:reverse={index % 2 === 1}>
            <div class="program-image">
              <img src={program.image} alt={program.title} loading="lazy" />
            </div>
            <div class="program-content">
              <h2>{program.title}</h2>
              <p class="program-description">{program.description}</p>
              <p class="program-details">{program.details}</p>
              <a href="https://johnsonstem.com/program-application/" target="_blank" class="btn btn-primary">{program.cta}</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .programs-page {
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
    margin-bottom: 0.5rem;
  }
  
  .page-header .lead {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 700px;
    margin: 0 auto;
  }
  
  .programs-section {
    padding: 4rem 0;
  }
  
  .programs-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  
  .program-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .program-item.reverse .program-image {
    order: 2;
  }
  
  .program-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .program-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .program-image:hover img {
    transform: scale(1.03);
  }
  
  .program-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: var(--color-dark);
    margin-bottom: 0.75rem;
  }
  
  .program-description {
    font-size: 1.25rem;
    color: var(--color-primary);
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .program-details {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-gray);
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 900px) {
    .program-item {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .program-item.reverse .program-image {
      order: 0;
    }
  }
</style>