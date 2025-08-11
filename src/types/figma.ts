export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  fills?: any[];
  strokes?: any[];
  strokeWeight?: number;
  cornerRadius?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  characters?: string;
  style?: {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    textAlignHorizontal?: string;
    textAlignVertical?: string;
  };
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface FigmaFile {
  document: FigmaNode;
  components: { [key: string]: FigmaNode };
  styles: { [key: string]: any };
}

export interface FigmaPage {
  id: string;
  name: string;
  nodes: FigmaNode[];
}

export interface FigmaComponent {
  id: string;
  name: string;
  node: FigmaNode;
  description?: string;
}

