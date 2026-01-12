<script setup>
import { ref, onMounted, nextTick } from 'vue'

const logLines = [
  { text: '[STARTUP] Initializing system...', class: 'info', delay: 50 },
  { text: '[SeedShop] Dynamic Seed Shop started.', class: 'success', delay: 20 },
  { text: '(node:15) [DEP0040] DeprecationWarning: The `punycode` module is deprecated.', class: 'warning', delay: 10 },
  { text: '[SePay Webhook] Server listening on port 3000', class: 'success', delay: 100 },
  { text: '[INFO] KentaBucket#3367 is online!', class: 'highlight', delay: 200 },
  { text: '[INFO] Bot Version: 1.8.5', class: 'info', delay: 20 },
  { text: '[INFO] Node.js Version: v21.7.3', class: 'info', delay: 20 },
  { text: 'Autoresponder addon loaded.', class: 'dim', delay: 30 },
  { text: 'CustomRole addon loaded.', class: 'dim', delay: 30 },
  { text: '[Fishing Addon] Đang tải Addons...', class: 'info', delay: 50 },
  { text: '[Fishing Addon] Đã import 89 loài cá.', class: 'success', delay: 50 },
  { text: '[Fishing Addon] Updated hourly fish: Cá nhà táng (Legendary), Cá hổ Goliath (Epic)', class: 'highlight', delay: 40 },
  { text: 'Greetings addon loaded.', class: 'dim', delay: 20 },
  { text: '[NoiTu] ⏳ Downloading dictionary data...', class: 'info', delay: 60 },
  { text: '[NoiTu] ✅ Helper loaded (Smart Dictionary Integrations)', class: 'success', delay: 80 },
  { text: 'QuickReport addon loaded.', class: 'dim', delay: 20 },
  { text: 'ServerStats addon loaded. Starting refresh interval.', class: 'dim', delay: 20 },
  { text: '[DichThuat] Initializing...', class: 'dim', delay: 40 },
  { text: '[TranslatorAddon] Ready!', class: 'success', delay: 20 },
  { text: '[VeSo] Vé số addon đã được khởi động', class: 'success', delay: 20 },
  { text: 'KentaVoice addon loaded.', class: 'dim', delay: 20 },
  { text: '[NoiTu] ✅ Smart Dictionary loaded: 73901 words.', class: 'highlight', delay: 100 },
  { text: '[STARTUP] Cleared guild commands for 1388889326309605488', class: 'warning', delay: 50 },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', class: 'dim separator', delay: 10 },
  { text: '[STARTUP] Done in 7.355s', class: 'success bold', delay: 150 },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', class: 'dim separator', delay: 10 },
  { text: 'User: KentaBucket#3367', class: 'info', delay: 20 },
  { text: 'ID: 1372420632628822057', class: 'dim', delay: 10 },
  { text: 'Commands: 77 Slash | 1 Message', class: 'info', delay: 20 },
  { text: 'Bot Version: v1.8.5', class: 'highlight', delay: 200 },
  { text: '> System Ready. Listening for commands...', class: 'success type-end', delay: 0 }
]

const visibleLog = ref([])
const terminalBodyRef = ref(null)

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const runBootSequence = async () => {
  for (const line of logLines) {
    // Add empty line structure
    const newLine = { ...line, currentText: '' }
    visibleLog.value.push(newLine)
    
    // Type out characters nicely
    const chars = line.text.split('')
    for (const char of chars) {
       newLine.currentText += char
       scrollToBottom()
       // Randomize typing speed slightly for realism
       await sleep(Math.random() * 5 + 5) 
    }
    
    // Line completed, wait simulating processing time
    await sleep(line.delay)
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (terminalBodyRef.value) {
      terminalBodyRef.value.scrollTop = terminalBodyRef.value.scrollHeight
    }
  })
}

onMounted(() => {
  runBootSequence()
})
</script>

<template>
  <section class="startup-section">
    <div class="container mobile-padding">
      <div class="terminal-window animate-fade-up">
        <div class="terminal-header">
          <div class="dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title">kenta-boot.log</div>
        </div>
        <div class="terminal-body" ref="terminalBodyRef">
          <div v-for="(line, index) in visibleLog" :key="index" :class="['log-line', line.class]">
            {{ line.currentText }}
          </div>
          <div class="cursor-line">
            <span class="prompt">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.startup-section {
  padding: 4rem 0;
  background: transparent;
  display: flex;
  justify-content: center;
  /* Prevent interaction blocking */
  pointer-events: none; 
}
.startup-section .container {
  pointer-events: auto;
  width: 100%;
}

.terminal-window {
  width: 100%;
  max-width: 900px;
  max-height: 400px; /* Reduced specific height */
  background: rgba(10, 10, 15, 0.95);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(37, 99, 235, 0.1);
  backdrop-filter: blur(10px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.dots {
  display: flex;
  gap: 8px;
  margin-right: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #888;
  flex: 1;
  text-align: center;
  padding-right: 50px; 
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  overflow-y: auto;
  flex: 1;
  /* Custom Scrollbar for terminal feel */
  scrollbar-width: thin;
  scrollbar-color: #333 transparent;
}

.terminal-body::-webkit-scrollbar {
  width: 6px;
}
.terminal-body::-webkit-scrollbar-thumb {
  background-color: #333;
}

.log-line {
  margin-bottom: 2px;
  white-space: pre-wrap; /* Check for text wrapping */
  word-break: break-all;
}

/* Colors */
.info { color: #a9b7c6; }
.success { color: #00ff88; }
.warning { color: #ffbd2e; }
.highlight { color: #3b82f6; font-weight: bold; }
.dim { color: #555; }
.bold { font-weight: bold; }
.separator { opacity: 0.3; margin: 0.5rem 0; color: #fff; }

.type-end {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #333;
}

.prompt {
  color: var(--color-primary);
  animation: blink 0.8s step-end infinite;
  font-weight: bold;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .terminal-window {
    border-radius: 0;
    border-left: none;
    border-right: none;
    max-height: 350px;
  }
  .log-line {
    font-size: 0.75rem;
  }
}
</style>
