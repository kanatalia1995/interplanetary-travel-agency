export type StoryblokVersion = 'draft' | 'published';

/** From STORYBLOK_VERSION. Anything other than "draft" means published (the default). */
const configuredVersion: StoryblokVersion =
	import.meta.env.STORYBLOK_VERSION === 'draft' ? 'draft' : 'published';

/** The Visual Editor loads the app with a `_storyblok` query param and must see drafts. */
const inVisualEditor = () =>
	typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('_storyblok');

export const getStoryblokVersion = (): StoryblokVersion =>
	inVisualEditor() ? 'draft' : configuredVersion;
