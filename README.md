# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

参考链接： http://www.bootstrapmb.com/item/439/preview

### 问题参考链接

问：使用 useFetch 或者 useAsyncData 时，如何处理原始数据？

答：使用 useAsyncData 时，可以使用 `transform` 来处理原始数据，具体做为可参考链接： https://xxy5.com/nuxt3/composable-use-async-data.html#%E7%B1%BB%E5%9E%8B

参考项目：https://toscode.gitee.com/BrandonJMuller/nuxt3-chinese-examples

另外一点，在 Nuxt3 中，使用 useFetch 获取数据后，是没有办法直接处理原始数据的，如果我们要处理原数据，除上述方法外，还可以使用 unref(data) 后，再进行数据处理
