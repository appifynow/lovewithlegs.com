import { SocialIcon } from 'react-social-icons'

export interface SocialMedia {
    url: string;
    network?: string | undefined
}
export const Social = ({className, socialMediaLink, transparent}: {className: string, transparent?: boolean, socialMediaLink: SocialMedia[]}) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {socialMediaLink.map((socialMedia, index) => (
                <SocialIcon key={index} url={socialMedia.url} bgColor={transparent ? "transparent" : undefined} network={socialMedia.network} />
            ))}
        </div>
    )
}