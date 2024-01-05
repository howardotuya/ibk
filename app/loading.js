import React from "react";
import load from "@/public/loading.svg"
import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-screen w-full grid content-center justify-center text-center items-center">
            <div className="max-w-[32px] lg:max-w-[48px]">
                <Image src={load} alt="loading" />
            </div>
        </div>
    )
}