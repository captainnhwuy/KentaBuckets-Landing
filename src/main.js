import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Global Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

app.mixin({
  mounted() {
    // Check if the component's root element is a valid Element
    if (!(this.$el instanceof Element)) return

    // Check if the component's root element has the class
    if (this.$el.classList.contains('animate-fade-up')) {
      observer.observe(this.$el)
    }
    // Check for children
    const elements = this.$el.querySelectorAll('.animate-fade-up')
    if (elements.length > 0) {
      elements.forEach(el => observer.observe(el))
    }
  }
})

app.mount('#app')
