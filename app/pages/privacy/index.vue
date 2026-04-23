<script setup lang="ts">
useHead({
  title: 'Privacy Policy · Array42',
  meta: [{ name: 'description', content: 'Array42 privacy policy.' }],
})
</script>

<template>
  <main class="mx-auto max-w-3xl px-7 py-18 md:py-24 text-neutral-900 bg-neutral-50 min-h-screen">
    <header class="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between border-b border-neutral-200 pb-5 mb-14 text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
      <a href="https://www.array42.com" class="text-neutral-900 no-underline">Array42</a>
      <div class="sm:text-right">
        Privacy Policy<br>
        Effective 23 April 2026
      </div>
    </header>

    <h1 class="text-5xl md:text-6xl font-light leading-tight tracking-tight mb-12">Privacy Policy</h1>

    <div class="space-y-4 leading-relaxed">
      <p>Array42 is a web development and digital agency based in Portugal. This policy explains what personal data we collect, how we use it, and the rights you have over it. It applies to our website and to the applications and integrations we build and operate for our clients.</p>

      <p>We comply with the General Data Protection Regulation (GDPR) and Portuguese Law 58/2019.</p>
    </div>

    <h2 class="text-xl font-medium mt-13 mb-3">Who we are</h2>
    <p class="leading-relaxed">Array42 is the data controller for data collected directly by us. You can reach us at <a href="mailto:info@array42.com" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">info@array42.com</a>. For privacy and security matters, use <a href="mailto:security@array42.com" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">security@array42.com</a>.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">What we collect</h2>
    <ul class="list-disc pl-6 space-y-1.5 marker:text-neutral-500 leading-relaxed">
      <li>Identification and contact data (name, company, email, phone, address) of clients and prospects.</li>
      <li>Commercial data (contracts, invoices, communications).</li>
      <li>Account credentials and tokens issued by third-party platforms that you authorize us to access on your behalf.</li>
      <li>Technical data (IP address, server and application logs) for security and troubleshooting.</li>
      <li>Order and buyer data when we operate e-commerce services on behalf of a merchant client.</li>
    </ul>

    <h2 class="text-xl font-medium mt-13 mb-3">How we use your data</h2>
    <ul class="list-disc pl-6 space-y-1.5 marker:text-neutral-500 leading-relaxed mb-4">
      <li>To deliver the services we are contracted to provide.</li>
      <li>To communicate with you about proposals, contracts, and operational matters.</li>
      <li>To comply with Portuguese tax, accounting, and legal obligations.</li>
      <li>To secure our systems and prevent abuse.</li>
    </ul>
    <p class="leading-relaxed">We do not sell personal data, do not use it for advertising, and do not share it with third parties other than the subprocessors listed below.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Amazon Information</h2>
    <p class="leading-relaxed mb-4">When a client authorizes Array42 to access their Amazon Selling Partner account, we process data obtained through Amazon APIs and through the client's systems that synchronise with Amazon. This may include order identifiers, buyer billing information, tokenized buyer email addresses, order line items, and tax data. We refer to this data collectively as "Amazon Information".</p>
    <p class="leading-relaxed mb-4">Amazon Information is:</p>
    <ul class="list-disc pl-6 space-y-1.5 marker:text-neutral-500 leading-relaxed">
      <li><strong class="font-medium">Collected</strong> only through authorized access to the Amazon Selling Partner API and related systems.</li>
      <li><strong class="font-medium">Processed</strong> only for the purpose requested by the authorizing merchant, typically to generate and deliver compliant invoices to buyers.</li>
      <li><strong class="font-medium">Stored</strong> encrypted at rest (AES-256-GCM) and in transit (TLS 1.2 or higher).</li>
      <li><strong class="font-medium">Shared</strong> only with the subprocessors listed below, each bound by a Data Processing Agreement.</li>
      <li><strong class="font-medium">Never sold, rented, or shared with advertisers, data brokers, or any unrelated third party.</strong></li>
      <li><strong class="font-medium">Deleted</strong> within 30 days of a merchant disconnecting our application, except where a longer retention period is required by law.</li>
    </ul>

    <h2 class="text-xl font-medium mt-13 mb-3">Subprocessors</h2>
    <p class="leading-relaxed mb-4">We rely on the following subprocessors to operate our services, all bound by a Data Processing Agreement:</p>
    <ul class="list-disc pl-6 space-y-1.5 marker:text-neutral-500 leading-relaxed mb-4">
      <li><strong class="font-medium">Cloudflare</strong> for hosting, edge compute (Workers), <strong class="font-medium">KV storage for sessions</strong>, DNS, CDN, and WAF.</li>
      <li><strong class="font-medium">GitHub</strong> (Microsoft) for source code hosting and CI/CD. Our application code is stored in private GitHub repositories with multi-factor authentication enforced on all accounts.</li>
      <li><strong class="font-medium">Shopify</strong> for client e-commerce platform access.</li>
      <li>A transactional email provider for sending service and invoice emails.</li>
      <li>Google Workspace for internal email, documents, and calendars.</li>
    </ul>
    <p class="leading-relaxed">An up-to-date list is available on request.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Retention</h2>
    <p class="leading-relaxed">We keep personal data only for as long as necessary. Invoicing and accounting records are kept for 10 years as required by Portuguese tax law. Operational data is deleted within 30 days of contract termination or merchant disconnection. Security logs are kept for up to 13 months.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Your rights</h2>
    <div class="space-y-4 leading-relaxed">
      <p>Under GDPR you have the right to access, correct, delete, restrict, and export your personal data, and to object to processing based on legitimate interest. You can also complain to the Portuguese Data Protection Authority (<a href="https://www.cnpd.pt" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">CNPD</a>).</p>
      <p>To exercise any of these rights, email <a href="mailto:info@array42.com" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">info@array42.com</a>. We respond within 30 days.</p>
      <p>When we process data on behalf of a client as a processor, the client is the data controller. We will forward your request to them.</p>
    </div>

    <h2 class="text-xl font-medium mt-13 mb-3">Security</h2>
    <p class="leading-relaxed">We encrypt data in transit and at rest, enforce multi-factor authentication on all administrative accounts, keep secrets in dedicated secret storage (never in code), log access to personal data, and operate a documented Incident Response Plan. Incidents affecting Amazon Information are reported to <code class="font-mono text-sm bg-white border border-neutral-200 rounded px-1.5 py-0.5">security@amazon.com</code> within 24 hours of detection.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Cookies</h2>
    <p class="leading-relaxed">Our website uses only strictly necessary cookies. We do not deploy tracking or advertising cookies without explicit consent.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Changes</h2>
    <p class="leading-relaxed">We may update this policy to reflect changes in our practices or the law. The effective date at the top shows when the current version took effect.</p>

    <h2 class="text-xl font-medium mt-13 mb-3">Contact</h2>
    <p class="leading-relaxed">
      Questions about this policy: <a href="mailto:info@array42.com" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">info@array42.com</a>.<br>
      Security incidents: <a href="mailto:security@array42.com" class="text-[#9c3a19] underline underline-offset-4 hover:text-neutral-900">security@array42.com</a>.
    </p>

    <footer class="mt-20 pt-6 border-t border-neutral-200 flex justify-between text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
      <span>Array42 · Portugal</span>
      <span>v1.2 · 2026-04-23</span>
    </footer>
  </main>
</template>
