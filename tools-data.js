export const fallbackTools = [
  {
    name: 'Photopea',
    slug: 'photopea',
    category: 'Design',
    website: 'https://www.photopea.com/',
    featured: true,
    type: 'Free',
    description: 'Free online Photoshop alternative with PSD support.'
  },
  {
    name: 'Stirling PDF',
    slug: 'stirling-pdf',
    category: 'PDF',
    website: 'https://www.stirlingpdf.com/',
    featured: true,
    type: 'Open Source',
    description: 'Open-source PDF toolbox for merge, split, convert and edit.'
  },
  {
    name: 'Open WebUI',
    slug: 'open-webui',
    category: 'AI',
    website: 'https://openwebui.com/',
    featured: true,
    type: 'Open Source',
    description: 'Self-hosted AI chat UI for local and remote LLMs.'
  },
  {
    name: 'Krita',
    slug: 'krita',
    category: 'Design',
    website: 'https://krita.org/',
    featured: true,
    type: 'Open Source',
    description: 'Free and open-source painting and illustration software.'
  },
  {
    name: 'Blender',
    slug: 'blender',
    category: 'Design',
    website: 'https://www.blender.org/',
    featured: true,
    type: 'Open Source',
    description: 'Free and open-source 3D creation suite for modeling, animation and video.'
  },
  {
    name: 'ComfyUI',
    slug: 'comfyui',
    category: 'AI Image',
    website: 'https://github.com/comfyanonymous/ComfyUI',
    featured: true,
    type: 'Open Source',
    description: 'Powerful node-based Stable Diffusion workflow tool.'
  },
  {
    name: 'LibreChat',
    slug: 'librechat',
    category: 'AI',
    website: 'https://www.librechat.ai/',
    featured: true,
    type: 'Open Source',
    description: 'Open-source ChatGPT alternative with multi-model support.'
  },
  {
    name: 'LobeChat',
    slug: 'lobechat',
    category: 'AI',
    website: 'https://lobehub.com/lobechat',
    featured: true,
    type: 'Open Source',
    description: 'Beautiful open-source AI chat app with multi-model support.'
  },
  {
    name: 'AppFlowy',
    slug: 'appflowy',
    category: 'Productivity',
    website: 'https://www.appflowy.io/',
    featured: true,
    type: 'Open Source',
    description: 'Open-source Notion alternative for notes and project management.'
  },
  {
    name: 'LanguageTool',
    slug: 'languagetool',
    category: 'Writing',
    website: 'https://languagetool.org/',
    featured: true,
    type: 'Open Source/Freemium',
    description: 'Multilingual grammar and style checker.'
  }
];

export const i18n = {
  zh: {
    title: 'ToolNova',
    subtitle: '免费开源工具与付费软件平替导航',
    search: '搜索工具、分类或关键词',
    all: '全部',
    visit: '打开官网',
    detail: '查看详情',
    db: '数据库动态工具',
    fallback: '本地备用内容',
    loading: '正在读取 Firestore 数据库...',
    empty: '暂无数据，请先添加工具。'
  },
  en: {
    title: 'ToolNova',
    subtitle: 'Free and open-source alternatives to paid software',
    search: 'Search tools, categories or keywords',
    all: 'All',
    visit: 'Visit Website',
    detail: 'Details',
    db: 'Dynamic Database Tools',
    fallback: 'Local fallback content',
    loading: 'Loading Firestore database...',
    empty: 'No data yet.'
  },
  ja: {
    title: 'ToolNova',
    subtitle: '無料・オープンソース代替ツールナビ',
    search: 'ツール、カテゴリ、キーワードを検索',
    all: 'すべて',
    visit: '公式サイト',
    detail: '詳細',
    db: 'データベース連携ツール',
    fallback: 'ローカル予備データ',
    loading: 'Firestore データベースを読み込み中...',
    empty: 'データがありません。'
  },
  vi: {
    title: 'ToolNova',
    subtitle: 'Danh mục công cụ miễn phí và mã nguồn mở thay thế phần mềm trả phí',
    search: 'Tìm công cụ, danh mục hoặc từ khóa',
    all: 'Tất cả',
    visit: 'Mở trang web',
    detail: 'Chi tiết',
    db: 'Công cụ từ cơ sở dữ liệu',
    fallback: 'Dữ liệu dự phòng cục bộ',
    loading: 'Đang tải Firestore...',
    empty: 'Chưa có dữ liệu.'
  }
};
