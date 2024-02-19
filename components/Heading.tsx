"use client";
import TypewriterComponent from "typewriter-effect";

export default function Heading() {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white font-extrabold text-3xl flex justify-center items-center">
            <TypewriterComponent
            options={{
              strings: ['Lead Generation', 'Cross-Sell','Up-Sell','Early Warning System','We got it all covered!!'],
              autoStart: true,
              loop: true,
            }}
            />
        </div>
    )
}