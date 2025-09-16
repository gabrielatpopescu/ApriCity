<script lang="ts">
  import { cn } from '$lib/utils';
  import { useMotionTemplate, useMotionValue, Motion } from 'svelte-motion';

  export let className: string | undefined = undefined;
  export let type: string = 'text';
  export let placeholder: string = '';
  export let id: string;

  let visible = false;

  // Motion values for mouse position
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
</script>

<Motion
  let:motion
  style={{
    background: visible
      ? useMotionTemplate`
          radial-gradient(
            100px circle at ${mouseX}px ${mouseY}px, 
            rgba(251, 191, 36, 0.8),  
            transparent 80%
          )
        `
      : 'transparent'
  }}
>
  <div
    use:motion
    role="presentation"
    on:mousemove={handleMouseMove}
    on:mouseenter={() => (visible = true)}
    on:mouseleave={() => (visible = false)}
    class="group/input rounded-lg p-[2px] transition duration-300"
  >
    <input
        {type}
        id={id}
        placeholder={placeholder}
        class={cn(
            `w-full rounded-md border border-neutral-300 bg-gray-50 px-3 py-2 text-sm text-black 
            placeholder:text-neutral-400 shadow-input transition 
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
            disabled:cursor-not-allowed disabled:opacity-50
            group-hover/input:shadow-none
            dark:border-neutral-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-neutral-500
            dark:focus:ring-orange-400 dark:focus:border-orange-400`,
            className
        )}
        {...$$restProps}
    />
  </div>
</Motion>
