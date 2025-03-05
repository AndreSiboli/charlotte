import { StaticImageData } from "next/image"

export interface PhotosType{
    id: string
    author: {
        name: string
        href: string
    }
    src: StaticImageData
    alt: string
    tags: string[]
}