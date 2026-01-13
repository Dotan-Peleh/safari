# 🚀 פריסה ב-Netlify - הוראות מהירות

## ✅ הקוד כבר ב-GitHub!

**Repository:** [https://github.com/Dotan-Peleh/safari](https://github.com/Dotan-Peleh/safari)

---

## שלב 1: התחברות ל-Netlify

1. לך ל-[netlify.com](https://netlify.com)
2. לחץ **"Sign up"** או **"Log in"**
3. בחר **"Continue with GitHub"** (הכי קל)

---

## שלב 2: יצירת Site חדש

1. לחץ **"Add new site"** (כפתור ירוק בפינה הימנית העליונה)
2. בחר **"Import an existing project"**
3. בחר **"Deploy with GitHub"**
4. אם זה הפעם הראשונה, תצטרך להרשא ל-Netlify גישה ל-GitHub repos
5. בחר את ה-repo: **`Dotan-Peleh/safari`**

---

## שלב 3: הגדרות Build

Netlify אמור לזהות אוטומטית את ההגדרות מ-`netlify.toml`, אבל ודא:

- **Build command:** `yarn build`
- **Publish directory:** `build`
- **Node version:** 18 (מוגדר אוטומטית)

אם לא מזהה, מלא ידנית:
- **Base directory:** (ריק)
- **Build command:** `yarn build`
- **Publish directory:** `build`

---

## שלב 4: Deploy!

1. לחץ **"Deploy site"**
2. Netlify יתחיל לבנות את האפליקציה
3. תהליך הבנייה יקח 1-3 דקות
4. תקבל URL כמו: `https://safari-xxx.netlify.app`

---

## ✅ מה קורה אחרי הפריסה?

- ✅ כל commit חדש ל-`main` יגרום ל-deploy אוטומטי
- ✅ האפליקציה תהיה זמינה ב-URL של Netlify
- ✅ כל התמונות יעבדו (כי הן ב-`public/images/`)

---

## 🔧 Custom Domain (אופציונלי)

אם תרצה domain מותאם:
1. ב-Netlify → Site settings → Domain management
2. לחץ **"Add custom domain"**
3. עקוב אחר ההוראות

---

## 📝 עדכון README עם ה-URL

אחרי שתקבל את ה-URL מ-Netlify, עדכן את ה-README:

```markdown
## 🌐 Live Demo

**[צפה באפליקציה ב-Netlify](https://your-actual-url.netlify.app)**
```

---

## 🎉 סיימת!

האפליקציה תהיה זמינה ב-Netlify תוך דקות!

**Repository:** [https://github.com/Dotan-Peleh/safari](https://github.com/Dotan-Peleh/safari)

