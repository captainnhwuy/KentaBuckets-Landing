import { ref } from 'vue'

const isOnline = ref(false)
const customerCount = ref(0)
const loading = ref(true)

// Singleton state to avoid multiple fetches? 
// Or just let it refetch if components mount separately?
// Let's simple fetch on use or init.

const API_URL = import.meta.env.VITE_BOT_API_URL || 'http://localhost:3000'

const fetchStatus = async () => {
    try {
        const res = await fetch(`${API_URL}/api/public/status`)
        if (res.ok) {
            const data = await res.json()
            isOnline.value = data.online
        } else {
            isOnline.value = false
        }
    } catch (e) {
        isOnline.value = false
    }
}

const fetchStats = async () => {
    try {
        const res = await fetch(`${API_URL}/api/public/whitelabel-count`)
        if (res.ok) {
            const data = await res.json()
            customerCount.value = data.count
        }
    } catch (e) {
        console.error(e)
    }
}

// Initial fetch
fetchStatus()
fetchStats()

// Refresh every 30s
setInterval(() => {
    fetchStatus()
    fetchStats()
}, 30000)

export function useBotStatus() {
    return {
        isOnline,
        customerCount,
        loading
    }
}
