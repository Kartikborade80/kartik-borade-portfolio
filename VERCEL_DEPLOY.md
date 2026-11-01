Vercel वर Vite+React प्रोजेक्ट (kartik-borade-portfolio) कसा deploy करायचा — मराठीत साध्या शब्दांत

हे फाइल तुमच्या प्रोजेक्ट रूटमध्ये ठेवले आहे. `vercel.json` मध्ये SPA साठी rewrite नियम आधीच जोडलेला आहे.

Live Website: https://kartik-borade-portfolio.vercel.app/

1) लोकली बिल्ड आणि तपासणी
```powershell
# एकदाच चालवा
npm install
npm run build

# dist फोल्डर तयार आहे का तपासा
dir .\dist
```

2) GitHub रेपोशी लिंक
- Repo नाव: `kartik-borade-portfolio`
- GitHub User: `Kartikborade80`

```powershell
# जर रेपो नसला तर
git init
git add .
git commit -m "ready for deploy"
git branch -M main
git remote add origin https://github.com/Kartikborade80/kartik-borade-portfolio.git
git push -u origin main
```

टीप: तुमचा `git push` error आला असेल (Exit Code 1) तर खाली तपासा:
- Remote URL आधी सेट आहे का? `git remote -v` चालवा.
- Authentication (PAT) वापरा: GitHub वर पासवर्ड वापरता येत नाही — Personal Access Token (PAT) वापरा किंवा GitHub CLI/credential manager configure करा.

3) Vercel वर Git integration (Recommended)
1. vercel.com वर account उघडा आणि GitHub connect करा.
2. Dashboard → New Project → Import Git Repository → तुमचा `kartik-borade-portfolio` रेपो निवडा.
3. Build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add any Environment Variables (Dashboard → Settings → Environment Variables) जर गरज असेल.
5. Import केल्यावर Vercel automatic build आणि deploy करेल.

4) Vercel CLI (जर तुम्हाला त्वरित terminal deploy करायचे असेल)
```powershell
npm i -g vercel
vercel login
# interactive init (first time)
vercel

# production deploy
npm run build
vercel --prod
```

5) SPA (रिफ्रेश/404) समस्या
- `vercel.json` मध्ये rewrite नियम जोडला आहे जो सर्व पाथ `/` कडे redirect करतो. (`vercel.json` हे फाईल प्रोजेक्ट रूटमध्ये आहे.)

6) Live Domain
- Live Portfolio URL: https://kartik-borade-portfolio.vercel.app/

7) छोटी तपासणी (Verify)
- Dashboard मध्ये Build logs तपासा.
- Deploy झालेल्या URL उघडा आणि सर्व रूट्स नेविगेट करून refresh करा.

-- समाप्त --
