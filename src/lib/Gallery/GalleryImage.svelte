<script lang="ts">
    import { getContext, setContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { GalleryImage, LightboxCustomization } from "$lib/Types";

    export let title: string = "";
    export let description: string = "";
    export let customization: Partial<LightboxCustomization> = {};

    const activeImageStore: Writable<number> = getContext("activeImage");
    const imageCounterFunction: (img: Omit<GalleryImage, "id">) => number =
        getContext("imageCounter");

    const imageId = imageCounterFunction({ title, description });

    // ✅ Make this customization available to the footer through context
    setContext("imageCustomization", customization);
</script>

{#if $activeImageStore === imageId}
    <slot {...$$restProps} />
{/if}
