import { SvelteComponentTyped } from "svelte";
import type { ImagePreset, LightboxCustomization, GalleryArrowsConfig } from "../Types";
declare const __propDef: {
    props: {
        title?: string | undefined;
        description?: string | undefined;
        imagePreset?: ImagePreset | undefined;
        customization?: {} | LightboxCustomization | undefined;
        transitionDuration?: number | undefined;
        keepBodyScroll?: boolean | undefined;
        enableImageExpand?: boolean | undefined;
        enableEscapeToClose?: boolean | undefined;
        enableClickToClose?: boolean | undefined;
        showCloseButton?: boolean | undefined;
        isVisible?: boolean | undefined;
        activeImage?: number | undefined;
        arrowsConfig?: GalleryArrowsConfig | undefined;
        programmaticController?: {
            toggle: () => void;
            open: () => void;
            close: () => void;
            openImage: (imageId: number) => void;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        thumbnail: {};
        default: {};
    };
};
export type GalleryProps = typeof __propDef.props;
export type GalleryEvents = typeof __propDef.events;
export type GallerySlots = typeof __propDef.slots;
export default class Gallery extends SvelteComponentTyped<GalleryProps, GalleryEvents, GallerySlots> {
    get programmaticController(): {
        toggle: () => void;
        open: () => void;
        close: () => void;
        openImage: (imageId: number) => void;
    };
}
export {};
