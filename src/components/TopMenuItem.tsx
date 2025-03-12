import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    pageRef: string;
}

const TopMenuItem = ({ title, pageRef }: Props) => {
    return (
        <Link href={pageRef} className="text-amber-800 font-semibold hover:text-white hover:bg-orange-400 hover:shadow-md py-2 px-4 rounded-md font-jetbrains transition-all">
            {title}
        </Link>
    );
};

export default TopMenuItem;
