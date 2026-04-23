<script setup lang="ts">
import logo from '~/assets/images/logo.svg'

useHead({
  title: 'Array42 - Web Development',
  meta: [
    { name: 'description', content: 'Array42 - Web Development' },
    { name: 'robots', content: 'index, follow' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Array42',
            legalname: 'Array42 - Programação de Software, Unipessoal Lda',
            description: 'Web Development',
            foundingDate: '15-01-2021',
            url: 'https://www.array42.com',
            image: 'https://www.array42.com/logo.svg',
            logo: 'https://www.array42.com/logo.svg',
            sameAs: [
              'https://www.linkedin.com/company/array42',
              'https://github.com/array42',
              'https://facebook.com/array42',
              'https://facebook.com/array42com',
              'https://instagram.com/array42com',
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-[#498CE9] flex flex-col">
    <main class="flex-1 flex items-center justify-center px-6">
      <h1 class="w-full max-w-3xl">
        <img
          :src="logo"
          alt="Array42 - Web Development"
          class="w-full h-auto brightness-0 invert"
        >
      </h1>
    </main>
    <footer class="p-5 text-right flex justify-end gap-6">
      <NuxtLink
        to="/privacy"
        class="text-white text-lg no-underline hover:underline"
      >
        Privacy policy
      </NuxtLink>
      <a
        href="mailto:info@array42.com"
        class="text-white text-lg no-underline hover:underline"
      >
        Contact us
      </a>
    </footer>
  </div>
</template>
