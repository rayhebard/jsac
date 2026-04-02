<script>
  import { currentPage, navigate, sidebarCollapsed } from '../../stores/page.js';
  
  const navItems = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'programs', label: 'Programs', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'application', label: 'Apply', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'tours', label: 'Tours & Rentals', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { id: 'involved', label: 'Get Involved', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { id: 'volunteer', label: 'Volunteer', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'news', label: 'News & Media', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { id: 'about', label: 'About Us', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'directors', label: 'Board & Council', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];
  
  let collapsed = $sidebarCollapsed;
  
  function toggleSidebar() {
    collapsed = !collapsed;
    sidebarCollapsed.set(collapsed);
  }
</script>

<aside class="sidebar" class:collapsed={$sidebarCollapsed}>
  <div class="sidebar-toggle" on:click={toggleSidebar} role="button" tabindex="0" on:keypress={toggleSidebar}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      {#if collapsed}
        <path d="M9 5l7 7-7 7"/>
      {:else}
        <path d="M15 19l-7-7 7-7"/>
      {/if}
    </svg>
  </div>
  
  <nav class="sidebar-nav">
    {#each navItems as item}
      <a 
        href="#/{item.id}"
        class="sidebar-link"
        class:active={$currentPage === item.id}
        on:click|preventDefault={() => navigate(item.id)}
        title={item.label}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d={item.icon}/>
        </svg>
        {#if !collapsed}
          <span>{item.label}</span>
        {/if}
      </a>
    {/each}
  </nav>
  
  <div class="sidebar-footer">
    {#if !collapsed}
      <a href="https://donate.stripe.com/6oUdR97QS91x1OFdkp1RC01" target="_blank" class="sidebar-donate">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        <span>Donate</span>
      </a>
    {/if}
  </div>
</aside>

<style>
  .sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 260px;
    background: white;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    z-index: 100;
  }
  
  .sidebar.collapsed {
    width: 72px;
  }
  
  .sidebar-toggle {
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow-sm);
    transition: all 0.2s ease;
    z-index: 10;
  }
  
  .sidebar-toggle:hover {
    background: var(--color-light);
  }
  
  .sidebar-toggle svg {
    width: 14px;
    height: 14px;
    color: var(--color-gray);
  }
  
  .sidebar-nav {
    flex: 1;
    padding: 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    overflow-y: auto;
  }
  
  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    color: var(--color-gray);
    text-decoration: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .sidebar-link:hover {
    color: var(--color-dark);
    background: rgba(0, 0, 0, 0.04);
  }
  
  .sidebar-link.active {
    color: var(--color-primary);
    background: rgba(13, 148, 136, 0.1);
  }
  
  .sidebar-link svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  
  .sidebar.collapsed .sidebar-link {
    justify-content: center;
    padding: 0.75rem;
  }
  
  .sidebar-footer {
    padding: 1rem 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  
  .sidebar-donate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--color-accent-lavender);
    color: var(--color-darker);
    font-weight: 600;
    font-size: 0.875rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  
  .sidebar-donate:hover {
    background: var(--color-accent);
    color: white;
  }
  
  .sidebar-donate svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 900px) {
    .sidebar {
      display: none;
    }
  }
</style>