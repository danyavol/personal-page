import { Project } from "@/constants/projects-list";
import styles from "./project-card.module.scss";
import LinkIcon from "../../../public/images/icons/link.svg";
import ImageGallery from 'react-image-gallery';
import { useRef, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { createPortal } from 'react-dom';
import { MouseEventHandler } from "react";

export default function ProjectCard(params: { project: Project, top?: boolean }) {
    const imageGalleryRef = useRef<ReactImageGallery>(null);
    const imageGalleryWrapperRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullscreen] = useState(false);

    const { title, description, tags, images, previewImg, links } = params.project;

    const mappedImages = images.map(img => {
        if (typeof img === "string") {
            return { original: img };
        }
        return img;
    });

    function enterFullScreen() {
        imageGalleryRef.current?.fullScreen();
        // imageGalleryRef.current.
    }

    function fullScreenChangeHandler(isFullScreen: boolean) {
        setIsFullscreen(isFullScreen);
        if (!isFullScreen) {
            // After exit full screen mode go to first image
            // so next time user open gallery he is on the first image
            imageGalleryRef.current?.slideToIndex(0);
            document.documentElement.classList.remove('image-gallery-open');
            imageGalleryWrapperRef.current?.querySelectorAll("video").forEach(video => video.pause());
        } else {
            document.documentElement.classList.add('image-gallery-open');
        }
    }

    const imageGalleryClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        if ((e.target as HTMLElement).classList.contains("image-gallery-slide")) {
            imageGalleryRef.current?.exitFullScreen();
        }
    }

    return (
        <>
            <div className={`${styles.card} ${params.top ? styles.top : ""}`} tabIndex={0}>
                <div className={styles.cardPreview}>
                    <img src={previewImg} onClick={enterFullScreen} />
                </div>
                <div className={styles.cardDescription}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.links}>
                        { links?.map((link, index) => (
                              <a className={styles.link} href={link.url} target="_blank" key={index}>
                                <LinkIcon />
                                {link.label}
                            </a>
                        )) }
                    </div>
                    
                    <div className={styles.tags}>
                        {tags.map((tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}
                    </div>
                </div>
            </div>
            {createPortal(
                (<div className={isFullScreen ? "fullScreen" : ""} onClick={imageGalleryClickHandler} ref={imageGalleryWrapperRef}>
                    <ImageGallery 
                        items={mappedImages} 
                        ref={imageGalleryRef} 
                        onScreenChange={fullScreenChangeHandler} 
                        showPlayButton={false}
                        useBrowserFullscreen={false}
                        showBullets={true}
                        showThumbnails={false}
                    ></ImageGallery>
                </div>),
                document.querySelector('#overlay')!
            )}
        </>
    );
}