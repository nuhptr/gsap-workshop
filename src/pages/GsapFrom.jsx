import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFrom = () => {
    // TODO: Implement gsap
    useGSAP(() => {
        //* from new state to current state
        gsap.from("#green-box", {
            x: 250, // Move 250px to the right
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse the animation
            rotation: 360, // Rotate 360 degrees
            duration: 2, // 2 seconds
            ease: "power1.inOut", // Easing function
        })
    })

    return (
        <main>
            <h1>GsapFrom</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is used to animate elements from a new state to their
                current state.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is similar to the <code>gsap.to()</code> method, but the
                difference is that the <code>gsap.from()</code> method animates elements from a new state to
                their current state, while the <code>gsap.to()</code> method animates elements from their
                current state to a new state.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a
                    href="https://greensock.com/docs/v3/GSAP/gsap.from()"
                    target="_blank"
                    rel="noreferrer noopener nofollow">
                    gsap.from()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
            </div>
        </main>
    )
}

export default GsapFrom
