
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

export type TableProp = {
    header: string; 
    row: string; 
    cell: string; 
}