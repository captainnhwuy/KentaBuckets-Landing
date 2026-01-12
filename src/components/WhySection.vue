<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="why-section">
    <div class="container mobile-padding">
      <h2 class="section-title animate-fade-up">
        <span class="text-highlight">{{ t.why.title }}</span>
      </h2>
      
      <div class="comparison-list">
        <!-- Render each comparison item -->
        <div 
          v-for="(item, index) in t.why.items" 
          :key="index" 
          class="tech-comparison-card animate-fade-up"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          
          <!-- Header (Title & Description) -->
          <div class="card-header">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>

          <!-- Robust Grid Content -->
          <div class="comparison-grid-layout">
            
            <!-- LEFT: OLD GEN -->
            <div class="side-panel old-gen">
              <div class="panel-header">
                <span class="status-dot offline"></span>
                <span class="panel-label">OLD GEN</span>
              </div>
              <div class="panel-body">
                <!-- Custom: Support Chat (Old) -->
                <div v-if="item.customVisual === 'support'" class="terminal-chat old-chat">
                  <div class="chat-line">> Connecting to support...</div>
                  <div class="chat-line dim">> Waiting for agent...</div>
                  <div class="chat-line dim">> [..................]</div>
                  <div class="chat-line error">> Error: Connection Timeout</div>
                  <div class="chat-line error">> No agents available.</div>
                  <div class="chat-line">> Ticket #9942 closed.</div>
                </div>

                <!-- Standard Image Logic -->
                <img 
                   v-else-if="item.oldImage"
                   :src="item.oldImage" 
                   class="panel-image old-image-style"
                   alt="Old Generation"
                 />
                <!-- Static Tech Pattern for Old Gen (background/fallback) -->
                <div :class="['tech-pattern old-pattern', { 'behind-image': item.oldImage || item.customVisual }]"></div>
                <!-- Only show void text if NO content -->
                <div class="panel-overlay" v-if="!item.oldImage && !item.customVisual">
                  <span class="void-text">OUTDATED</span>
                </div>
              </div>
            </div>

            <!-- CENTER: VS BADGE -->
            <div class="vs-badge-container">
              <div class="vs-line top"></div>
              <div class="vs-circle">VS</div>
              <div class="vs-line bottom"></div>
            </div>

            <!-- RIGHT: KENTABUCKETS (NEW) -->
            <div class="side-panel new-gen">
              <div class="panel-header">
                <span class="status-dot online"></span>
                <span class="panel-label">KENTABUCKETS</span>
              </div>
              <div class="panel-body">
                <!-- Custom: Support Chat (New) -->
                 <div v-if="item.customVisual === 'support'" class="terminal-chat new-chat">
                  <div class="chat-line user text-highlight">> User: I need help!</div>
                  <div class="chat-line system">> Support Joined.</div>
                  <div class="chat-line support">> Staff: Hey! Checking now ⚡️</div>
                  <div class="chat-line support">> Staff: Issue identified.</div>
                  <div class="chat-line support">> Staff: Fixing config...</div>
                  <div class="chat-line success">> System: Problem Resolved ✅</div>
                </div>

                <!-- Standard Image Logic -->
                 <img 
                   v-else-if="item.image"
                   :src="item.image" 
                   :alt="item.title"
                   class="panel-image"
                   @error="$event.target.style.display='none'"
                 />
                 <!-- Fallback if no image or error -->
                 <div :class="['tech-pattern new-pattern', { 'behind-image': item.image || item.customVisual }]">
                    <span v-if="!item.image && !item.customVisual" class="void-text">ACTIVE</span>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-family: var(--font-family);
  letter-spacing: -0.05em;
}

.comparison-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* --- MAIN CARD CONTAINER --- */
.tech-comparison-card {
  width: 100%;
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.card-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.card-header p {
  color: var(--color-text-dim);
  font-size: 1rem;
}

/* --- GRID LAYOUT --- */
.comparison-grid-layout {
  display: grid;
  grid-template-columns: 1fr 2px 1fr; /* Ultra-thin center */
  height: 400px;
  border: 1px solid var(--color-border);
  background: black;
  position: relative;
}

/* --- SIDES --- */
.side-panel {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.panel-header {
  height: 40px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.02);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 12px;
}
.status-dot.offline { background: #555; box-shadow: 0 0 5px #555; }
.status-dot.online { background: #00ff88; box-shadow: 0 0 8px #00ff88; }

.panel-body {
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%; /* Ensure full fill */
  background: #050510;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* --- OLD GEN STYLES --- */
.old-gen {
  border-right: 1px solid var(--color-border);
}
.old-gen .panel-body {
  background: #0a0a0a;
}
.old-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(#333 1px, transparent 1px),
    linear-gradient(90deg, #333 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  filter: grayscale(100%);
}
.void-text {
  position: absolute;
  color: #333;
  font-weight: 900;
  font-size: 3rem;
  transform: rotate(-15deg);
  opacity: 0.3;
  pointer-events: none;
  border: 4px solid #333;
  padding: 1rem 2rem;
}

/* --- NEW GEN STYLES --- */
.new-gen {
  border-left: 1px solid var(--color-border);
  position: relative;
}
/* Highlight active side */
.new-gen::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 30px rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.3);
  z-index: 10;
}

.panel-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Don't crop */
  padding: 1rem; /* Spacing from edges */
  position: relative;
  z-index: 2;
}

.old-image-style {
  filter: grayscale(100%) contrast(1.1);
  opacity: 0.8;
  /* Removed border-right, cleaner look */
}

.new-pattern {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
}
/* Ensure generic pattern sits behind image if image exists */
.behind-image {
  z-index: 1;
}

/* --- CENTER VS BADGE --- */
.vs-badge-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent; /* Remove black box */
  z-index: 20; /* Ensure on top */
  overflow: visible; /* Allow badge to spill out */
}

.vs-line {
  width: 1px;
  flex: 1;
  background: var(--color-border);
}

.vs-circle {
  width: 32px; /* Slightly smaller badge */
  height: 32px;
  border: 1px solid var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; /* Needs bg to cover the line */
  color: var(--color-primary);
  font-weight: 900;
  font-size: 0.7rem;
  margin: 0; /* Remove margin as it floats */
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
}

/* --- TERMINAL CHAT STYLES --- */
.terminal-chat {
  width: 100%;
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.6;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.chat-line {
  opacity: 0.9;
}
.chat-line.dim { opacity: 0.5; }
.chat-line.error { color: #ff5555; }
.chat-line.success { color: #00ff88; font-weight: bold; }
.chat-line.user { color: var(--color-primary); }
.chat-line.support { color: #fff; }
.chat-line.system { color: #888; font-style: italic; }

.old-chat { color: #aaa; }
.new-chat { color: #eee; }

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
/* ... existing responsive code ... */
  .comparison-grid-layout {
    grid-template-columns: 1fr; /* Stack vertically */
    grid-template-rows: 1fr auto 1fr;
    height: auto;
    min-height: 600px;
  }
  
  .old-gen { border-right: none; border-bottom: 1px solid var(--color-border); }
  .new-gen { border-left: none; border-top: 1px solid var(--color-border); }
  
  .vs-badge-container {
    flex-direction: row;
    height: 60px;
    width: 100%;
  }
  .vs-line {
    width: 100%;
    height: 1px;
  }
}
</style>
