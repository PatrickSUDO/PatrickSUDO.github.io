module.exports = {
  "title": "Patrick's Blog",
  "description": " ",
  "locales": {
    '/': {
      lang: 'en-US'
    }
  },
  "head": [
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
  "theme": "reco",
  "themeConfig": {
    mode: 'light',
    noFoundPageByTencent: false,
    modePicker: false,
    locales: {
      '/': {
        vssueConfig: {
          locale: 'en-US',
          platform: 'github',
          owner: 'PatrickSUDO',
          repo: 'comment',
          clientId: '6aba19e2a544784496f0',
          clientSecret: '76dff93d6c2daa6abe03f4d2993c32fbffc1f0af',
          autoCreateIssue:true
        }
      }
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/PatrickSUDO",
            "icon": "reco-github"
          },
          {
            "text": "Mail Me",
            "link": "mailto:patricksuph@gmail.com",
            "icon": "reco-mail"
          },
          {
            "text": "Linkedin",
            "link": "https://www.linkedin.com/in/paihan-su-92b46488/",
            "icon": "reco-linkedin"
          }

        ]
      },
      {
        "text": "About",
        "link": "/blogs/about/",
        "icon": "reco-account"
      },
    ],
    "sidebar": 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
  
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Patrick Su",
    // "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // ['@vssue/vuepress-plugin-vssue', {
    //   platform: 'github',
    //   owner: 'PatrickSUDO',
    //   repo: 'comment',
    //   clientId: '6aba19e2a544784496f0',
    //   clientSecret: '8d29cc2f04989d822d63ce7dd662dfa1042bdcbb',
    // }], 
    ['cursor-effects']
],
}