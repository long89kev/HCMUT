import type { MapPageData } from "./MapPageData";

export function load(): MapPageData {
    return {
        title: "Maps",
        description: "Traverse through the extensive facilities of HCMUT with ease.",
        buildings: [
            {
                id: "bai-xe",
                label: "Parking lot"
            },
            {
                id: "nha-xe-00",
                label: "Indoor parking lot 1"
            },
            {
                id: "nha-xe-01",
                label: "Indoor parking lot 2",
                labelOffsetX: -8
            },
            {
                id: "nha-xe-02",
                label: "Indoor parking lot 3"
            },
            {
                id: "can-tin",
                label: "Cafeteria"
            },
            {
                id: "chung-cu",
                label: "Dormitory",
                labelOffsetY: -10
            },
            {
                id: "san-bong-chuyen",
                label: "Volleyball court"
            },
            {
                id: "san-bong-da",
                label: "Soccer field"
            },
            {
                id: "oisp-kiosk",
                label: "OISP kiosk"
            },
            {
                id: "y-te",
                label: "Health"
            },
            {
                id: "a1",
                label: "A1"
            },
            {
                id: "a2",
                label: "A2"
            },
            {
                id: "a3",
                label: "A3"
            },
            {
                id: "a4",
                label: "A4"
            },
            {
                id: "a5",
                label: "A5"
            },
            {
                id: "b1",
                label: "B1",
                labelOffsetX: 6,
                labelOffsetY: -24
            },
            {
                id: "b2",
                label: "B2",
                labelOffsetY: 2
            },
            {
                id: "b4",
                label: "B4"
            },
            {
                id: "b5",
                label: "B5"
            },
            {
                id: "b6",
                label: "B6",
                labelOffsetY: -8
            },
            {
                id: "b7",
                label: "B7"
            },
            {
                id: "b8",
                label: "B8",
                labelOffsetX: 4,
                labelOffsetY: -2
            },
            {
                id: "b9",
                label: "B9"
            },
            {
                id: "b10",
                label: "B10",
                labelOffsetY: 4
            },
            {
                id: "b11",
                label: "B11"
            },
            {
                id: "c1",
                label: "C1"
            },
            {
                id: "c2",
                label: "C2"
            },
            {
                id: "c3",
                label: "C3"
            },
            {
                id: "c4",
                label: "C4"
            },
            {
                id: "c5",
                label: "C5"
            },
            {
                id: "c6",
                label: "C6",
                labelOffsetY: 4
            }
        ]
    };
}