export interface NavTreeNode {
    label: string;
    expanded?: boolean;
    href?: string;
    children?: NavTreeNode[];
}