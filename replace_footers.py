import re, os

FOOTER_CSS = r'''
    /* ---- FOOTER ---- */
    footer{background:var(--ink);padding:0;}
    .foot-news{border-bottom:1px solid rgba(255,255,255,.1);padding:32px 0;}
    .foot-news-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;}
    .foot-news h3{font-family:'Fraunces',serif;font-weight:600;font-size:16px;color:#fff;margin:0 0 2px;}
    .foot-news p{font-size:12px;color:rgba(255,255,255,.5);margin:0;}
    .foot-news-form{display:flex;gap:8px;}
    .foot-news-form input{padding:8px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#fff;font-size:13px;outline:none;min-width:220px;}
    .foot-news-form input::placeholder{color:rgba(255,255,255,.35);}
    .foot-news-form input:focus{border-color:var(--mint);}
    .foot-news-form button{padding:8px 20px;border-radius:8px;background:var(--mint);color:#fff;font-size:13px;font-weight:600;border:none;cursor:pointer;transition:background .2s;}
    .foot-news-form button:hover{background:#17806a;}

    .foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;padding:40px 0 24px;}
    .foot-brand .logo{color:#fff;}
    .foot-brand .logo span{color:var(--mint);}
    .foot-brand p{font-size:12px;color:rgba(255,255,255,.5);margin:12px 0 16px;line-height:1.6;max-width:280px;}
    .foot-social{display:flex;gap:8px;}
    .foot-social a{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.4);transition:all .2s;}
    .foot-social a:hover{border-color:var(--mint);background:var(--mint);color:#fff;}
    .foot-col h4{font-size:12px;font-weight:600;color:#fff;margin:0 0 12px;}
    .foot-col ul{margin:0;padding:0;list-style:none;}
    .foot-col li{margin-bottom:8px;}
    .foot-col a{font-size:12px;color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;}
    .foot-col a:hover{color:#fff;}

    .foot-bar{border-top:1px solid rgba(255,255,255,.1);padding:16px 0;}
    .foot-bar-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;font-size:12px;color:rgba(255,255,255,.4);}
    .foot-bar-inner a{color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;}
    .foot-bar-inner a:hover{color:#fff;}
    .foot-links{display:flex;gap:16px;}

    /* ---- RESPONSIVE ---- */
    @media (max-width:960px){
      .foot-grid{grid-template-columns:1fr 1fr;}
    }
    @media (max-width:720px){
      .foot-grid{grid-template-columns:1fr;}
    }
'''

FOOTER_HTML = '''  <!-- ============ FOOTER ============ -->
  <footer>
    <div class="wrap">
      <div class="foot-news">
        <div class="foot-news-inner">
          <div>
            <h3>Stay updated</h3>
            <p>Get the latest on global talent and hiring.</p>
          </div>
          <div class="foot-news-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div class="foot-grid">
        <div class="foot-brand">
          <a href="index.html" class="logo" style="font-size:18px;">
            <svg width="24" height="24" viewBox="0 0 34 34" fill="none" style="display:none;">
              <path d="M17 2C9 2 2 9 2 17s7 15 15 15" stroke="#1E8F74" stroke-width="3" stroke-linecap="round"/>
              <path d="M17 2c8 0 15 7 15 15s-7 15-15 15" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
            </svg>
            Dime<span>Republic</span>
          </a>
          <p>Global talent from Pakistan. Massive impact for your business. Let's build the future together.</p>
          <div class="foot-social">
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.6 0-1.2-.2-1.8-.5v.1a4.1 4.1 0 003.3 4 4.2 4.2 0 01-1.8.1 4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          </div>
        </div>
        <div class="foot-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="customer-support.html">Customer Support</a></li>
            <li><a href="developers.html">Developers</a></li>
            <li><a href="devops.html">DevOps</a></li>
            <li><a href="marketing.html">Marketing</a></li>
            <li><a href="virtual-assistants.html">Virtual Assistants</a></li>
            <li><a href="recruiting.html">Recruiting</a></li>
            <li><a href="sales-teams.html">Sales Teams</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Roles</h4>
          <ul>
            <li><a href="support-agents.html">Support Agents</a></li>
            <li><a href="developers-role.html">Developers</a></li>
            <li><a href="devops-engineers.html">DevOps Engineers</a></li>
            <li><a href="marketing-experts.html">Marketing Experts</a></li>
            <li><a href="virtual-assistants-role.html">Virtual Assistants</a></li>
            <li><a href="recruiters.html">Recruiters</a></li>
            <li><a href="finance-accounting.html">Finance &amp; Accounting</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="https://calendly.com/dimerepublic30/30min" target="_blank">Contact Us</a></li>
            <li><a href="index.html#sop">Our Process</a></li>
            <li><a href="index.html#case-studies">Case Studies</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="index.html#case-studies">Case Studies</a></li>
            <li><a href="index.html#sop">Our Process</a></li>
            <li><a href="guides.html">Guides</a></li>
            <li><a href="index.html#pricing">Pricing</a></li>
          </ul>
          <h4 style="margin-top:20px;">Legal</h4>
          <ul>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
            <li><a href="cookie-policy.html">Cookie Policy</a></li>
            <li><a href="data-processing-agreement.html">Data Processing Agreement</a></li>
            <li><a href="gdpr-compliance.html">GDPR Compliance</a></li>
            <li><a href="acceptable-use-policy.html">Acceptable Use Policy</a></li>
            <li><a href="refund-cancellation.html">Refund &amp; Cancellation</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="foot-bar">
      <div class="wrap">
        <div class="foot-bar-inner">
          <div class="foot-links">
            <a href="mailto:hello@dimerepublic.com"><span style="color:rgba(255,255,255,.6);">Email:</span> hello@dimerepublic.com</a>
            <a href="tel:+14705550198"><span style="color:rgba(255,255,255,.6);">Phone:</span> +1 (470) 555-0198</a>
            <a href="https://www.dimerepublic.com">www.dimerepublic.com</a>
          </div>
          <p>&copy; 2026 DimeRepublic. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>'''

ROOT = '/home/ahmed-rana/Downloads/globaledge'

FILES = [
    'about-us.html', 'acceptable-use-policy.html', 'careers.html', 'contact-us.html',
    'cookie-policy.html', 'customer-support.html', 'data-processing-agreement.html',
    'developers-role.html', 'developers.html', 'devops-engineers.html', 'devops.html',
    'finance-accounting.html', 'gdpr-compliance.html', 'guides.html', 'marketing-experts.html',
    'marketing.html', 'privacy-policy.html', 'recruiters.html', 'recruiting.html',
    'refund-cancellation.html', 'sales-teams.html', 'support-agents.html',
    'terms-conditions.html', 'virtual-assistants-role.html', 'virtual-assistants.html',
    'titan-anaesthesia-case-study.html', 'igate-dimerepublic-case-study.html',
    'infinitex-trade-syndicate-case-study.html',
]

processed = []

for fname in FILES:
    fpath = os.path.join(ROOT, fname)
    if not os.path.exists(fpath):
        print(f"SKIP (not found): {fname}")
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Insert footer CSS before </style>
    # Find the last occurrence of </style> and insert before it
    style_end = content.rfind('</style>')
    if style_end == -1:
        print(f"SKIP (no </style>): {fname}")
        continue

    # Insert footer CSS before </style>
    content = content[:style_end] + FOOTER_CSS + '\n' + content[style_end:]

    # 2. Replace existing footer HTML
    footer_start = content.find('<footer')
    if footer_start == -1:
        print(f"SKIP (no <footer>): {fname}")
        continue

    footer_end = content.find('</footer>', footer_start)
    if footer_end == -1:
        print(f"SKIP (no </footer>): {fname}")
        continue
    footer_end += len('</footer>')

    content = content[:footer_start] + FOOTER_HTML + content[footer_end:]

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"OK: {fname}")
    processed.append(fname)

print(f"\nProcessed {len(processed)} files:")
for p in processed:
    print(f"  - {p}")
