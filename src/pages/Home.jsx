import React from "react"
import { Link } from "react-router-dom"

const animations = [
    {
        title: "GSAP To",
        description:
            "The to() method is used to animate a single element from a starting state to an ending state.",
        path: "/gsapto",
    },
    {
        title: "GSAP From",
        description:
            "The from() method is used to animate a single element from an ending state to a starting state.",
        path: "/gsapfrom",
    },
    {
        title: "GSAP FromTo",
        description:
            "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
        path: "/gsapfromto",
    },
    {
        title: "GSAP Timeline",
        description: "The timeline() method is used to create a timeline to manage multiple animations.",
        path: "/gsaptimeline",
    },
    {
        title: "GSAP Stagger",
        description: "The stagger() method is used to animate multiple elements with a stagger effect.",
        path: "/gsapstagger",
    },
    {
        title: "GSAP ScrollTrigger",
        description: "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
        path: "/gsapscrolltrigger",
    },
    {
        title: "GSAP Text",
        description: "Learn how to animate text with GSAP.",
        path: "/gsaptext",
    },
]

const Home = () => {
    return (
        <main className="container">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-zinc-50">GSAP Animations</h1>
                <ol className="flex flex-col mt-10">
                    {animations.map((animation, index) => (
                        <li key={index}>
                            <Link
                                to={animation.path}
                                className="flex flex-row gap-2 p-5 rounded-lg hover:bg-zinc-800/50">
                                <p>
                                    <span className="text-sm font-bold text-zinc-50">{index + 1}.</span>
                                </p>

                                <div className="flex flex-col flex-1 gap-2">
                                    <p className="text-base font-semibold text-blue-500">{animation.title}</p>
                                    <p className="text-xs text-gray-400">{animation.description}</p>
                                </div>

                                <svg
                                    className="text-gray-600 -rotate-90 size-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                                    />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    )
}

export default Home
