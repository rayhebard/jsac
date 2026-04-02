<script>
  import mascot from '$lib/assets/images/Lon-E_Collaborate_or_Ask.png';
  
  let formData = {
    firstName: '',
    lastName: '',
    parentFirstName: '',
    parentLastName: '',
    age: '',
    email: '',
    phone: '',
    county: '',
    schoolName: '',
    grade: '',
    programOfInterest: '',
    experienceLevel: '',
    preferredDays: [],
    additionalInfo: ''
  };
  
  let submitted = false;
  
  const programs = [
    'Robotics',
    'Virtual Reality',
    'Virtual Math Lab',
    'Computer Programming',
    'E-Sports'
  ];
  
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  function handleCheckboxChange(day, event) {
    if (event.target.checked) {
      formData.preferredDays = [...formData.preferredDays, day];
    } else {
      formData.preferredDays = formData.preferredDays.filter(d => d !== day);
    }
  }
  
  function handleSubmit() {
    submitted = true;
  }
</script>

<div class="program-application-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Program Application</h1>
        <img src={mascot} alt="Apply" class="page-header-mascot mascot-img" />
      </div>
    </div>
  </section>
  
  <section class="application-section">
    <div class="container">
      <div class="application-grid">
        <div class="contact-info">
          <h2>Contact Details</h2>
          <p class="info-intro">Feel free to call us with any questions. We'll be happy to help in any way we can!</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">Address</span>
                <p>275 Decatur St. SE<br/>Atlanta, GA 30312</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">Phone</span>
                <p>(404) 584-2475 Ext 4</p>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <h3>Connect With Us</h3>
            <div class="social-icons">
              <a href="https://www.facebook.com/johnsonSTEMac" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/johnsonstemactivitycenter/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-3 01-3.792.294-.825.318-1.465 1.035-1.792 1.835-.327.8-.294 1.92 0 2.793.294.8 1.035 1.465 1.792 1.792.8.327 1.92.294 2.793 0 .8-.294 1.465-1.035 1.792-1.792.327-.8.294-1.92 0-2.793-.294-.8-1.035-1.465-1.792-1.792C15.944 3 15.617 3 12 3zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ActivityStem" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/johnsonstemactivitycenter/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="form-wrapper">
          <div class="form-container">
            {#if submitted}
              <div class="success-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                <h3>Application Submitted!</h3>
                <p>Thank you for your interest in our programs. A staff member will contact you soon.</p>
              </div>
            {:else}
              <form on:submit|preventDefault={handleSubmit}>
                <div class="form-section">
                  <h3 class="section-label">Applicant Information</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstName">First Name *</label>
                      <input type="text" id="firstName" bind:value={formData.firstName} required />
                    </div>
                    <div class="form-group">
                      <label for="lastName">Last Name *</label>
                      <input type="text" id="lastName" bind:value={formData.lastName} required />
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="parentFirstName">Parent/Guardian First Name</label>
                      <input type="text" id="parentFirstName" bind:value={formData.parentFirstName} />
                    </div>
                    <div class="form-group">
                      <label for="parentLastName">Parent/Guardian Last Name</label>
                      <input type="text" id="parentLastName" bind:value={formData.parentLastName} />
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="age">Age *</label>
                      <input type="text" id="age" bind:value={formData.age} required />
                    </div>
                    <div class="form-group">
                      <label for="county">County of Residence *</label>
                      <input type="text" id="county" bind:value={formData.county} required />
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h3 class="section-label">Contact Information</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="email">Email *</label>
                      <input type="email" id="email" bind:value={formData.email} required />
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone *</label>
                      <input type="tel" id="phone" bind:value={formData.phone} required />
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h3 class="section-label">School Information</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="schoolName">School Name *</label>
                      <input type="text" id="schoolName" bind:value={formData.schoolName} required />
                    </div>
                    <div class="form-group">
                      <label for="grade">Grade *</label>
                      <input type="text" id="grade" bind:value={formData.grade} required />
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h3 class="section-label">Program Interest</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="programOfInterest">Program of Interest *</label>
                      <select id="programOfInterest" bind:value={formData.programOfInterest} required>
                        <option value="">Select a program...</option>
                        {#each programs as program}
                          <option value={program}>{program}</option>
                        {/each}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="experienceLevel">Experience Level Desired *</label>
                      <input type="text" id="experienceLevel" bind:value={formData.experienceLevel} required placeholder="e.g., Beginner, Intermediate, Advanced" />
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h3 class="section-label">Preferred Days of the Week *</h3>
                  <p class="section-hint">Select all days that work for your schedule</p>
                  
                  <div class="checkbox-group">
                    {#each days as day}
                      <label class="checkbox-label">
                        <input 
                          type="checkbox" 
                          value={day} 
                          on:change={(e) => handleCheckboxChange(day, e)}
                        />
                        <span class="checkbox-custom"></span>
                        {day}
                      </label>
                    {/each}
                  </div>
                </div>
                
                <div class="form-section">
                  <div class="form-group full-width">
                    <label for="additionalInfo">Tell us more about your interests and experience</label>
                    <textarea 
                      id="additionalInfo" 
                      bind:value={formData.additionalInfo} 
                      rows="4" 
                      placeholder="Share your passion for STEM, any relevant experience, and what you hope to learn..."
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary submit-btn">Submit Application</button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .program-application-page {
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
  
  .application-section {
    padding: 4rem 0;
  }
  
  .application-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
  }
  
  .contact-info h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--color-dark);
    margin-bottom: 1rem;
  }
  
  .info-intro {
    font-size: 1rem;
    color: var(--color-gray);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .contact-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .contact-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(13, 148, 136, 0.1);
    border-radius: 0.75rem;
    color: var(--color-primary);
    flex-shrink: 0;
  }
  
  .contact-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .contact-label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-gray);
    margin-bottom: 0.25rem;
  }
  
  .contact-item p {
    font-size: 1rem;
    color: var(--color-dark);
    line-height: 1.5;
  }
  
  .social-links h3 {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 1rem;
  }
  
  .social-icons {
    display: flex;
    gap: 0.75rem;
  }
  
  .social-icons a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-light);
    border-radius: 0.5rem;
    color: var(--color-gray);
    transition: all 0.2s ease;
  }
  
  .social-icons a:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }
  
  .social-icons svg {
    width: 20px;
    height: 20px;
  }
  
  .form-wrapper {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--shadow-md);
  }
  
  .form-container {
    max-width: 100%;
  }
  
  .form-section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .form-section:last-of-type {
    border-bottom: none;
  }
  
  .section-label {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  
  .section-hint {
    font-size: 0.875rem;
    color: var(--color-gray);
    margin-bottom: 1rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .form-row:last-child {
    margin-bottom: 0;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group.full-width {
    grid-column: 1 / -1;
  }
  
  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.875rem 1rem;
    font-family: var(--font-body);
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background: var(--color-light);
    color: var(--color-dark);
    transition: all 0.2s ease;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
  }
  
  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--color-gray-light);
  }
  
  .form-group select {
    cursor: pointer;
  }
  
  .checkbox-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
    color: var(--color-dark);
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    background: var(--color-light);
    border-radius: 0.375rem;
    transition: all 0.2s ease;
  }
  
  .checkbox-label:hover {
    background: rgba(13, 148, 136, 0.1);
  }
  
  .checkbox-label input[type="checkbox"] {
    display: none;
  }
  
  .checkbox-custom {
    width: 18px;
    height: 18px;
    border: 2px solid var(--color-gray-light);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }
  
  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '';
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
  
  .success-message {
    text-align: center;
    padding: 3rem 2rem;
  }
  
  .success-message svg {
    width: 64px;
    height: 64px;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  
  .success-message h3 {
    font-size: 1.5rem;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }
  
  .success-message p {
    color: var(--color-gray);
    font-size: 1rem;
  }
  
  @media (max-width: 900px) {
    .application-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
    
    .checkbox-group {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
