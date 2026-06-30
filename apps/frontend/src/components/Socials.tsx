import { motion } from 'motion/react';
import { SocialIcon } from 'react-social-icons'

export interface SocialMedia {
    url: string;
    network?: string | undefined
}
export const Social = ({className, socialMediaLink, transparent}: {className: string, transparent?: boolean, socialMediaLink: SocialMedia[]}) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {socialMediaLink.map((socialMedia, index) => (
                <motion.div
                className="div" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <SocialIcon key={index} url={socialMedia.url} bgColor={transparent ? "transparent" : undefined} network={socialMedia.network} >
                        <span className="sr-only"> Opens in new tab</span>
                    </SocialIcon>
                </motion.div>
            ))}
        </div>
    )
}