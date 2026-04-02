<script>
  const boardMembers = [
    { name: 'Dr. Lonnie Johnson', role: 'Chairman of Board', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/lonnie_johnson-circle-a08fc0a1cbd4f7e1504b2d8630a8b0b7-.webp', linkedin: 'https://www.linkedin.com/in/lonnie-g-johnson-aba0332a' },
    { name: 'Dr. Sylvia Bartley', role: 'Vice Chair', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/sylvia_bartley-circle-d79665b83802812db3dd136fc520e2b6-.webp', linkedin: 'https://www.linkedin.com/in/sylvia-bartley/' },
    { name: 'Bola Ogungbemi', role: 'Treasurer', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Bola-Ogungbemi2-circle-9c9044175509850d0eaa3a537cf67da9-.png', linkedin: 'https://www.linkedin.com/in/bola-ogungbemi-cpa-9387147' },
    { name: 'Margie Tuckson', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/MargieThompson-circle-9a584b5592cdf4c7adce5e1dfab473da-.jpg', linkedin: 'https://www.linkedin.com/in/margie-tuckson-81979023/' },
    { name: 'Dale Cardwell', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Dale-Cardwell-Headshot-circle-c8cb5f4039c6194dd937cf9758962a6b-.jpg', linkedin: 'https://www.linkedin.com/in/dale-cardwell' },
    { name: 'Monica Pearson', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/monica_pearson-circle-de5cb4de29aaeefbf3ae9dc71dc0bf63-.webp', linkedin: 'https://www.linkedin.com/in/monicapearson' },
    { name: 'Robyn Clayton', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/RobynClayton-circle-1ea076227a3ba65aa17719ebe8733021-.jpg', linkedin: 'https://www.linkedin.com/in/robyn-clayton' },
    { name: 'Wren Howell', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/wrenHowellHeadshot-circle-11005482421c4e88c1bcda3bb425a1d7-.jpg', linkedin: 'https://www.linkedin.com/in/wren-howell' },
    { name: 'Elizabeth Gilchrist', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Elizabeth-Gilchrist-Headshot-circle-1a9cd88b1c2a811ffcf6211077d8c1f5-.jpeg', linkedin: 'https://www.linkedin.com/in/elizabeth-gilchrist-9677617/' },
    { name: 'Eddie Barnett', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/Eddie-Barnett2-circle-c6773cfe12a6195a29475bac53de3d5f-.png', linkedin: 'https://www.linkedin.com/in/eddie-barnett-msm-96400616' },
    { name: 'Sophia Huynh', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/sophia_huynh-circle-033a408750551fdb7e933759a6f3687c-.webp', linkedin: 'https://www.linkedin.com/in/sophia-huynh-845a4118a/' },
    { name: 'Degreer Harris', role: 'Board Member', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/DeGreerHarris-circle-21b6f614473b51cf1afc76aafd531a00-.jpg', linkedin: 'https://www.linkedin.com/in/degreerharris/' },
  ];
  
  const advisoryCouncil = [
    { name: 'Fernando Sanchez', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/fernando_sanchez-circle-65f662926717a1c59f0b62c86a4db5a4-.webp', linkedin: 'https://www.linkedin.com/in/fernandoisanchez/' },
    { name: 'Ray Hebard', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/ray_hebard-circle-0952737bc5bb3a25a1d4f969ed302739-.webp', linkedin: 'https://www.linkedin.com/in/rayhebard/' },
    { name: 'Dr. Warren Edwards', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/warren_edwards-circle-74193f2a8e527f2b41c9d2f72fae0a9c-.webp', linkedin: 'https://www.linkedin.com/in/drwarrenpedwards/' },
    { name: 'Sydney Dinkins', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/sydney_dinkins-circle-8b07e1bafcf94b66cb7fcc86d7271740-.webp', linkedin: 'https://www.linkedin.com/in/sydney-m-dinkins/' },
    { name: 'Dr. Cheryl Love', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/DrCherylLove-circle-7845b63a42a93eafacf85b966bb2df64-.jpg', linkedin: 'https://www.linkedin.com/in/cheryl-love-7b730163/' },
    { name: 'Maya Negishi', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/MayaHeadshot-circle-8256f12dbddb9e581f6215118710d5e9-.png', linkedin: 'https://www.linkedin.com/in/maya-n-9619a9b/' },
    { name: 'Tony Pace', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/TonyPace-circle-c5c769accd1d95fe597f801bd10435cb-.jpg', linkedin: 'https://www.linkedin.com/in/anthony-pace-double-mba-engineer-61610b68/' },
    { name: 'Ryan Thompson', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/RyanThompson-circle-2f6595700626f27c7703ca14911906c3-.jpg', linkedin: 'https://www.linkedin.com/in/ryan-thompson-b615b123/' },
    { name: 'Davion Vaughn', img: 'https://johnsonstem.com/wp-content/uploads/bb-plugin/cache/IMG_2680_216x217-circle-5f1a5b15851bbd609dba3cf7f0b519c1-.jpg', linkedin: 'https://www.linkedin.com/in/davion-v-03568638/' },
  ];
</script>

<div class="directors-page">
  <section class="page-header">
    <div class="container">
      <h1>Board of Directors and Advisory Council</h1>
    </div>
  </section>
  
  <section class="board-section">
    <div class="container">
      <div class="section-title">
        <h2>Board of Directors</h2>
      </div>
      <div class="members-grid">
        {#each boardMembers as member}
          <div class="member-card">
            <div class="member-image">
              <img src={member.img} alt={member.name} />
            </div>
            <div class="member-info">
              <h3>{member.name}</h3>
              <span class="member-role">{member.role}</span>
              {#if member.linkedin}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="member-linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="advisory-section">
    <div class="container">
      <div class="section-title">
        <h2>Advisory Council</h2>
      </div>
      <div class="members-grid">
        {#each advisoryCouncil as member}
          <div class="member-card">
            <div class="member-image">
              <img src={member.img} alt={member.name} />
            </div>
            <div class="member-info">
              <h3>{member.name}</h3>
              {#if member.linkedin}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="member-linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .directors-page {
    padding-top: 72px;
  }
  
  .page-header {
    background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-darker) 100%);
    padding: 4rem 0;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: white;
  }
  
  .board-section, .advisory-section {
    padding: 4rem 0;
  }
  
  .board-section {
    background: var(--color-light);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--color-dark);
  }
  
  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
  }
  
  .member-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
  }
  
  .member-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
  
  .member-image {
    aspect-ratio: 1;
    overflow: hidden;
    background: var(--color-light);
  }
  
  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .member-card:hover .member-image img {
    transform: scale(1.05);
  }
  
  .member-info {
    padding: 1.25rem;
    text-align: center;
    position: relative;
  }
  
  .member-info h3 {
    font-family: var(--font-body);
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 0.25rem;
  }
  
  .member-role {
    display: block;
    font-size: 0.875rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }
  
  .member-linkedin {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--color-light);
    border-radius: 50%;
    color: #0A66C2;
    transition: all 0.2s ease;
  }
  
  .member-linkedin:hover {
    background: #0A66C2;
    color: white;
    transform: scale(1.1);
  }
  
  .member-linkedin svg {
    width: 16px;
    height: 16px;
  }
</style>