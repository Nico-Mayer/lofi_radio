// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	type Radio = {
		name: string
		description: string
		channels: Channel[]
	}
	type Channel = {
		name: string
		url: string
		description: string
		socials: Social[]
	}
	type Social = {
		name: string
		url: string
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
