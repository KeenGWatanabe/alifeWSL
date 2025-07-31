Yarn : Linux, WSL, Shell
Accessing the project follow below steps"
at Ubuntu terminal:
![UbuntuLTSterminal](/DOCS/PICS/UbuntuLTSterminal.png)
cd into project directory, and type `code .`
![cdCode](/DOCS/PICS/cdCode.png)


# initialize project
```shell  (window/WSL)
npx create-next-app --typescript --use-yarn
```
```bash
npx create-next-app --typescript
```
![nextjs setup](/images/nextSetup.png)

cd .. >alife_win
```shell (window/WSL)
yarn dev
```
```bash (debian)
npm run dev
```
clear globals.css
install tailwindcss v3.x  (latest is v4.1/ https://tailwindcss.com/ vite projects only)

https://v3.tailwindcss.com/docs/installation (recommended)

# install tailwindcss
```shell (window/WSL)
yarn add -D tailwindcss@3 postcss autoprefixer
```
```bash (debian)
npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p
```

# add these to tailwind.config.js
"./app/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
# add these to global.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;   

html,
body,
:root {
  height: 100%;
}
```
# create /app/components folder

# react-icons
```shell (window/WSL)
yarn add react-icons zustand axios react-hook-form react-hot-toast
```
```bash (debian)
npm install react-icons
```
# zustand
```bash (debian)
npm install zustand
```
# axios
```bash (debian)
npm install axios
```
# react-hook-form
```bash (debian)
npm install react-hook-form
```
# react-hot-toast
```bash (debian)
npm install react-hot-toast
```

# prisma
```shell
yarn add @prisma/client @auth/prisma-adapter

yarn add -D prisma
```bash
npm install -D prisma

npx prisma init
```
![npx prisma init](/alife_wsl/DOCS/PICS/npxPrismaInit.png)
Change postgresql to mongodb

# install prisma.io extension

CHECK: db name: / swim / nextjs

# prisma db 
```shell
yarn add @prisma/client (window/WSL)
yarn add prisma --dev
npx prisma db push
```
```bash
npm install @prisma/client (debian)

npx prisma db push
```
![npx prisma db push](/alife_wsl/DOCS/PICS/npxPrismaDbPush.png)

# prima next-auth
src: https://authjs.dev/getting-started/adapters/prisma
```shell
(window/WSL)
yarn add @prisma/client @auth/prisma-adapter

(debian)
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
```

# bcrypt
```shell
(window/WSL-js provides its own types defn)
yarn add bcryptjs
(linux)
npm install bcrypt
npm install -D @types/bcrypt
```


yarn fixes Deepseek (mckeen.it)
1:53:40

# Deployment to Vercel
```shell
yarn build
  OR
yarn next build --debug
```

```bash
npm run lint

npm run build
# Or for full production simulation:
npx vercel build
```
Push to github main

# goto Vercel
Add new project;
Import Git Repository;
Configure Project;
copy paste .env to Environment Variables;
Click Deploy


