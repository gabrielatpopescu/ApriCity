<script lang="ts">
  import { cn } from '$lib/utils';
  import Label from '$lib/components/ui/SignupForm/Label.svelte';
  import Input from '$lib/components/ui/SignupForm/Input.svelte';
  import signupbg from '$lib/assets/signupbg.png';
  import { auth } from '$lib/firebase.client';
  import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { goto } from '$app/navigation';

  let firstname = '';
  let lastname = '';
  let email = '';
  let password = '';
  let rewritepassword = '';
  let errorMessage: string | null = null;
  let successMessage: string | null = null;

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    errorMessage = null;
    successMessage = null;

    if (password !== rewritepassword) {
      errorMessage = "Passwords do not match.";
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: `${firstname} ${lastname}`
      });
      
      successMessage = "Account created successfully!";
      goto('/home');
    } catch (error: any) {
      errorMessage = error.message;
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      goto('/home');
    } catch (error: any) {
      errorMessage = error.message;
    }
  };
</script>


<div class="min-h-screen flex flex-col items-center justify-center
            bg-cover bg-center bg-no-repeat"
     style="background-image: url('{signupbg}');">
<div
	class="mx-auto w-full max-w-md rounded-none border border-gray-300 bg-white p-4 shadow dark:border-gray-800 dark:bg-black md:rounded-2xl md:p-8"
>
	<h2 class="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome to ApriCity!</h2>
	<p class="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
		Login to our platform and start your journey with us.
	</p>

	<form class="my-8" on:submit={handleSubmit}>
		<div class="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
			<div class={'flex w-full flex-col space-y-2'}>
				<Label htmlFor="firstname">First name</Label>
				<Input id="firstname" placeholder="Tyler" type="text" bind:value={firstname}/>
			</div>
			<div class={'flex w-full flex-col space-y-2'}>
				<Label htmlFor="lastname">Last name</Label>
				<Input id="lastname" placeholder="Durden" type="text" bind:value={lastname}/>
			</div>
		</div>
		<div class={'mb-4 flex w-full flex-col space-y-2'}>
			<Label htmlFor="email">Email Address</Label>
			<Input id="email" placeholder="projectmayhem@fc.com" type="email" bind:value={email}/>
		</div>
		<div class={cn('mb-4 flex w-full flex-col space-y-2')}>
			<Label htmlFor="password">Password</Label>
			<Input id="password" placeholder="••••••••" type="password" bind:value={password}/>
		</div>
		<div class={cn('mb-8 flex w-full flex-col space-y-2')}>
			<Label htmlFor="rewritepassword">Rewrite your password</Label>
			<Input id="rewritepassword" placeholder="••••••••" type="password" bind:value={rewritepassword}/>
		</div>

		<button
            type="submit"
            class="relative w-full h-10 overflow-hidden rounded-xl border border-orange-400 bg-orange-400 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50"
            >
            <span
                class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 hover:opacity-100"
            ></span>
            Sign up &rarr;
        </button>

		{#if errorMessage}
  <p class="mt-4 text-sm text-red-500">{errorMessage}</p>
{/if}

{#if successMessage}
  <p class="mt-4 text-sm text-green-600">{successMessage}</p>
{/if}


		<div
			class="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
		></div>

		<div class="flex flex-col space-y-4">
			<button
				type="button"
				class="group relative w-full h-10 overflow-hidden rounded-xl border border-orange-400 bg-white text-sm font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-orange-400/50"
				on:click={handleGoogleSignup}
			>
				<span
					class="absolute inset-0 -z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline mr-2 h-4 w-4 group-hover:text-white">
					<path
						d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
						fill="currentColor"
					/>
				</svg>
				<span class="group-hover:text-white">Login with Google</span>
			</button>
		</div>
	</form>
</div>
</div>