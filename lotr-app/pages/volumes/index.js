import React from "react";
import Link from "next/link";
import { introduction, volumes } from "@/resources/lib/data";

export default function index() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
        {/* <li>
          {""}
          <Link href="the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          {""}
          <Link href="the-two-towers">The Two Towers</Link>
        </li>
        <li>
          {""}
          <Link href="the-return-of-the-king">The Return of the King</Link>
        </li> */}
      </ul>
    </div>
  );
}
