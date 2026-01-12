<script setup>
import { useLanguage } from '../composables/useLanguage'
import MarqueeBackground from './MarqueeBackground.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { t } = useLanguage()

// Refs
const sectionRef = ref(null)
const scrollProgress = ref(0)
const activeIndex = ref(-1)

// Typewriter Logic
const typewrittenDescription = ref('')
let typewriterInterval = null

const startTypewriter = (text) => {
  if (typewriterInterval) clearInterval(typewriterInterval)
  typewrittenDescription.value = ''
  let i = 0
  typewriterInterval = setInterval(() => {
    if (i < text.length) {
      typewrittenDescription.value += text.charAt(i)
      i++
    } else {
      clearInterval(typewriterInterval)
    }
  }, 20) // Speed of typing
}

watch(activeIndex, (newIndex) => {
  if (newIndex >= 0 && newIndex < t.value.features.items.length) {
    const feature = t.value.features.items[newIndex]
    startTypewriter(feature.description)
  }
})

const getIcon = (title) => {
  const icons = {
    'Fishing System': '🎣',
    'Hệ thống Câu cá': '🎣',
    'Safety System': '🛡️',
    'Hệ thống An toàn': '🛡️',
    'Custom Role': '🎨',
    'Giveaway': '🎁',
    'Word Chain': '🔗',
    'Nối từ Giải trí': '🔗',
    'Check Host': '🌐',
    'Kiểm tra Host': '🌐'
  }
  return icons[title] || '✨'
}

// Scroll Handler
const handleScroll = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const sectionHeight = rect.height
  
  // Adjusted offsets for smoother entry/tracking
  const startOffset = windowHeight * 0.4
  const endOffset = windowHeight * 0.4
  
  let progress = (windowHeight - rect.top - startOffset) / (sectionHeight - startOffset - endOffset)
  progress = Math.max(0, Math.min(1, progress))
  scrollProgress.value = progress

  const totalItems = t.value.features.items.length
  
  // Smoother active index calculation with buffer
  // Calculate relative position per item
  const rawIndex = progress * totalItems
  const index = Math.floor(rawIndex)
  
  // Only update if changed to avoid jitter
  if (index !== activeIndex.value && index < totalItems) {
     activeIndex.value = index
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  if (typewriterInterval) clearInterval(typewriterInterval)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="features-scroll" ref="sectionRef">
    <MarqueeBackground text="KentaBuckets" direction="normal" :opacity="0.8" />
    
    <div class="container sticky-container">
      <h2 class="section-title animate-fade-up">
        <span class="text-highlight">{{ t.features.title }}</span>
      </h2>

      <div class="timeline-wrapper">
        <!-- Progress Track -->
        <div class="progress-track">
           <div class="track-line"></div>
           <div class="track-fill" :style="{ height: `${scrollProgress * 100}%` }"></div>
        </div>

        <!-- Features List -->
        <div class="features-list">
          <div 
            v-for="(feature, index) in t.features.items" 
            :key="index" 
            class="feature-row"
            :class="{ 'active': index <= activeIndex, 'current': index === activeIndex }"
          >
            <!-- Timeline Node -->
            <div class="timeline-node">
               <div class="node-dot"></div>
            </div>

            <!-- Content Card -->
            <div class="feature-content-card">
              <div class="card-glow"></div>
              <div class="icon-container">
                 <span class="card-icon">{{ getIcon(feature.title) }}</span>
              </div>
              <div class="text-container">
                 <h3>{{ feature.title }}</h3>
                 <!-- Show typewriter text if current, else show full text if active (passed), active keeps it visible -->
                 <p class="description start-hidden" :class="{ 'visible': index <= activeIndex }">
                   <!-- Logic: If current, show typewriter. If passed (index < active), show full. If future, show empty -->
                   <span v-if="index === activeIndex">{{ typewrittenDescription }}<span class="cursor">_</span></span>
                   <span v-else-if="index < activeIndex">{{ feature.description }}</span>
                   <span v-else>&nbsp;</span>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-scroll {
  position: relative;
  padding: 10rem 0;
  min-height: 250vh; /* Make it taller for smoother scrolling */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 6rem;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  font-family: var(--font-family);
  position: relative;
  z-index: 10;
}

.timeline-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 3rem;
}

.progress-track {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.track-line { width: 100%; height: 100%; }

.track-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-primary);
  box-shadow: 0 0 15px var(--color-primary);
  border-radius: 2px;
  transition: height 0.1s linear;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 25rem; /* Increased gap significantly for slower pacing */
  padding-bottom: 20vh;
}

.feature-row {
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0.1;
  filter: blur(4px);
  transform: translateX(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-row.active {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0) scale(1);
}

.timeline-node {
  position: absolute;
  left: -3rem;
  width: 4px;
  height: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-dot {
  width: 12px;
  height: 12px;
  background: var(--color-background);
  border: 2px solid var(--color-text-dim);
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 5;
}

.active .node-dot {
  background: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary);
  transform: scale(1.5);
}

.feature-content-card {
  width: 100%;
  padding: 2.5rem;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

@media (max-width: 768px) {
  .feature-content-card { flex-direction: column; align-items: flex-start; gap: 1rem; }
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at left, rgba(37, 99, 235, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.current .card-glow { opacity: 1; }

.icon-container {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid var(--color-primary);
  font-size: 2rem;
  transform: rotate(-5deg);
  transition: transform 0.5s ease;
}

.current .icon-container { transform: rotate(0deg) scale(1.1); box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }

.text-container { flex: 1; }

.text-container h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.current .text-container h3 { color: var(--color-primary); }

.text-container p {
  color: var(--color-text-dim);
  line-height: 1.6;
  min-height: 3.2em; /* Reserve space for text */
  margin: 0;
}

.start-hidden { opacity: 0; transition: opacity 0.3s ease; }
.start-hidden.visible { opacity: 1; }

.cursor { animation: blink 1s infinite; color: var(--color-primary); font-weight: bold; }
@keyframes blink { 50% { opacity: 0; } }
</style>
