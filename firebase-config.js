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
  publicKey:                "grdrX5_Wbe2ZLPBRy",
  serviceId:                "service_hfh7huu",
  orderConfirmTemplateId:   "order_confirm",
  adminNotifTemplateId:     "admin_l2dtgxx",
};

// ── TOTP Secret ───────────────────────────────────────────────────────────────
// Generate your own at https://it-tools.tech/otp-generator (Base32, 16+ chars)
// After changing this, re-scan the QR code on the admin login page.
export const TOTP_SECRET = "7XJJHIVF3X2PNV4U"; // ← CHANGE THIS

// ── Admin URL slug ────────────────────────────────────────────────────────────
// Admin panel is only accessible at /?admin  (or yoursite.com/?admin)
// You can change the query param name here if you want extra obscurity
export const ADMIN_PARAM = "admin";
