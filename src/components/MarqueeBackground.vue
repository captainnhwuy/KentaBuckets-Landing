<script setup>
defineProps({
  text: {
    type: String,
    default: 'KentaBuckets'
  },
  opacity: {
    type: Number,
    default: 0.1
  }
})

const rows = [
  { direction: 'normal', speed: '60s', separator: '///' },
  { direction: 'reverse', speed: '45s', separator: '+++' },
  { direction: 'normal', speed: '50s', separator: ':::' }
]
</script>

<template>
  <div class="marquee-background" :style="{ opacity: opacity }">
    <div 
      v-for="(row, index) in rows" 
      :key="index"
      class="marquee-row" 
      :class="row.direction"
      :style="{ '--speed': row.speed }"
    >
      <div class="marquee-content">
        <span v-for="n in 4" :key="n">
          {{ text }} <span class="separator">{{ row.separator }}</span>
        </span>
      </div>
      <div class="marquee-content" aria-hidden="true">
        <span v-for="n in 4" :key="n">
          {{ text }} <span class="separator">{{ row.separator }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-background {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem; /* Space between rows */
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  transform: skewY(-5deg);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

.marquee-row {
  display: flex;
  overflow: hidden;
  user-select: none;
  width: 100%;
}

.marquee-content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: 4rem;
  padding-right: 4rem; /* Match gap for seamless loop */
}

.normal .marquee-content {
  animation: scroll var(--speed) linear infinite;
}

.reverse .marquee-content {
  animation: scroll var(--speed) linear infinite reverse;
}

.marquee-content span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 6rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.separator {
  color: var(--color-primary);
  opacity: 0.3;
  -webkit-text-stroke: 0;
  font-weight: 400;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@media (max-width: 768px) {
  .marquee-background { gap: 4rem; }
  .marquee-content span { font-size: 4rem; gap: 2rem; }
}
</style>
