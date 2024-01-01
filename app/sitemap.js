export default function sitemap() {
    return [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL 
      },
      {
        url: process.env.NEXT_PUBLIC_BASE_URL  + '/about'
      },
      {
        url: process.env.NEXT_PUBLIC_BASE_URL  + '/case-study/oppia'
      },
      {
        url: process.env.NEXT_PUBLIC_BASE_URL  + '/case-study/jogovest'
      },
      {
        url: process.env.NEXT_PUBLIC_BASE_URL  + '/case-study/tasty-and-yummy'
      },
    ]
  }