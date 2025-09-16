<script lang="ts">
  import LoginForm from "./login-form.svelte";
  import loginbg from "$lib/assets/login-background2.jpg";
  import icon from '$lib/assets/icon.png';

  const rollingTexts = ["Welcome to ApriCity.", "Explore. Understand. Improve.", "Insights that shape a better city."];
</script>

<style>
  .rolling-text-container {
    height: 4rem;
    overflow: hidden;
    position: relative;
  }

  .rolling-text {
    position: absolute;
    width: 100%;
    animation: rollUpDown 15s infinite;
    opacity: 0;
    transform: translateY(100%);
  }

  @keyframes rollUpDown {
    0%, 5% {
      transform: translateY(100%);
      opacity: 0;
    }
    10%, 30% {
      transform: translateY(0);
      opacity: 1;
    }
    35%, 40% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
</style>

<main class="min-h-svh bg-white">
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <div class="flex justify-center gap-2 md:justify-start">
        <a href="/home" class="flex items-center gap-2 font-medium">
          <div
            class="text-primary-foreground flex size-6 items-center justify-center rounded-md"
          >
            <img
                src={icon}
                alt="icon"
            />
          </div>
          ApriCity
        </a>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm class="" />
        </div>
      </div>
    </div>
    <div class="bg-muted relative hidden lg:block">
      <img
        src={loginbg}
        alt="login-background"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="rolling-text-container w-full">
          {#each rollingTexts as text, i}
            <p 
              class="rolling-text text-white text-4xl font-bold text-center"
              style="animation-delay: {i * 5}s;"
            >
              {text}
            </p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>