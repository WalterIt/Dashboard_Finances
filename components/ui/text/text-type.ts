import React from "react";

export type Headings = | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type variant = 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | 'inherit';

export type Alignment = 'left' | 'center' | 'right' | 'justify' | 'inherit';

export default interface TextType {
    size?: number;
    color?: string;
    variant?: variant;
    heading?: Headings;
    align?: Alignment;
    children: string | number | React.ReactNode;
    paragraph?: boolean;
}

export interface HeadingType {
    size?: number;
    color?: string;
    variant?: Headings;
    align?: Alignment;
    children: string | number | React.ReactNode;
}