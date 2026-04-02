import { writable } from 'svelte/store';

export const currentPage = writable('home');
export const sidebarCollapsed = writable(false);

export function navigate(pageId) {
  currentPage.set(pageId);
  window.location.hash = `/${pageId}`;
}

export function initRouter() {
  const hash = window.location.hash.slice(2) || 'home';
  currentPage.set(hash);
  
  window.addEventListener('hashchange', () => {
    const page = window.location.hash.slice(2) || 'home';
    currentPage.set(page);
  });
}