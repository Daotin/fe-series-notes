<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/logo.jpg',
    name: 'Daotin',
    title: 'Frondend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/daotin' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

# 前端目录

首页 <Badge type="warning" text="beta" />

<VPTeamMembers size="small" :members="members" />
