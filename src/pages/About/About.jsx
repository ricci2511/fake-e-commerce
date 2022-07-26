import React from 'react';
import AnimatedMain from 'components/UI/AnimatedMain';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiFirebase } from 'react-icons/si';

const About = () => {
    return (
        <AnimatedMain>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                About us or About{' '}
                <strong className="border-b-4 border-b-purple">me?</strong>
            </h1>
            <section className="block max-w-[75ch] space-y-2 lg:text-lg">
                <p>
                    This website is built by me, Ricardo Christmann, online also
                    known as{' '}
                    <a
                        href="https://github.com/ricci2511"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="font-bold">@ricci2511</i>.
                    </a>
                </p>
                <p>
                    Sadly you cannot purchase any of the cool items shown in
                    this page. It's just fake data provided by{' '}
                    <a
                        href="https://fakestoreapi.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold"
                    >
                        Fake Store API
                    </a>
                    .
                </p>
                <p>
                    Even though I got here after learning and reading through
                    great docs/articles/videos by awesome content creators, the
                    only one responsible for my success in this industry is{' '}
                    <strong>me</strong>.
                </p>
                <div>
                    <p>
                        I built this project to show off some of the skills I
                        learned recently and to pick up new ones like Tailwind,
                        React Router, Framer Motion and Firebase. Built with:
                    </p>
                    <ul className="mt-6 space-y-4 px-8">
                        <li>
                            <div className="flex items-center gap-2">
                                <FaReact color="#61DBFB" size={30} />
                                <span>
                                    <a
                                        href="https://reactjs.org/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        React
                                    </a>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <SiTailwindcss color="#15C2B8" size={30} />
                                <span>
                                    <a
                                        href="https://tailwindcss.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Tailwind CSS
                                    </a>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <SiFramer color="#B80889" size={30} />
                                <span>
                                    <a
                                        href="https://www.framer.com/motion/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Framer Motion
                                    </a>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <SiFirebase color="#FFA000" size={30} />
                                <span>
                                    <a
                                        href="https://firebase.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Firebase
                                    </a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </AnimatedMain>
    );
};

export default About;
