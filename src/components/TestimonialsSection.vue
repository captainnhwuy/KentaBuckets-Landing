<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">{{ t.testimonials.title }}</h2>
      <div class="testimonial-card glass">
        <p class="quote">"GlitchBucket là một người bạn hỗ trợ tuyệt vời cho cộng đồng của tôi, có rất nhiều chức năng hay, phục vụ rất nhiều cho cộng đồng mà các bạn không nên bỏ lỡ."</p>
        <div class="author">
          <div class="avatar"></div>
          <div>
            <h4>Duy Andy</h4>
            <span>@duyandy</span>
          </div>
        </div>
      </div>
      <div class="read-more">
         <a href="#" target="_blank">{{ t.testimonials.readMore }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 5rem 0;
  background-color: rgba(0,0,0,0.2);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.testimonial-card {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
}

.quote {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
}

.author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-accent);
}

.author h4 {
  margin: 0;
  font-size: 1.1rem;
}

.author span {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.read-more {
  text-align: center;
  margin-top: 2rem;
}

.read-more a {
  color: var(--color-text-secondary);
}

.read-more a:hover {
  text-decoration: underline;
  color: var(--color-accent);
}
</style>
