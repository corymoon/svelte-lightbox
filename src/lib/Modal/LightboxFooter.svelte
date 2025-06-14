<script lang="ts">
    import i18n from "$lib/i18n";
    import type { GalleryState, ImagePreset, I18n } from "$lib/Types";

    export let imagePreset: ImagePreset;
    export let title = "";
    export let description = "";
    export let gallery: GalleryState | null = null;
    export let component: typeof import("svelte").SvelteComponent | null = null;

    const generateLocalizedGalleryCounter = (
        i18n: I18n,
        gallery: GalleryState | null,
    ) => {
        if (gallery !== null) {
            return i18n.generateLocalizedGalleryCounter(
                gallery.activeImage,
                gallery.imageCount,
            );
        }
    };

    $: localizedGalleryCounter = generateLocalizedGalleryCounter(
        $i18n,
        gallery,
    );
</script>

{#if component}
    <svelte:component
        this={component}
        {title}
        {description}
        {gallery}
        {imagePreset}
        {localizedGalleryCounter}
        {...$$restProps}
    />
{:else}
    <div
        class="svelte-lightbox-footer"
        class:fullscreen={imagePreset === "fullscreen"}
        {...$$restProps}
    >
        <h2>
            {title}
        </h2>
        <h5>
            {description}
        </h5>
        {#if gallery !== null}
            <p>
                {localizedGalleryCounter}
            </p>
        {/if}
    </div>

    <style>
        div.svelte-lightbox-footer {
            width: 100%;
            height: auto;
            color: white;
            text-align: left;
            position: absolute;
        }
        div.svelte-lightbox-footer.fullscreen {
            position: fixed;
            z-index: 5;
            bottom: 0;
            left: 0;
            right: 0;
            padding-left: 1rem;
        }
    </style>
{/if}
