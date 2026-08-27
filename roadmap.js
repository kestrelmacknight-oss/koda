const PHASES = [
  {
    label:"Phase 0",
    title:"Foundation &mdash; shipped",
    accent:"#1D9E75",
    badge:"Shipped", badgeClass:"badge-shipped",
    desc:"The complete architectural foundation: cryptographic protocol, backend schema, real-time channels, and all primary product surfaces.",
    sections:[
      {title:"Cryptography (Rust &mdash; KCP v1)",color:"#1D9E75",items:["X3DH key agreement","Double Ratchet (AES-256-GCM)","Ed25519 identity signing","Session proofs","ZeroizeOnDrop key material","ZK moderation tiers 1&ndash;3"]},
      {title:"Backend (Elixir / Phoenix)",color:"#1D9E75",items:["PostgreSQL schema on Neon","Accounts + JWT auth","X3DH key bundle store","Server + channel CRUD","Role-based permissions","WebRTC signaling","Railway deployment","Cloudflare R2 media storage"]},
      {title:"Frontend (Flutter)",color:"#1D9E75",items:["Auth flow (register &rarr; verify &rarr; home)","Server rail + channel sidebar","Text channel (E2EE)","Gallery channel","Voice channel (VARM tiles)","Stage channel","Server settings + role manager","Discord template import"]},
    ]
  },
  {
    label:"Phase 1",
    title:"Alpha &mdash; live now",
    accent:"#2DD4A0",
    badge:"Alpha", badgeClass:"badge-alpha",
    desc:"Koda is in active Alpha with real users. All core social primitives are shipped: friend system, mentions, notifications, rules gates, role selection, and channel permissions.",
    sections:[
      {title:"Messaging &amp; real-time",color:"#2DD4A0",items:["End-to-end encrypted text channels","Typing indicators","@everyone mentions","@roleName mentions","@username mentions","In-app notification bell + badge","Windows system tray notifications","Real-time delivery via Phoenix PubSub"]},
      {title:"Voice &amp; video",color:"#2DD4A0",items:["LiveKit voice channels (TCP mode)","Webcam video tiles","Screen sharing","VARM overlay","VoiceBar (voice while browsing)","Tap-to-expand video tiles","Stage channels (speaker/listener)"]},
      {title:"Social graph",color:"#2DD4A0",items:["Friend requests (send/accept/decline)","Friends list in DM sidebar","Friend requests tab","Add friend from user profile","Direct messages","DM conversations list"]},
      {title:"Server management",color:"#2DD4A0",items:["Rules channel (acceptance gate)","Role selection channel","Channel role permissions","Category role permissions","Self-assignable role toggle","Server invite system + landing page","Discord template import","Server avatars","Category grouping in sidebar"]},
      {title:"Platform",color:"#2DD4A0",items:["Windows installer (Inno Setup)","macOS DMG","Linux tar.gz","GitHub Actions CI/CD pipeline","Auto-update notifications on launch","Email verification (Resend)","Invite landing page (koda.fyi/invite)"]},
    ]
  },
  {
    label:"Phase 2",
    title:"Platform hardening",
    accent:"#7F77DD",
    badge:"Next priority", badgeClass:"badge-next",
    desc:"Deepen the Alpha foundation with mobile apps, message features users expect from day-to-day use, and the monetization layer that makes Koda sustainable.",
    sections:[
      {title:"Mobile",color:"#7F77DD",items:["iOS app (Flutter)","Android app (Flutter)","Push notifications (APNs + FCM)","Deep links (koda://invite/XXX)","Background message sync"]},
      {title:"Messaging features",color:"#7F77DD",items:["Message reactions","Message editing","Message pinning","Thread / reply chains","Announcement channels","Read receipts","Message search","File + image attachments","Link previews","GIF picker"]},
      {title:"Voice improvements",color:"#7F77DD",items:["Phoenix Presence (who's in voice)","Spatial audio (proximity voice)","Noise suppression + echo cancellation","Audio loudness normalization","Pop-out video windows"]},
      {title:"Encryption &mdash; complete the loop",color:"#7F77DD",items:["Multi-device key synchronization","Key rotation + SPK refresh","Encrypted media attachments","Sealed sender","DM friends-only enforcement"]},
      {title:"Creator monetization",color:"#7F77DD",items:["Boost token system (Koda Classes 0&ndash;5)","Server marketplace","Digital goods delivery","Tip jar","Paid stage tickets","Revenue dashboard","Throne.com integration","Printful / Printify sync"]},
    ]
  },
  {
    label:"Phase 3",
    title:"Intelligence layer",
    accent:"#185FA5",
    badge:"Planned", badgeClass:"badge-planned",
    desc:"Add intelligence to moderation, server setup, and accessibility &mdash; all operating within the zero-knowledge constraint. No plaintext ever reaches a model unless the user explicitly opts in.",
    sections:[
      {title:"Visp AI assistant",color:"#185FA5",items:["Natural language server setup","Smart walkthrough branching","Event creation from natural language","Boost ROI advisor","Visp character animation"]},
      {title:"ZK-compatible moderation AI",color:"#185FA5",items:["Metadata-only spam detection","Raid detection","Bot behavior classifier","Auto-mute with mod queue","Mod decision confidence score","False positive appeal fast-track"]},
      {title:"Accessibility",color:"#185FA5",items:["Live captions (on-device STT)","Screen reader-optimized layout","Keyboard navigation","High contrast mode","Dyslexia-friendly font option","Font size / density controls"]},
      {title:"Localization",color:"#185FA5",items:["Message translation (opt-in)","Auto-detect message language","Server language setting","20+ language UI localization"]},
    ]
  },
  {
    label:"Phase 4",
    title:"Platform expansion",
    accent:"#993C1D",
    badge:"Planned", badgeClass:"badge-planned",
    desc:"Open Koda to third-party developers and expand the product surface to cover every major use case that keeps communities on competitor platforms.",
    sections:[
      {title:"Developer platform",color:"#993C1D",items:["Public REST + WebSocket API","Webhook system","Bot SDK (koda-ex library)","OAuth2 app authorization","Developer portal + API key management","Sandbox environment","Slash command framework"]},
      {title:"Live integrations",color:"#993C1D",items:["Twitch live alerts","YouTube premiere alerts","Spotify listening party","Steam game activity","Google Calendar two-way sync","Kick.com stream alerts"]},
      {title:"Community surfaces",color:"#993C1D",items:["Server discovery (public listing)","Featured servers","Server templates library","Activity feed (cross-server friends)","Cross-server events","Koda Arcade (embedded mini-games)","Server leaderboards + achievements"]},
      {title:"Enterprise",color:"#993C1D",items:["Self-hosted deployment","SAML/SSO login","Custom domain support","Data residency region selection","SLA + uptime guarantee","Audit log export (SIEM-compatible)"]},
    ]
  },
  {
    label:"Phase 5",
    title:"Technical standard",
    accent:"#993556",
    badge:"Planned", badgeClass:"badge-planned",
    desc:"The moves that make Koda's architecture a reference point &mdash; open, audited, and composable with the broader privacy and decentralization ecosystem.",
    sections:[
      {title:"Security",color:"#993556",items:["Independent KCP protocol audit (Trail of Bits / NCC Group)","Penetration testing program","Bug bounty (HackerOne)","Formal verification of Shamir implementation","FIPS 140-3 compliance path","PQC readiness (Kyber/ML-KEM hybrid X3DH)","HSM key storage for server operators"]},
      {title:"Open protocol",color:"#993556",items:["KCP v1 spec published (RFC-style)","Open source KCP reference implementation","Interoperability test suite","Community KCP extension process","Matrix / XMPP bridge (read-only gateway)","ActivityPub federation (opt-in per server)"]},
      {title:"Decentralized identity",color:"#993556",items:["W3C DID document support","Verifiable credentials","Cross-platform handle portability","Social recovery (Shamir on contacts)","Hardware key (FIDO2 / passkey) primary auth","Pseudonymous verification (ZK proof of humanity)"]},
      {title:"Privacy infrastructure",color:"#993556",items:["Zero-knowledge search (PIR-based)","Private information retrieval for member lists","Onion routing option","Differential privacy on analytics","GDPR + CCPA automated compliance","Right-to-erasure cryptographic enforcement"]},
      {title:"Compliance + trust",color:"#993556",items:["Transparency report (semi-annual)","Law enforcement request policy","Child safety report (NCMEC integration)","Data portability export","Independent privacy audit (Cure53 or equivalent)"]},
    ]
  },
];

function makePhase(p, idx) {
  const card = document.createElement('div');
  card.className = 'phase-card';
  const open = idx <= 1;
  card.innerHTML = `
<div class="phase-header" data-idx="${idx}">
  <div class="phase-accent" style="background:${p.accent}"></div>
  <div class="phase-meta">
    <div class="phase-label" style="color:${p.accent}">${p.label}</div>
    <div class="phase-title">${p.title}</div>
  </div>
  <span class="phase-badge ${p.badgeClass}">${p.badge}</span>
  <span class="phase-chevron${open ? ' open' : ''}">&#9654;</span>
</div>
<div class="phase-body${open ? ' open' : ''}">
  <p class="phase-desc">${p.desc}</p>
  ${p.sections.map(s => `
    <div class="feat-section">
      <div class="feat-section-title">${s.title}</div>
      <div class="chips">
        ${s.items.map(item => `<span class="chip"><span class="chip-dot" style="background:${s.color}"></span>${item}</span>`).join('')}
      </div>
    </div>
  `).join('')}
</div>`;
  return card;
}

const container = document.getElementById('phases');
PHASES.forEach((p, i) => container.appendChild(makePhase(p, i)));

document.addEventListener('click', e => {
  const h = e.target.closest('.phase-header');
  if (!h) return;
  const card = h.closest('.phase-card');
  const body = card.querySelector('.phase-body');
  const chev = card.querySelector('.phase-chevron');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chev.classList.toggle('open', !isOpen);
});
