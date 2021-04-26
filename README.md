# next-rematch
react+next+rematch的开发框架，轻松构建最棒的React应用

### Step1. 新建next.js项目
```base
npx create-next-app
or
yarn create next-app
```

### Step2. 开发/生产

```base
yarn dev //启动开发服务器

yarn build //生成用于生产的应用程序

yarn start //在生产模式下运行内置的应用程序

`Ctr + c` 停止服务器
```

### Step3. 使用TypeScript

1. 根目录新建`tsconfig.json`空文件
2. `yarn dev`
3. `yarn add --dev typescript @types/react`
4. API路由配置 `/pages/api/hello.ts`

  ```base
  import type { NextApiRequest, NextApiResponse } from 'next'

  export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: 'John Doe' })
  }
  ```
  
5. 自定义APP `/pages/api/_app.tsx`

  ```base
  import type { AppProps /*, AppContext */ } from 'next/app'
  import '../styles/globals.css'

  function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }

  export default MyApp
  ```
  
6. `yarn dev`

### 路由Link

```base
import Link from 'next/link'

//在当前页跳转
<Link href="/">Back to home</Link>

//跳转到新标签页
<Link href="/">
  <a className="foo" target="_blank" rel="noopener noreferrer">Hello World</a>
</Link>

```

### 静态资产、元数据和CSS

> 图片使用/或者http等绝对路径

```base
import Image from 'next/image'

const MyComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="My Name"
    />
)
```

> 标签标题

```base
import Head from 'next/head';

<Head>
  <title>First Post</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```
> components 中构建布局组件 layout.tsx

```base
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}

//styles 中定义layout.module.css
.container {
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    border-bottom-width: 1rem;
    border-bottom-color: blue;
}
```
> 全局样式

```base
//pages/_app.tsx
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

//styles/globals.css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: black;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

```

> 自定义PostCSS,使用Tailwind CSS

```base
// 1. 安装依赖
yarn add tailwindcss postcss-preset-env postcss-flexbugs-fixes

// 2. 新建 postcss.config.ts
export default module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ]
    ]
}

// 3. 新建 tailwind.config.ts 用来删除未使用的CSS
export default module.exports = {
    purge: [
        // './components/MyComponent.tsx',
    ]
    // ...
}

```
