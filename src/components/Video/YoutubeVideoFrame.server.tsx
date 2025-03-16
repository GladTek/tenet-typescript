import { jahiaComponent } from "@jahia/javascript-modules-library";
import { useTranslation } from 'react-i18next';
interface YoutubeVideoFrameProps {
    videoId: string;
}
jahiaComponent(
    {
        nodeType: 'tenetmix:hasYoutubeSoundtrack',
        name: 'hasYoutubeSoundtrack',
        componentType: 'view'
    }, ({ videoId }: YoutubeVideoFrameProps) => {
        const videoSrc = "https://youtube.com/embed/" + videoId + "?autoplay=0";
        const { t } = useTranslation();
        return (
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-4">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            {t('section.video.title')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <iframe className="video mx-auto lg:max-w-2xl"
                            title="Youtube player"
                            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                            src={videoSrc}
                        />
                    </div>
                </div>
            </div>
        );
    });