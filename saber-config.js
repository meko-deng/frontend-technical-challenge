const product = require('./content/product')

const productList = Array(56).fill(Object.assign({}, product))
productList[2] = {
  ...productList[2],
  isSale: true,
  salePrice: '$49.98'
}

module.exports = {
  siteConfig: {
    header: {
      primary: [
        {
          title: 'Shop',
          link: '/'
        },
        {
          title: 'About',
          link: '/'
        },
        {
          title: 'Visit',
          link: '/'
        }
      ],
      secondary: [
        {
          title: 'Search',
          link: '/'
        },
        {
          title: 'Login',
          link: '/'
        }
      ]
    },
    page: {
      title: 'Collection Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum enim vel dapibus commodo. Suspendisse nec pharetra metus.',
      products: productList
    }
  }
}
