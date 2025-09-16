<script lang="ts">
  import { cn } from '$lib/utils';
  import { Motion } from 'svelte-motion';

  export let words: {
    text: string;
    className?: string;
  }[];
  export let className: string | undefined = undefined;
  export let cursorClassName: string | undefined = undefined;

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split('')
  }));
</script>

<div class={cn('my-4 flex space-x-0.5 overflow-visible', className)}>
  <div class="flex overflow-visible">
    {#each wordsArray as word, wIdx (`word-${wIdx}`)}
      <div class="inline-block mr-1">
        {#each word.text as char, cIdx (`char-${wIdx}-${cIdx}`)}
          <Motion
            let:motion
            initial={{ y: 40, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.455, 0.03, 0.515, 0.955],
              delay: wIdx * 0.3 + cIdx * 0.03
            }}
          >
            <span
              use:motion
              class={cn('text-black dark:text-white', word.className)}
            >
              {char}
            </span>
          </Motion>
        {/each}
        &nbsp;
      </div>
    {/each}
  </div>

  <!-- Blinking cursor -->
  <Motion
    let:motion
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.7,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }}
  >
    <span
      use:motion
      class={cn(
        'block h-4 w-[4px] rounded-sm bg-orange-400 sm:h-6 xl:h-12',
        cursorClassName
      )}
    ></span>
  </Motion>
</div>
