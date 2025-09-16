<script lang="ts">
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import type { HTMLFormAttributes } from "svelte/elements";
  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  } = $props();
  const id = $props.id();
</script>
<form class={cn("flex flex-col gap-6", className)} bind:this={ref} {...restProps}>
  <div class="flex flex-col items-center gap-2 text-center">
    <h1 class="text-2xl font-bold">Login to your account</h1>
    <p class="text-muted-foreground text-balance text-sm">
      Enter your email below to login to your account
    </p>
  </div>
  <div class="grid gap-6">
    <div class="grid gap-3">
      <Label for="email-{id}" class="">Email</Label>
      <Input id="email-{id}" type="email" placeholder="m@example.com" required class="" />
    </div>
    <div class="grid gap-3">
      <div class="flex items-center">
        <Label for="password-{id}" class="">Password</Label>
        <a href="##" class="ml-auto text-sm underline-offset-4 hover:underline  hover:text-orange-400">
          Forgot your password?
        </a>
      </div>
      <Input id="password-{id}" type="password" required class="" />
    </div>
    <div class="grid gap-6">
      <Button
    type="submit"
    class="relative w-full h-10 overflow-hidden rounded-xl border border-orange-400 bg-orange-400 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50"
    disabled={false}
    >
    <span
      class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100"
    ></span>
    Login
      </Button>
    </div>
    <div
      class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
    >
      <span class="bg-background text-muted-foreground relative z-10 px-2">
        Or continue with
      </span>
    </div>
    <Button
    variant="outline"
    class="group relative w-full h-10 overflow-hidden rounded-xl border border-orange-400 bg-white text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50"
    disabled={false}
>
    <span
        class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    ></span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline mr-2 group-hover:text-white">
        <path
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            fill="currentColor"
        />
    </svg>
    <span class="group-hover:text-white">Login with Google</span>
</Button>
  </div>
  <div class="text-center text-sm">
    Don&apos;t have an account?
    <a href="sign-up" class="underline underline-offset-4 hover:text-orange-400"> Sign up </a>
  </div>
</form>