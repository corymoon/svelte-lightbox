<script lang="ts">import { fade } from 'svelte/transition';
export let transitionDuration;
</script>

<div class="svelte-lightbox-overlay" aria-label="overlay" on:click in:fade={{ duration: transitionDuration * 2 }} out:fade={{ duration: transitionDuration / 2 }} {...$$restProps}>
    <slot />
</div>

<style>
    div.svelte-lightbox-overlay {
        position: fixed;
        z-index: 1000000!important;
        background-color: rgba(43, 39, 45, 0.87);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.svelte-lightbox-overlay::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        opacity: 0;
        z-index: -1;
    }
    div.svelte-lightbox-overlay::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
