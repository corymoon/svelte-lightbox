<script lang="ts">import { getContext, setContext } from "svelte";
export let title = "";
export let description = "";
export let customization = {};
const activeImageStore = getContext("activeImage");
const imageCounterFunction = getContext("imageCounter");
const imageId = imageCounterFunction({ title, description });
// ✅ Make this customization available to the footer through context
setContext("imageCustomization", customization);
</script>

{#if $activeImageStore === imageId}
    <slot {...$$restProps} />
{/if}
