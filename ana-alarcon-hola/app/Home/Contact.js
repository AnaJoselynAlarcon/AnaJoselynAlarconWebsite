import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="ml-8 p-2">
        <p>LinkedIn Profile</p>
        <p>
          <Link
            href="https://www.linkedin.com/in/ana-alarcon"
            className="underline text-sky-400"
            target="_blank">
            Let's connect!
          </Link>
        </p>
      </div>
    </div>
  );
}
