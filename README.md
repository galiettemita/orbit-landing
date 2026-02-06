# Orbit Landing Page

Professional Next.js landing page for Orbit - Your AI Assistant on WhatsApp.

## Features

- ✅ Responsive design (mobile-first)
- ✅ QR code generation for WhatsApp
- ✅ Beautiful gradient UI
- ✅ Features section
- ✅ Pricing tiers
- ✅ FAQ section
- ✅ SEO optimized

## Current Status

🔸 **Test Mode**: Landing page currently uses WhatsApp test number (15551680651)

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

## Deployment to Vercel

### Step 1: Push to GitHub

\`\`\`bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Orbit landing page"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/orbit-landing.git
git branch -M main
git push -u origin main
\`\`\`

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free tier is sufficient)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment

### Step 3: Configure Custom Domain (Optional)

1. Buy domain from [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)
2. In Vercel dashboard → Project Settings → Domains
3. Add your domain (e.g., \`useorbit.com\`)
4. Follow Vercel's DNS instructions
5. Add records to your domain registrar (GoDaddy/Namecheap)
6. Wait for DNS propagation (15 mins - 24 hours)

## When to Buy Domain & Switch to Production

### Phase 1: NOW - Test Mode ✅
- [x] Landing page built with test number
- [x] Deploy to Vercel
- [x] Preview the landing page
- [ ] Share preview with team/friends

### Phase 2: Before Public Launch 🎯
**Do these tasks BEFORE announcing Orbit publicly:**

1. **Buy Domain** (~5 minutes, $12/year)
   - Recommended: \`useorbit.com\` or \`orbitai.com\`
   - Buy from Namecheap or GoDaddy
   - Configure DNS to point to Vercel

2. **Get Production WhatsApp Number** (1-3 days)
   - Option A: Use existing WhatsApp Business number
   - Option B: Get new number via Twilio ($1-2/month)
   - Register with WhatsApp Business
   - Connect to Meta Business Manager

3. **Submit for Meta Production Review** (1-3 days)
   - In Meta Business Manager → App Review
   - Provide business verification
   - Submit Privacy Policy and Terms of Service
   - Wait for approval

4. **Update Landing Page with Production Number**
   - Edit \`/app/page.tsx\` line 10:
   \`\`\`typescript
   const WHATSAPP_NUMBER = 'YOUR_PRODUCTION_NUMBER'; // e.g., '15551234567'
   \`\`\`
   - Commit and push → Vercel auto-deploys

5. **Go Live!** 🚀
   - Share landing page URL
   - Post on social media
   - Launch on Product Hunt

### Phase 3: Post-Launch (Optional) 📈
- Add Google Analytics
- Add Facebook Pixel
- Set up email capture
- A/B test pricing
- Add testimonials

## Environment Variables

No environment variables needed for basic deployment.

Optional for analytics:
- \`NEXT_PUBLIC_GA_ID\` - Google Analytics ID
- \`NEXT_PUBLIC_FB_PIXEL_ID\` - Facebook Pixel ID

## Updating WhatsApp Number

To switch from test to production number:

\`\`\`typescript
// In app/page.tsx
const WHATSAPP_NUMBER = 'YOUR_NEW_NUMBER'; // Line 10
\`\`\`

Commit, push, and Vercel will auto-deploy in 2 minutes.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **QR Code**: qrcode library
- **Deployment**: Vercel
- **Domain**: GoDaddy or Namecheap

## Support

Questions? Check the main backend repo or contact support.

---

**Last Updated**: 2026-02-05
**Status**: Test Mode - Ready for Production Setup
