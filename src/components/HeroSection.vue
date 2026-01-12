<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useBotStatus } from '../composables/useBotStatus'
import MarqueeBackground from './MarqueeBackground.vue'

const { t } = useLanguage()
const { customerCount } = useBotStatus()
</script>

<template>
  <section class="hero">
    <MarqueeBackground text="KentaBuckets" :opacity="0.15" />
    
    <div class="container relative z-10">
      <div class="hero-content">
        <div class="cli-badge animate-fade-up">
           <span class="prompt">$</span> kentabuckets --version 2.0
        </div>
        
        <div class="hero-logo-container animate-fade-up delay-100">
           <!-- Replaced img with text for cleaner tech look, OR keep img if icon -->
           <img src="/Asset_1KentaBucket.png" alt="KentaBuckets Logo" class="hero-logo" />
        </div>
        
        <p class="hero-subtitle animate-fade-up delay-200">
           <span class="text-highlight">KENTA BUCKETS</span> — {{ t.hero.subtitle }}
        </p>

        <!-- Customer Stats Badge -->
        <div v-if="customerCount > 0" class="customer-stats animate-fade-up delay-200">
             <span class="stats-icon">👥</span>
             <span class="stats-text">Trusted by <b>{{ customerCount }}</b> Active Whitelabels</span>
        </div>

        <div class="hero-actions animate-fade-up delay-300">
          <a href="https://discord.com/oauth2/authorize?client_id=1372420632628822057&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn-primary">
            {{ t.hero.invite }}
            <!-- Simple arrow icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="https://bot.nekofoundation.tech/" target="_blank" class="btn-outline">
            {{ t.hero.docs }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </a>
        </div>
      </div>
      
      <div class="hero-visual animate-fade-up delay-300">
        <div class="terminal-window">
          <div class="terminal-header">
             <div class="terminal-controls">
                <span></span><span></span><span></span>
             </div>
             <div class="terminal-title">kenta-preview — 80x24</div>
          </div>
          <div class="terminal-body">
             <img src="/finalsKentaBucket_-_Main_BGkentadone.png" alt="KentaBuckets Preview" class="placeholder-img" />
             <!-- Optional overlay scanline -->
             <div class="scanline"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 60px;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* CLI Badge */
.cli-badge {
  display: inline-flex;
  gap: 12px;
  padding: 8px 16px;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-family);
  font-size: 0.9rem;
  margin-bottom: 24px;
}
.prompt { color: var(--color-primary-dark); font-weight: bold; }

.hero-logo-container {
  margin-bottom: 24px;
}

.hero-logo {
  height: 280px; /* Much larger */
  width: auto;
  filter: drop-shadow(0 0 40px rgba(37, 99, 235, 0.6));
}

.hero-subtitle {
  font-family: var(--font-family);
  font-size: 1.1rem;
  color: var(--color-text-dim);
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.customer-stats {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 32px;
  color: var(--color-text-dim);
  font-size: 0.9rem;
  backdrop-filter: blur(4px);
}

.stats-text b {
  color: var(--color-primary);
  font-weight: 700;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.ml-2 { margin-left: 8px; }

/* Terminal Window Frame */
.hero-visual {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  perspective: 1000px;
}

.terminal-window {
  background: #000;
  border: 1px solid var(--color-border);
  box-shadow: 0 0 0 1px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.5);
  border-radius: 4px;
  overflow: hidden;
}

.terminal-header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.terminal-controls {
  display: flex;
  gap: 6px;
  position: absolute;
  left: 16px;
}

.terminal-controls span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border);
}

.terminal-title {
  color: var(--color-text-dim);
  font-size: 0.8rem;
  font-family: var(--font-family);
}

.terminal-body {
  position: relative;
  background: #000;
  line-height: 0;
}

.placeholder-img {
  width: 100%;
  height: auto;
  opacity: 0.8;
  /* Optional: Grayscale or tint for tech match? Keeping full color for now */
}

.scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.1), transparent);
  height: 100%;
  animation: scan 4s linear infinite;
  pointer-events: none;
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}



/* Utilities */
.relative { position: relative; }
.z-10 { z-index: 10; }
</style>
