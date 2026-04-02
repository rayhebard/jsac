<script>
  import mascot from '$lib/assets/images/Lon-E_Navigation.png';
  
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    groupSize: '',
    tourType: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  };
  
  let submitted = false;
  
  const tourTypes = [
    'Basic Guided Tour (1 hour)',
    'Activity Bundle Tour (2 hours)',
    'Premium Package Tour (3 hours)'
  ];
  
  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM'
  ];
  
  function handleSubmit() {
    submitted = true;
  }
</script>

<div class="tour-request-page">
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Request a Tour</h1>
        <img src={mascot} alt="Tour Request" class="page-header-mascot mascot-img" />
      </div>
    </div>
  </section>
  
  <section class="request-section">
    <div class="container">
      <div class="request-grid">
        <div class="contact-info">
          <h2>Schedule Your Visit</h2>
          <p class="info-intro">Experience our state-of-the-art STEM Center firsthand! Fill out the form to request a tour.</p>
          
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
                <p>(404) 584-2475</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">Email</span>
                <p>tours@johnsonstem.com</p>
              </div>
            </div>
          </div>
          
          <div class="tour-options">
            <h3>Tour Options</h3>
            <ul class="tour-list">
              <li><strong>Basic Guided Tour</strong> - 1 hour comprehensive tour</li>
              <li><strong>Activity Bundle Tour</strong> - 2 hours with hands-on activities</li>
              <li><strong>Premium Package Tour</strong> - 3 hours with Dr. Lonnie Johnson Q&A</li>
            </ul>
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
                <h3>Tour Request Submitted!</h3>
                <p>Thank you for your interest! A staff member will contact you within 2-3 business days to confirm your tour request.</p>
              </div>
            {:else}
              <form on:submit|preventDefault={handleSubmit}>
                <div class="form-section">
                  <h3 class="section-label">Contact Information</h3>
                  
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
                  <h3 class="section-label">Group Information</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="organization">Organization/School Name</label>
                      <input type="text" id="organization" bind:value={formData.organization} />
                    </div>
                    <div class="form-group">
                      <label for="groupSize">Estimated Group Size *</label>
                      <input type="text" id="groupSize" bind:value={formData.groupSize} required placeholder="e.g., 25 students" />
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <h3 class="section-label">Tour Preferences</h3>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="tourType">Tour Type *</label>
                      <select id="tourType" bind:value={formData.tourType} required>
                        <option value="">Select a tour...</option>
                        {#each tourTypes as tour}
                          <option value={tour}>{tour}</option>
                        {/each}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="preferredTime">Preferred Time *</label>
                      <select id="preferredTime" bind:value={formData.preferredTime} required>
                        <option value="">Select a time...</option>
                        {#each timeSlots as time}
                          <option value={time}>{time}</option>
                        {/each}
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="preferredDate">Preferred Date *</label>
                      <input type="date" id="preferredDate" bind:value={formData.preferredDate} required />
                    </div>
                    <div class="form-group">
                    </div>
                  </div>
                </div>
                
                <div class="form-section">
                  <div class="form-group full-width">
                    <label for="specialRequests">Special Requests or Accommodations</label>
                    <textarea 
                      id="specialRequests" 
                      bind:value={formData.specialRequests} 
                      rows="4" 
                      placeholder="Let us know about any accessibility needs, dietary requirements, or other special requests..."
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary submit-btn">Submit Tour Request</button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .tour-request-page {
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
  
  .request-section {
    padding: 4rem 0;
  }
  
  .request-grid {
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
  
  .tour-options {
    background: var(--color-light);
    border-radius: 0.75rem;
    padding: 1.5rem;
  }
  
  .tour-options h3 {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 1rem;
  }
  
  .tour-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .tour-list li {
    font-size: 0.9375rem;
    color: var(--color-gray);
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .tour-list li:last-child {
    border-bottom: none;
  }
  
  .tour-list strong {
    color: var(--color-primary);
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
    .request-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
  }
</style>