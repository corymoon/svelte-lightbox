import type { SvelteComponentTyped } from 'svelte';


type ImagePreset = '' | 'fullscreen' | 'scroll'
type GalleryArrowCharacter = '' | 'hide' | 'loop'


interface LightboxCustomization {
    closeButtonProps?: Record<string, any>;
    lightboxFooterProps?: {
        component?: new (...args: any[]) => SvelteComponentTyped<any>;
        [key: string]: any;
    },
    lightboxHeaderProps?: Record<string, any>;
    coverProps?: Record<string, any>;
    lightboxProps?: Record<string, any>;
    thumbnailProps?: Record<string, any>;
}
interface GalleryImage {
    id: number,
    title: string,
    description: string,
    customization?: Partial<LightboxCustomization>

}
interface GalleryState {
    imageCount: number,
    activeImage: number
}

interface GalleryArrowsConfig {
    color: string,
    character: GalleryArrowCharacter,
    enableKeyboardControl: boolean
}

interface I18n {
    generateLocalizedGalleryCounter: (activeImage: number, imageCount: number) => string
}


export type {
    ImagePreset,
    GalleryArrowCharacter,
    LightboxCustomization,
    GalleryImage,
    GalleryState,
    GalleryArrowsConfig,
    I18n
}
