<script lang="ts">import { getContext } from 'svelte';
export let id;
const openImage = getContext('openImage');
if (!id) {
    const thumbnailCounterFunction = getContext('thumbnailCounter');
    id = thumbnailCounterFunction();
}
</script>

<div class:svelte-lightbox-thumbnail={true} aria-label="thumbnail" on:click={() => openImage(id)} {...$$restProps} role="button" tabindex="0">
    <slot/>
</div>

<style>
    div {
        position: static;
        cursor: zoom-in;
    }
    :global(.svelte-lightbox-thumbnail > *) {
        max-width: 100%;
        height: auto;
    }
</style>
