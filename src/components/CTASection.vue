<script setup>
import { useLanguage } from '../composables/useLanguage'
import MarqueeBackground from './MarqueeBackground.vue'

const { t } = useLanguage()
</script>

<template>
  <section class="cta-section">
    <MarqueeBackground text="KentaBuckets" direction="normal" :opacity="0.8" />
    <div class="container">
      <div class="cta-card glass animate-fade-up">
        <div class="cta-content">
        <h2 class="cta-title">
            <span class="text-highlight">{{ t.cta.title }}</span>
          </h2>
          <p class="cta-subtitle">{{ t.cta.subtitle }}</p>
          <div class="cta-actions">
            <a href="https://discord.com/oauth2/authorize?client_id=1372420632628822057&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn-primary">
              {{ t.cta.button }}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
        
        <div class="cta-bg-glow"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.cta-card {
  position: relative;
  border-radius: 0; /* Square */
  padding: 6rem 2rem;
  overflow: hidden;
  text-align: center;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: linear-gradient(to right, transparent, rgba(37, 99, 235, 0.05), transparent);
}

.cta-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-text);
}

/* Use highlighting for title if needed, or keeping it plain white/bold for tech impact */

.cta-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-dim);
  line-height: 1.6;
  max-width: 600px;
}

.cta-actions {
  margin-top: 1rem;
}

.btn-primary {
  padding: 1.2rem 3rem;
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.cta-bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}
</style>
