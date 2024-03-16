import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTo = () => {
    // TODO: Implement gsap
    useGSAP(() => {
        //* from current state to new state
        gsap.to("#blue-box", {
            x: 250,
            repeat: -1, // -1 means infinite
            yoyo: true, // yoyo makes the animation go back and forth
            rotation: 360, // rotate the element 360 degrees
            duration: 0.8, // it takes 0.8 seconds to complete the animation
        })
    }, [])

    return (
        <main>
            <h1>Gsap To</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.to</code> method is used to animate elements from their current state to a new
                state
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.to()</code> method is similar to the{""}
                <code>gsap.from()</code> method, but the difference is that the {""}
                <code>gsap.to()</code> method animates elements from their <strong>current state</strong> to a{" "}
                <strong>new state</strong>, while the <code>gsap.from()</code> method animates elements from a{" "}
                <strong>new state</strong> to their <strong>current state</strong>.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a
                    href="https://greensock.com/docs/v3/GSAP/gsap.to()"
                    target="_blank"
                    rel="noreferrer noopener nofollow">
                    gsap.to()
                </a>{" "}
                method.
            </p>

            <div className="mt-20">
                <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
            </div>
        </main>
    )
}

export default GsapTo
