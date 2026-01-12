<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>KentaBuckets</h3>
          <p>Sản phẩm được thực hiện bởi NekoTech Foundations và Heiznerd, mọi quyền hạn đều được bảo lưu.</p>
        </div>
        <div class="footer-links">
          <a href="https://bot.nekofoundation.tech/chinh-sach-phap-ly/chinh-sach-bao-mat" target="_blank">Privacy</a>
          <a href="https://bot.nekofoundation.tech/chinh-sach-phap-ly/dieu-khoan-dich-vu" target="_blank">Terms</a>
          <a href="https://bot.nekofoundation.tech/" target="_blank">Documentation</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 NekoTech Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  padding: 4rem 0 2rem;
  margin-top: auto;
  border-top: 1px solid var(--color-glass-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: var(--color-text-secondary);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--color-text-secondary);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-bottom {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}
</style>
