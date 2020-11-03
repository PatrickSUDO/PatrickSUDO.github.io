module.exports = {
  title: "Patrick's Blog",
  description: " ",
  locales: {
    '/': {
      lang: 'en-US'
    }
  },
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // permalink: "/:year/:month/:day/:slug",
  theme: "reco",
  themeConfig: {
    authorAvatar: '/avatar.jpg',
    mode: 'light',
    
    noFoundPageByTencent: false,
    modePicker: false,

    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/PatrickSUDO",
            icon: "reco-github"
          },
          {
            text: "Mail Me",
            link: "mailto:patricksuph@gmail.com",
            icon: "reco-mail"
          },
          {
            text: "Linkedin",
            link: "https://www.linkedin.com/in/paihan-su-92b46488/",
            icon: "reco-linkedin"
          }

        ]
      },
      {
        text: "About",
        link: "/blogs/about/",
        icon: "reco-account"
      },
    ],
    
    type: "blog",
    smoothScroll: true,
    blogConfig: {
      "category": {
        "location": 2,
        "text": "Category"
      },
      tag: {
        "location": 3,
        "text": "Tag"
      }
    },
  
    // logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    sidebarDepth: 4,
    lastUpdated: "Last Updated",
    author: "Patrick Su",
    startYear: "2020"
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['cursor-effects'],
    // ['seo'],
    // ['@vuepress/plugin-blog'],
    ['vuepress-plugin-mathjax'],
    ['vuepress-plugin-disqus'],
    ['sitemap', {
      hostname:'https://patricksudo.github.io'
    }],
    // ['vuepress-plugin-auto-sidebar'],
    
],
}