<script lang="js">
  import { onMount } from 'svelte';
  import { currentPage, initRouter, sidebarCollapsed } from './stores/page.js';
  import Header from './lib/components/Header.svelte';
  import Sidebar from './lib/components/Sidebar.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Home from './lib/pages/Home.svelte';
  import About from './lib/pages/About.svelte';
  import Directors from './lib/pages/Directors.svelte';
  import Programs from './lib/pages/Programs.svelte';
  import Tours from './lib/pages/Tours.svelte';
  import TourRequest from './lib/pages/TourRequest.svelte';
  import News from './lib/pages/News.svelte';
  import Involved from './lib/pages/Involved.svelte';
  import Contact from './lib/pages/Contact.svelte';
  import ProgramApplication from './lib/pages/ProgramApplication.svelte';
  import Volunteer from './lib/pages/Volunteer.svelte';
  
  onMount(() => {
    initRouter();
  });
  
  const pages = {
    home: Home,
    about: About,
    directors: Directors,
    programs: Programs,
    tours: Tours,
    'tour-request': TourRequest,
    news: News,
    involved: Involved,
    contact: Contact,
    application: ProgramApplication,
    volunteer: Volunteer
  };
</script>

<div class="app">
  <Header currentPage={$currentPage} />
  
  <div class="main-layout">
    <Sidebar />
    
    <main class="main-content" class:sidebar-collapsed={$sidebarCollapsed}>
      {#if pages[$currentPage]}
        <svelte:component this={pages[$currentPage]} />
      {:else}
        <svelte:component this={Home} />
      {/if}
    </main>
  </div>
  
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main-layout {
    display: flex;
    flex: 1;
    padding-top: 140px;
  }
  
  .main-content {
    flex: 1;
    margin-left: 260px;
    min-height: calc(100vh - 140px);
    transition: margin-left 0.3s ease;
  }
  
  .main-content.sidebar-collapsed {
    margin-left: 72px;
  }
  
  @media (max-width: 900px) {
    .main-content {
      margin-left: 0;
    }
  }
</style>