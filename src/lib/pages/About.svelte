<script>
  const partnerships = [
    { name: 'forever_young', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/forever_young.webp' },
    { name: 'jrei', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/jrei.webp' },
    { name: 'millennium_training', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/millennium_training_systems-300x52.webp' },
    { name: 'smart_lighting', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/smart_lighting_soulutions.png' },
    { name: 'Delta', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/DeltaCommunity.png' },
    { name: 'Meta', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/Meta-300x169.png' },
    { name: 'Clark Atlanta', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/ClarkAtlantaUniversity.png' },
    { name: 'Woodward Fund', img: 'https://johnsonstem.com/wp-content/uploads/2024/10/The-David-Helen-and-Marian-Woodward-Fund.jpg' },
    { name: 'Johnson Energy', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-1-300x136.png' },
    { name: 'SAMM', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-3.png' },
    { name: 'AIP', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-4-300x124.png' },
    { name: 'Trust Dale', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-7.png' },
    { name: 'Georgia Power', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-8-293x300.jpg' },
    { name: 'NASA', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-9-300x300.png' },
    { name: 'Lemae', img: 'https://johnsonstem.com/wp-content/uploads/2025/12/unnamed-300x146.png' },
  ];
</script>

<div class="about-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>About Us</h1>
        <img src="/src/assets/Lon-E_Welcome_or_Info.png" alt="About JSAC" class="page-header-mascot mascot-img" />
      </div>
      <p class="lead">We are passionate about helping the next generation become preeminent innovators!</p>
    </div>
  </section>
  
  <section class="mission-section">
    <div class="container">
      <div class="mission-content">
        <h2>Children are our Future</h2>
        <p>
          We are passionate about helping the next generation become preeminent innovators! Whether you're a novice or a geek, an elementary, middle or high schooler — there is a place for you here. Our community of students, mentors, coaches, volunteers, and supporters are dedicated to helping you succeed in STEM and in life.
        </p>
        <p>
          Over the past twenty years, thousands of students from the Atlanta metropolitan area and across Georgia have participated in a program at our Center. With 54 Title 1 Atlanta Public Schools (APS) located within a 10 mile radius of our Center, we will never stop working to help narrow the educational inequities and the digital divide between the "haves" and the "have nots". We are making the world a more just and STEM-equitable place – one student at a time!
        </p>
      </div>
      <div class="mission-image">
        <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/20221203_124627-scaled-landscape-e93a2a4eea7b4825a309f9189ef60406-x7gu9pinskt2.jpg" alt="Problem and solution board" />
      </div>
    </div>
  </section>
  
  <section class="history-section">
    <div class="container">
      <div class="history-grid">
        <div class="history-image">
          <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/students-smiling-landscape-5ebd90b8f96f5bf5fc8adf9115540921-okt0hcbxad2s.webp" alt="Students group shot" />
        </div>
        <div class="history-content">
          <h2>Our History</h2>
          <p>
            In 2005, Dr. Johnson partnered with Dean Kamen (FIRST Robotics) and Bart Sudderth (Millennium Training Systems) to launch a robotics program for underserved youth in Atlanta, donating part of his building for the initiative.
          </p>
          <p>
            The program started with 6 students and one team but grew rapidly. By 2014, over 200 students from multiple teams used the space, and by 2016, 2,000 students participated. Renamed the Johnson STEM Activity Center in 2017, it became a nonprofit, serving over 10,000 students by 2019 with the addition of a modern computer lab.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section class="founder-section">
    <div class="container">
      <div class="founder-grid">
        <div class="founder-image">
          <img src="https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Dr_Lonnie_Johnson_Lab_Picture-1-landscape-67e3d20b30ad16e881202dedc623e29f-ra6kdhxo0lv3.webp" alt="Dr Lonnie Johnson in the Lab" />
        </div>
        <div class="founder-content">
          <h2>Our Founder</h2>
          <p>
            Former NASA engineer and rocket scientist, Dr. Lonnie Johnson is a prolific inventor in the energy, technology, and consumer product sectors. He is on a mission to save the planet and has developed some of the most advanced green energy technologies in the world, but is well known for his popular and wildly successful invention, the Super Soaker water gun.
          </p>
          <p>
            He has been awarded over 150 patents for his innovations and was inducted into the National Inventors Hall of Fame. He has received numerous awards for his philanthropic work and is very passionate about closing the educational gap that plagues millions of children across the country.
          </p>
          <p>
            He is the embodiment of his favorite word, "perseverance" and believes that students learn best by eagerly taking on the most difficult challenges and learning from their own mistakes.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section class="partnerships-section">
    <div class="container">
      <div class="section-title">
        <h2>Partnerships</h2>
      </div>
      <div class="partnerships-grid">
        {#each partnerships as partnership}
          <div class="partner-logo">
            <img src={partnership.img} alt={partnership.name} />
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .about-page {
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
    margin-bottom: 0.5rem;
  }
  
  .page-header .lead {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .mission-section {
    padding: 6rem 0;
  }
  
  .mission-content {
    max-width: 640px;
  }
  
  .mission-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    margin-bottom: 1.5rem;
    color: var(--color-dark);
  }
  
  .mission-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--color-gray);
    margin-bottom: 1.5rem;
  }
  
  .mission-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .mission-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .mission-section .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .history-section {
    padding: 6rem 0;
    background: var(--color-light);
  }
  
  .history-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .history-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .history-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .history-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    margin-bottom: 1.5rem;
    color: var(--color-dark);
  }
  
  .history-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--color-gray);
    margin-bottom: 1rem;
  }
  
  .founder-section {
    padding: 6rem 0;
  }
  
  .founder-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;
  }
  
  .founder-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .founder-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .founder-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    margin-bottom: 1.5rem;
    color: var(--color-dark);
  }
  
  .founder-content p {
    font-size: 1.0625rem;
    line-height: 1.8;
    color: var(--color-gray);
    margin-bottom: 1rem;
  }
  
  .partnerships-section {
    padding: 6rem 0;
    background: var(--color-light);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: var(--color-dark);
  }
  
  .partnerships-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 2rem;
    align-items: center;
  }
  
  .partner-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-sm);
    height: 100px;
  }
  
  .partner-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 900px) {
    .mission-section .container,
    .history-grid,
    .founder-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .mission-image,
    .history-image,
    .founder-image {
      order: -1;
    }
  }
</style>