<script lang="ts">
	import TypewriterEffectSmooth from '$lib/components/ui/TypewriterEffect/TypewriterEffectSmooth.svelte';
    import startbg from '$lib/assets/startbg5.png'
	const words = [
		{
			text: 'Monitor',
			className: 'text-white text-5xl font-bold'
		},
		{
			text: 'your',
			className: 'text-white text-5xl font-bold'
		},
		{
			text: 'city',
			className: 'text-white text-5xl font-bold'
		},
		{
			text: 'with',
			className: 'text-white text-5xl font-bold'
		},
		{
			text: 'ApriCity.',
			className: 'text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400'
		}
	];
</script>

<div class="min-h-screen flex flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat"
     style="background-image: url('{startbg}');">
	<p class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white">
		Discover the story behind the numbers.
	</p>
    <div class="min-h-[120px]">
        <TypewriterEffectSmooth {words} className="text-center"/>
    </div>
	<div class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <a href="/login">
		<button class="relative h-10 w-40 overflow-hidden rounded-xl border border-orange-400 bg-white text-sm font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50">
            <span class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100">
            </span>
                Log in
        </button>
        </a>
        <a href="/sign-up">
		<button class="relative h-10 w-40 overflow-hidden rounded-xl border border-orange-400 bg-white text-sm font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50">
            <span class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100">
            </span>
                Sign up
        </button>
        </a>
	</div>
</div>