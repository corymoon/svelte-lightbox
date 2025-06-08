import { SvelteComponentTyped } from "svelte";
import type { LightboxCustomization } from "../Types";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        description?: string | undefined;
        customization?: Partial<LightboxCustomization> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            [x: string]: any;
        };
    };
};
export type GalleryImageProps = typeof __propDef.props;
export type GalleryImageEvents = typeof __propDef.events;
export type GalleryImageSlots = typeof __propDef.slots;
export default class GalleryImage extends SvelteComponentTyped<GalleryImageProps, GalleryImageEvents, GalleryImageSlots> {
}
export {};
