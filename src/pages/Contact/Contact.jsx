import React from 'react';
import AnimatedMain from 'components/UI/AnimatedMain';
import { ReactComponent as GithubSVG } from 'assets/github.svg';
import { ReactComponent as MailboxSVG } from 'assets/mailbox.svg';
import { ReactComponent as TelegramSVG } from 'assets/telegram.svg';
import { ReactComponent as RedditSVG } from 'assets/reddit.svg';
import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <AnimatedMain>
            <h1 className="text-center text-4xl">
                Want to contact me? Found any bugs? Want to collaborate?
            </h1>
            <h3 className="text-center text-2xl font-bold">
                Reach me on these platforms
            </h3>
            <div className="flex flex-col items-center justify-center gap-10 py-4 sm:flex-row sm:gap-16 md:gap-20">
                <motion.a
                    href="https://github.com/ricci2511"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ translateY: -3.5 }}
                >
                    <GithubSVG width="5rem" height="5rem" />
                </motion.a>
                <motion.a
                    href="mailto:ricardo.christmann@protonmail.com"
                    whileHover={{ translateY: -3.5 }}
                >
                    <MailboxSVG width="5rem" height="5rem" />
                </motion.a>
                <motion.a
                    href="https://t.me/ricci2511"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ translateY: -3.5 }}
                >
                    <TelegramSVG width="5rem" height="5rem" />
                </motion.a>
                <motion.a
                    href="https://www.reddit.com/user/ricci2511"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ translateY: -3.5 }}
                >
                    <RedditSVG width="5rem" height="5rem" />
                </motion.a>
            </div>
        </AnimatedMain>
    );
};

export default Contact;
