<script lang="ts">
	import { cn } from '$lib/\/utils';
	import { Motion, type MotionValue } from 'svelte-motion';

	export let pathLengths: MotionValue[];
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let className: string | undefined = undefined;

	const transition = {
		duration: 0,
		ease: 'linear'
	};
</script>

<div class={cn('sticky top-20', className)}>
    <p
        class="bg-gradient-to-b from-neutral-100 to-neutral-300 bg-clip-text pb-4 text-center text-lg font-normal text-transparent md:text-7xl"
    >
        {title || `Build with Aceternity UI Svelte`}
    </p>
    <p class="mx-auto mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl">
        {description ||
            `Scroll this component and see the bottom SVG come to life wow this
            works!`}
    </p>
    <div
        class="bg-red-transparent absolute -top-60 flex h-[890px] w-full items-center justify-center md:-top-40"
    >
        <button
            class="z-30 mx-auto mt-8 w-fit rounded-full bg-white px-2 py-1 text-xs font-bold text-black md:mt-24 md:px-4 md:py-2 md:text-base"
        >
            aceternity.sveltekit.io
        </button>
    </div>
    <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        class=" absolute -top-60 w-full md:-top-40"
    >
        <Motion
            let:motion
            isSVG={true}
            initial={{
                pathLength: 0
            }}
            style={{
                pathLength: pathLengths[0]
            }}
            {transition}
        >
            <path
                d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
                stroke="#FFB7C5"
                stroke-width="2"
                fill="none"
            />
        </Motion>
        </svg>
</div>