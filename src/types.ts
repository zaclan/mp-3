
export type PageProps = {
    title: string;
    bullets: BulletPointProp[];
    table : boolean; 
    calc : boolean; 
}

export type BulletPointProp = {
    title: string;
    subtitle?: string;
    content?: string; 
}