# alifeWSL | wsl | yarn 
Accessing the project follow below steps"
at Ubuntu terminal:
![UbuntuLTSterminal](/DOCS/PICS/UbuntuLTSterminal.png)
cd into project directory, and type `code .`
![cdCode](/DOCS/PICS/cdCode.png)

[WSLsetup.md](/DOCS/2setUp.md)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### a. Recommended Vercel Project Setup

Create **three separate Vercel projects** linked to the same repo:

| Project       | Git Branch | Domain            | Environment Variables |
|---------------|------------|-------------------|-----------------------|
| Production    | main       | app.com           | Set in Vercel UI      |
| Staging       | staging    | staging.app.com   | Set in Vercel UI      |
| Development   | dev        | dev.vercel.app    | Set in Vercel UI      |

Yes! Vercel can deploy from **any Git branch**, not just the `main` branch. Here's exactly how to configure it:

### 🔗 **URL Structure Doesn't Matter**
Vercel only needs the **repository URL** (`https://github.com/user/repo`), not the branch-specific URL (`/tree/dev`). The branch is configured separately.

---

### 🛠️ **How to Set Up Multiple Environments**
| Branch      | Vercel Project Type | Domain Example         |
|-------------|---------------------|------------------------|
| `main`      | Production          | `app.com`              |
| `dev`       | Preview             | `dev-app.vercel.app`   |
| `feature/*` | Preview             | Unique URL per PR      |

---

### ⚡ **Automatic Behavior**
- Pushing to `dev` → Deploys to `dev-app.vercel.app`  
- Merging to `main` → Deploys to `app.com`  
- Every PR gets its own preview URL  

---

### 📝 **Key Notes**
1. **No need for branch URLs** in repo connection  
2. **All branches are deployable** once repo is connected  
3. **Preview deployments** are created automatically for non-main branches  

---


### b. Environment Variable Examples

**In Vercel Dashboard** (for each project):

1. **Production Project**:
   ```
   NEXTAUTH_URL=https://app.com
   DATABASE_URL=mongodb+srv://prod-db
   NEXT_PUBLIC_ENV=production
   ```

2. **Staging Project**:
   ```
   NEXTAUTH_URL=https://staging.app.com
   DATABASE_URL=mongodb+srv://stage-db
   NEXT_PUBLIC_ENV=staging
   ```

3. **Development Project**:
   ```
   NEXTAUTH_URL=https://dev.vercel.app
   DATABASE_URL=mongodb+srv://dev-db
   NEXT_PUBLIC_ENV=development
   ```

### c. Local Development Setup

```bash
# .env.local
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=mongodb://localhost:27017/localdb
NEXT_PUBLIC_ENV=local
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
