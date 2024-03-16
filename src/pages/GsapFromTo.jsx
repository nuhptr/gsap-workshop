import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

const GsapFromTo = () => {
    useGSAP(() => {
        // TODO: Implement gsap
        //* from new state to current state
        gsap.fromTo(
            "#red-box",
            {
                x: 0, // Move 0px to the right
                rotation: 0, // Rotate 0 degrees
                borderRadius: "0%", // 0% rounded corners
            },
            {
                x: 250, // Move 250px to the right
                repeat: -1, // Infinite loop
                yoyo: true, // Reverse the animation
                borderRadius: 360,
                rotation: 360, // Rotate 360 degrees
                duration: 2, // 2 seconds
                ease: "bounce.out", // Easing function
            }
        )
    })

    return (
        <main>
            <h1>GsapFromTo</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.fromTo()</code> method is used to animate elements from a new state to a new
                state.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.fromTo()</code> method is similar to the <code>gsap.from()</code> and{" "}
                <code>gsap.to()</code> methods, but the difference is that the <code>gsap.fromTo()</code>{" "}
                method animates elements from a new state to a new state, while the <code>gsap.from()</code>{" "}
                method animates elements from a new state to their current state, and the{" "}
                <code>gsap.to()</code> method animates elements from their current state to a new state.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a
                    href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
                    target="_blank"
                    rel="noreferrer noopener nofollow">
                    gsap.fromTo()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
            </div>
        </main>
    )
}

export default GsapFromTo
