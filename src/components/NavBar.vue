<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'
import { useBotStatus } from '../composables/useBotStatus'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { t, currentLang, toggleLanguage } = useLanguage()
const { isOnline } = useBotStatus()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu on route change
watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container navbar-content">
      <div class="logo">
        <RouterLink to="/">
          <img src="/Asset_1KentaBucket.png" alt="KentaBuckets" class="nav-logo" />
        </RouterLink>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Nav Links -->
      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" @click="closeMenu">{{ t.nav.home }}</RouterLink>
        </li>
        <li class="nav-item">
          <a href="https://www.nekofoundation.tech/" target="_blank" class="nav-link" @click="closeMenu">{{ t.nav.about }}</a>
        </li>
        <li class="nav-item">
          <a href="https://bot.nekofoundation.tech/" target="_blank" class="nav-link" @click="closeMenu">{{ t.nav.docs }}</a>
        </li>
        
        <li class="nav-actions">
          <!-- Status Indicator -->
          <div class="status-indicator">
             <span class="status-dot" :class="{ 'online': isOnline }"></span>
             <span class="status-text">{{ isOnline ? 'ONLINE' : 'OFFLINE' }}</span>
          </div>

          <button @click="toggleLanguage" class="lang-btn">
            {{ currentLang === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN' }}
          </button>

          <a href="https://discord.com/oauth2/authorize?client_id=1372420632628822057&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn-primary" @click="closeMenu">
            {{ t.nav.getStarted }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Status Styles */
.status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-family: var(--font-family);
    color: var(--color-text-dim);
    margin-right: 12px;
    background: rgba(0,0,0,0.2);
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--color-border);
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ef4444; /* Red/Offline */
    box-shadow: 0 0 5px #ef4444;
}

.status-dot.online {
    background: #10b981; /* Green/Online */
    box-shadow: 0 0 5px #10b981;
}

.status-text {
    font-weight: 600;
    letter-spacing: 0.05em;
}



.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Fixed height for tech feel */
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.logo {
  display: flex;
  align-items: center;
  z-index: 1001;
}

.nav-logo {
  height: 32px; /* Slightly smaller/cleaner */
  width: auto;
}

/* Desktop Styles */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
  list-style: none;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  color: var(--color-text-dim);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-link:hover, .router-link-active {
  color: var(--color-primary);
}

/* Tech hover effect: [ Link ] */
.nav-link::before,
.nav-link::after {
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: var(--color-primary-dark);
  display: inline-block;
}

.nav-link::before { content: '['; margin-right: 4px; transform: translateX(4px); }
.nav-link::after { content: ']'; margin-left: 4px; transform: translateX(-4px); }

.nav-link:hover::before,
.nav-link:hover::after {
  opacity: 1;
  transform: translateX(0);
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid var(--color-border);
}

.lang-btn {
  background: transparent;
  color: var(--color-text-dim);
  border: 1px solid var(--color-border);
  padding: 8px 12px;
  border-radius: 0; /* Square */
  font-size: 0.8rem;
  transition: all 0.2s ease;
  font-family: var(--font-family);
}

.lang-btn:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

/* Mobile Toggle Button */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
  padding: 0;
}

.mobile-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

.mobile-toggle.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.mobile-toggle.active .bar:nth-child(2) { opacity: 0; }
.mobile-toggle.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    border-left: 1px solid var(--color-border);
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-actions {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 1.25rem;
  }

  /* Disable bracket hover on mobile for cleaner look */
  .nav-link::before, .nav-link::after { display: none; }
}
</style>
