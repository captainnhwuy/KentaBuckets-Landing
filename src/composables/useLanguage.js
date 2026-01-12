import { ref, computed } from 'vue'
import stableOperationImg from '../assets/stable-operation.png'
import appNotRespondingImg from '../assets/app-not-responding.png'
import bloatBotsImg from '../assets/bloat-bots.png'
import optOneBotImg from '../assets/opt-one-bot.png'
import simpleUiNewImg from '../assets/simple-ui-new.png'
import complexUiOldImg from '../assets/complex-ui-old.png'

const currentLang = ref('vi') // Default to Vietnamese

const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      docs: 'Tài liệu',
      getStarted: 'Tham gia ngay',
      language: 'Ngôn ngữ'
    },
    hero: {
      title: 'KentaBuckets',
      subtitle: 'Giải pháp Discord Bot toàn diện, mang đến bộ công cụ quản lý chuyên sâu, tự động hóa thông minh và tương tác thú vị. Nâng tầm server của bạn lên một đẳng cấp mới.',
      invite: 'Thêm vào Server',
      docs: 'Tài liệu hướng dẫn'
    },
    features: {
      title: 'Hệ sinh thái tính năng',
      items: [
        {
          title: 'Hệ thống Câu cá',
          description: 'Trải nghiệm câu cá chân thực với hệ thống Rarity, Cần và Mồi đa dạng. Tích hợp Kho đồ, Chợ bán cá kiếm Xu và Bảng xếp hạng tranh tài gay cấn.'
        },
        {
          title: 'Nối từ Giải trí',
          description: 'Minigame Nối từ cổ điển nhưng gây nghiện, giữ chân thành viên và tăng tương tác chat với cơ chế tự động thông minh.'
        },
        {
          title: 'Thống kê Vote',
          description: 'Tổ chức các cuộc bình chọn, contest chuyên nghiệp với bộ lọc điều kiện tham gia chi tiết và thống kê minh bạch.'
        },
        {
          title: 'Role Tùy chỉnh',
          description: 'Trao quyền cho User tự quản lý Role cá nhân (tên, màu, icon) một cách an toàn, giảm tải công việc cho đội ngũ quản trị.'
        },
        {
          title: 'Giveaway Nâng cao',
          description: 'Tạo và vận hành Giveaway với các điều kiện tham gia phức tạp (Role, thời gian join, level...) chỉ với vài thao tác.'
        },
        {
          title: 'Hệ thống An toàn',
          description: 'Bảo vệ Server tuyệt đối với AntiNuke và AntiHoist (lọc tên). Tùy chỉnh giới hạn, Whitelist và quản lý lệnh linh hoạt.'
        }
      ]
    },
    why: {
      title: 'Tại sao chọn KentaBuckets?',
      items: [
        {
          title: 'Vận hành Ổn định',
          description: 'Chúng tôi đang sử dụng Ryzen 9 9950X để đảm bảo bot hoạt động mượt mà',
          type: 'comparison',
          image: stableOperationImg,
          oldImage: appNotRespondingImg
        },
        {
          title: 'Tối ưu Hóa',
          description: 'Thay thế 3+ bot rời rạc chỉ bằng 1 giải pháp đồng bộ duy nhất.',
          type: 'comparison',
          oldImage: bloatBotsImg,
          image: optOneBotImg
        },
        {
          title: 'Dễ dàng Sử dụng',
          description: 'Giao diện trực quan, tài liệu chi tiết và setup nhanh chóng.',
          type: 'comparison',
          oldImage: complexUiOldImg,
          image: simpleUiNewImg
        },
        {
          title: 'Hỗ trợ Tận tâm',
          description: 'Đội ngũ support luôn sẵn sàng giải quyết mọi vấn đề kỹ thuật.',
          type: 'comparison',
          customVisual: 'support'
        }
      ],
      labels: {
        otherBot: 'Bot thông thường',
        ourBot: 'KentaBuckets',
        before: 'Trước kia',
        after: 'KentaBuckets'
      }
    },
    testimonials: {
      title: 'Cộng đồng nói gì?',
      readMore: 'Xem thêm đánh giá tại top.gg'
    },
    cta: {
      title: 'Sẵn sàng nâng cấp Server?',
      subtitle: 'Tham gia hàng ngàn cộng đồng khác đang sử dụng KentaBuckets để quản lý và phát triển Discord Server.',
      button: 'Thêm Bot ngay'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      docs: 'Documentation',
      getStarted: 'Get Started',
      language: 'Language'
    },
    hero: {
      title: 'KentaBuckets',
      subtitle: 'All-in-one Discord Bot providing exclusive tools for management, automation, and interaction, helping you run your Discord Server professionally.',
      invite: 'Invite Bot!',
      docs: 'Read Documentation'
    },
    features: {
      title: 'Key Features',
      items: [
        {
          title: 'Fishing System',
          description: 'Experience realistic fishing with Rarity system, various Rods and Baits. Features Inventory, Fish Market, and competitive Leaderboards.'
        },
        {
          title: 'Word Chain',
          description: 'Fun and creative game. Players connect the last word of the previous message to the first word of the next.'
        },
        {
          title: 'Vote Statistics',
          description: 'Create and manage voting contests with custom participation requirements.'
        },
        {
          title: 'Custom Role',
          description: 'Allow users to manage their own special roles safely and efficiently.'
        },
        {
          title: 'Giveaway',
          description: 'Advanced giveaway creation with custom requirements.'
        },
        {
          title: 'Safety System',
          description: 'Secure your server with AntiNuke and AntiHoist. Customize limits, manage Whitelists, and control command usage with ease.'
        }
      ]
    },
    why: {
      title: 'Why use KentaBuckets?',
      items: [
        {
          title: 'Stability',
          description: '99.45% uptime. Always ready to serve.',
          type: 'comparison',
          oldImage: appNotRespondingImg
        },
        {
          title: 'Diversity',
          description: 'Reduce 4-5 bots down to just 1.',
          type: 'comparison',
          oldImage: bloatBotsImg,
          image: optOneBotImg
        },
        {
          title: 'Simplicity',
          description: 'Consistent command structure and clear documentation.',
          type: 'comparison',
          oldImage: complexUiOldImg,
          image: simpleUiNewImg
        },
        {
          title: 'Personality',
          description: 'Enthusiastic support team ready to help.',
          type: 'comparison',
          customVisual: 'support'
        }
      ],
      labels: {
        otherBot: 'Other Bots',
        ourBot: 'KentaBuckets',
        before: 'Before',
        after: 'After'
      }
    },
    cta: {
      title: 'Ready to level up?',
      subtitle: 'Join thousands of amazing communities using KentaBuckets to manage and grow their Discord Servers.',
      button: 'Invite Bot Now'
    }
  }
}

export function useLanguage() {
  const t = computed(() => translations[currentLang.value])

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'vi' ? 'en' : 'vi'
  }

  return {
    currentLang,
    t,
    toggleLanguage
  }
}
