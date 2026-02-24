// ═══════════════════════════════════════════════════════════════════════════
//  FIREBASE CONFIGURATION — fill in your values from Firebase Console
//  Firebase Console → Your Project → Project Settings → Your Apps → Web App
// ═══════════════════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyAyejrzkBWyahuqmdsZ4-wroBADp4HCz7s",
  authDomain: "roblox-age-estimate.firebaseapp.com",
  projectId: "roblox-age-estimate",
  storageBucket: "roblox-age-estimate.firebasestorage.app",
  messagingSenderId: "902133252975",
  appId: "1:902133252975:web:a6d78358a42f98f1bc1e9a"
};

// ── EmailJS Configuration ────────────────────────────────────────────────────
// Sign up at https://emailjs.com (free tier: 200 emails/month)
// See README.md for full setup instructions.
export const emailjsConfig = {
  publicKey:                "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId:                "YOUR_EMAILJS_SERVICE_ID",
  orderConfirmTemplateId:   "YOUR_TEMPLATE_ORDER_CONFIRM",
  paymentDeclinedTemplateId:"YOUR_TEMPLATE_PAYMENT_DECLINED",
  paymentAcceptedTemplateId:"YOUR_TEMPLATE_PAYMENT_ACCEPTED",
  finishedTemplateId:       "YOUR_TEMPLATE_FINISHED",
};

// ── TOTP Secret ───────────────────────────────────────────────────────────────
// Generate your own at https://it-tools.tech/otp-generator (Base32, 16+ chars)
// After changing this, re-scan the QR code on the admin login page.
export const TOTP_SECRET = "JBSWY3DPEHPK3PXP"; // ← CHANGE THIS

// ── Admin URL slug ────────────────────────────────────────────────────────────
// Admin panel is only accessible at /?admin  (or yoursite.com/?admin)
// You can change the query param name here if you want extra obscurity
export const ADMIN_PARAM = "admin";
