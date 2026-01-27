// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings are optional

import React from "react";
import {JSX} from "react";

export type TimelineEntry = {
    title: string;
    description: string | JSX.Element;
    date: string;
    subHeading?: string;
}

export const timelineData: TimelineEntry[] = [
    {
        title: "Applications Open",
        description: (
            <>
                Our Spring 2026 applications open!{" "}
                <a
                    href="https://forms.gle/HLWCBhjSCjuWEuvQA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline visited:text-blue-600 hover:text-blue-700 bg-transparent"
                >
                    Apply here
                </a>{" "}
                to join Codify and kickstart your journey in tech.
            </>
        ),
        date: "1/20/26",
    },
    {
        title: "Tabling on Sproul Plaza",
        description: "Come meet us at our table on Sproul Plaza to learn more about Codify!",
        date: "1/20 - 1/30",
    },
    {
        title: "Clubs & Cookies",
        description: "Join us for Clubs & Cookies to get to know Codify members and ask any questions you have about the application process.",
        date: "1/26",
        subHeading: "8-10PM @ Dwinelle 155"
    },
    {
        title: "Infosession #1",
        description: "Learn more about Codify, our projects, and the application process at our first infosession of the semester!",
        date: "1/28",
        subHeading: "8-9PM @ VLSB 2030"
    },
    {
        title: "Infosession #2",
        description: "Missed the first one? Join us for our second infosession to learn more about Codify and the application process!",
        date: "1/29",
        subHeading: "8-9PM @ VLSB 2030"
    },
    {
        title: "Game Night Social",
        description: "Take a break from studying and hang out with Codify members at our Game Night Social!",
        date: "1/30",
        subHeading: "8-10PM @ Dwinelle 234"
    },
    {
        title: "Applications Due",
        description: "Submit your application to join Codify for Spring 2026! Don't miss out on this opportunity to be part of an amazing community.",
        date: "2/2",
        subHeading: "11:59PM"
    },
    {
        title: "Interviews",
        description: "Interviews will be held for selected applicants. Prepare to discuss your application and your goals for the semester.",
        date: "2/7 - 2/8",
        subHeading: "Haas or Virtual"
    },
    {
        title: "Applicant Social Mixer",
        description: "Meet other applicants and current members in a relaxed setting. This will also be a time to experience what a week would look like as a member!",
        date: "2/9",
        subHeading: "8-9PM @ TBD"
    },
    {
        title: "Decisions Released",
        description: "Decisions for Spring 2026 applications will be sent out. We look forward to welcoming new members to Codify!",
        date: "2/11",
    },
    {
        title: "New Member Welcome Social",
        description: "Celebrate the start of the semester and welcome new members to Codify!",
        date: "TBD!",
    },
];
