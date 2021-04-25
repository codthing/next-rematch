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

```base
//使用/或者http等绝对路径
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

```base
//标签标题
import Head from 'next/head';

<Head>
  <title>First Post</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```
