<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { onMount } from 'svelte';
  import AnimatedTooltip from '$lib/components/ui/AnimatedTooltip/AnimatedTooltip.svelte';
  import ioan from '$lib/assets/ioan.jpg';
  import gabriela from '$lib/assets/gabriela1.jpg';
  import videobg from '$lib/assets/video-bg2.mp4';

  const technologies = [
    {
      name: "Svelte",
      description: "Reactive framework for building fast web apps",
      icon: `<svg viewBox="0 0 98.1 118" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
        <path d="m91.8 15.6c-10.9-15.7-32.6-20.3-48.2-10.4l-27.5 17.6c-7.5 4.7-12.7 12.4-14.2 21.1-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5" fill="#ff3e00"/>
        <path d="m40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7l27.4-17.5c1.4-.9 2.3-2.2 2.6-3.8s-.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-27.4 17.5c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5" fill="#fff"/>
      </svg>`
    },
    {
      name: "Rust",
      description: "Memory-safe systems programming language",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5zm0 1.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z" fill="#000"/>
        <path d="M12 5a7 7 0 110 14A7 7 0 0112 5zm-3.5 4.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#E86E24"/>
        <path d="M12 9a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#000"/>
        <circle cx="12" cy="12" r="1.5" fill="#E86E24"/>
        <path d="M12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#fff"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 12.5a.5.5 0 100-1 .5.5 0 000 1z" fill="#E86E24"/>
      </svg>`
    },
    {
      name: "Docker",
      description: "Containerization for seamless deployment",
      icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
        <path d="M13.983 11.078h2.119a.186.186 0 00.168-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#0db7ed"/>
      </svg>`
    },
    {
      name: "PostgreSQL",
      description: "Advanced relational database system",
      icon: "🗄️"
    },
    {
      name: "AWS Cloud",
      description: "Scalable cloud infrastructure",
      icon: "☁️"
    },
    {
      name: "GraphQL",
      description: "Efficient API query language",
      icon: "🔗"
    }
  ];

  const sources = [
    {
      title: "Air Quality Data",
      value: "Calitateaer.ro",
      description: "Air Quality Data from Romanian Government"
    },
    {
      title: "Data from ESA",
      value: "Landsat 1",
      description: "Images and data from the European Space Agency"
    },
    {
      title: "Data from ESA",
      value: "Copernicus Sentinel 5",
      description: "Increased atmospheric data coverage"
    },
    {
      title: "Data from ESA",
      value: "Copernicus Sentinel 6",
      description: "Increased atmospheric data coverage"
    },
  ];

  const people = [
    {
      id: 1,
      name: 'Ioan Croitor',
      faculty: 'FILS',
      image: ioan
    },
    {
      id: 2,
      name: 'Gabriela-Teodora Popescu',
      faculty: 'ACS',
      image: gabriela
    }
  ];

  let mounted = false;
  let scrollY = 0;
  let videoTime = 0;
  let videoDuration = 0;
  let gradientOpacity = 0; // New variable to control gradient opacity

  onMount(() => {
    mounted = true;
  });

  $: {
    if (videoDuration > 0) {
      const totalScrollableHeight = document.body.scrollHeight + 2000 - window.innerHeight;
      videoTime = (scrollY / totalScrollableHeight) * videoDuration;
    }

    // New reactive statement: calculate opacity based on scroll position
    const maxScroll = 1000; // Adjust this value to control how fast the gradient darkens
    gradientOpacity = Math.min(1, scrollY / maxScroll);
  }

  const videoUrl = videobg;
</script>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .delay-1 { animation-delay: 0.2s; }
  .delay-2 { animation-delay: 0.4s; }
  .delay-3 { animation-delay: 0.6s; }

  .minimal-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Video background styles */
  .video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -10;
  }

  .video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Gradient overlay styles */
  .gradient-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    transition: opacity 0.5s ease-out; /* Optional: adds a smooth transition */
  }
</style>

<svelte:window bind:scrollY />

<div class="video-background">
  <video bind:currentTime={videoTime} bind:duration={videoDuration} muted playsinline preload="metadata">
    <source src={videoUrl} type="video/mp4">
  </video>
</div>

<div class="gradient-overlay" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%); opacity: {gradientOpacity};"></div>

<div class="relative z-10 min-h-[500vh]">
  <div class="fixed top-6 left-6 z-50">
    <a href="/home" class="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 text-gray-700 hover:text-orange-400 hover:bg-white/90 transition-all duration-300 group">
      <span class="text-lg group-hover:scale-110 transition-transform duration-300">←</span>
      <span class="font-medium text-sm">Home</span>
    </a>
  </div>

  <section class="relative px-6 py-20">
    <div class="max-w-6xl mx-auto text-center">
      <div class="{mounted ? 'fade-in' : 'opacity-0'}">
        <h1 class="inline-block text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white leading-[1.5] mb-6">
          About ApriCity
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8 rounded-full"></div>
        <p class="text-xl md:text-xl text-white max-w-3xl mx-auto leading- text-justify">
          Our project leverages advanced satellite imagery and urban sensing technologies to deliver a comprehensive view of city environments. By integrating flooding risk models, heat island detection, noise distribution metrics, and real-time air quality monitoring, the platform transforms complex geospatial data into actionable intelligence. Municipal leaders, infrastructure operators, and enterprise stakeholders can use these insights to anticipate risks, optimize resource allocation, and design evidence-based strategies that enhance resilience, sustainability, and citizen well-being.
        </p>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="minimal-card rounded-2xl p-8 md:p-12 {mounted ? 'slide-up delay-1' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Our Mission
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to empower cities with data-driven intelligence that improves quality of life for all residents. We are committed to building resilient, efficient, and citizen-centered cities that adapt to today’s challenges and prepare for tomorrow’s opportunities.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          By combining satellite imagery, IoT sensing, and advanced analytics, we deliver actionable insights that help urban leaders anticipate risks, optimize infrastructure, and drive sustainable growth.
        </p>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-2' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Technologies We Use
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          Powered by modern, reliable tech stack
        </p>

        <Carousel.Root class="w-full">
          <Carousel.Content class="flex gap-6">
            {#each technologies as tech}
              <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-4">
                  <Card.Root class="minimal-card rounded-xl border-0 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-white/70">
                    <Card.Content class="p-6 text-center">
                      <div class="mb-4 group-hover:scale-110 transition-transform duration-300 grid place-items-center h-12">
                        {@html tech.icon}
                      </div>

                      <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {tech.name}
                      </h3>
                      <p class="text-gray-600 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </Card.Content>
                  </Card.Root>
                </div>
              </Carousel.Item>
            {/each}
          </Carousel.Content>

          <div class="flex justify-center gap-3 mt-8">
            <Carousel.Previous class="w-12 h-12 rounded-full bg-white/80 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              ←
            </Carousel.Previous>
            <Carousel.Next class="w-12 h-12 rounded-full bg-white/80 shadow-md border border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-200 transition-all duration-300 flex items-center justify-center text-xl">
              →
            </Carousel.Next>
          </div>
        </Carousel.Root>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-3' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Data collected from:
        </h2>
        <p class="text-white text-center mb-12 text-lg">
          The sources that power our insights
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each sources as source}
            <div class="minimal-card rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 group">
              <div class="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent whitespace-normal break-words">
                {source.value}
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {source.title}
              </h3>
              <p class="text-sm text-gray-600">
                {source.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="max-w-6xl mx-auto">
      <div class="{mounted ? 'slide-up delay-3' : 'opacity-0'}">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Meet the Team
        </h2>
        <div class="flex justify-center w-full mt-30">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <div class="minimal-card rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Ready to Transform Your City?
        </h2>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          Visualize the impact of data-driven decisions with ApriCity.
        </p>
        <a href="/login">
          <button class="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold rounded-full hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </a>
      </div>
    </div>
  </section>

  <section class="px-6 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <div class="minimal-card rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl md:text-4xl font-bold text-red-400 mb-6">
          Our Business Plan
        </h2>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          ApriCity is designed to be a sustainable and scalable solution for urban intelligence. Our business model focuses on subscription-based access for municipal governments, infrastructure operators, and enterprises. By offering tiered pricing based on data volume and feature access, we ensure affordability for cities of all sizes. Additionally, we plan to explore partnerships with environmental agencies and smart city initiatives to expand our reach and impact.
        </p>
        
      </div>
    </div>
  </section>
</div>