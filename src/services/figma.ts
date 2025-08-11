import axios from 'axios';
import { FigmaFile, FigmaNode } from '@/types/figma';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

export class FigmaService {
  private accessToken: string;
  private fileKey: string;

  constructor(accessToken: string, fileKey: string) {
    this.accessToken = accessToken;
    this.fileKey = fileKey;
  }

  private getHeaders() {
    return {
      'X-Figma-Token': this.accessToken,
      'Content-Type': 'application/json',
    };
  }

  async getFile(): Promise<FigmaFile> {
    try {
      const response = await axios.get(
        `${FIGMA_API_BASE}/files/${this.fileKey}`,
        { headers: this.getHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching Figma file:', error);
      throw error;
    }
  }

  async getFileNodes(nodeIds: string[]): Promise<{ [key: string]: FigmaNode }> {
    try {
      const response = await axios.get(
        `${FIGMA_API_BASE}/files/${this.fileKey}/nodes?ids=${nodeIds.join(',')}`,
        { headers: this.getHeaders() }
      );
      return response.data.nodes;
    } catch (error) {
      console.error('Error fetching Figma nodes:', error);
      throw error;
    }
  }

  async getImageUrls(nodeIds: string[], format: 'png' | 'jpg' | 'svg' = 'png', scale: number = 1): Promise<{ [key: string]: string }> {
    try {
      const response = await axios.get(
        `${FIGMA_API_BASE}/images/${this.fileKey}?ids=${nodeIds.join(',')}&format=${format}&scale=${scale}`,
        { headers: this.getHeaders() }
      );
      return response.data.images;
    } catch (error) {
      console.error('Error fetching Figma images:', error);
      throw error;
    }
  }
}

// 환경 변수에서 토큰과 파일 키를 가져오는 함수
export function createFigmaService(): FigmaService | null {
  const accessToken = process.env.NEXT_PUBLIC_FIGMA_ACCESS_TOKEN;
  const fileKey = process.env.NEXT_PUBLIC_FIGMA_FILE_KEY;

  if (!accessToken || !fileKey) {
    console.warn('Figma API credentials not found. Please set NEXT_PUBLIC_FIGMA_ACCESS_TOKEN and NEXT_PUBLIC_FIGMA_FILE_KEY');
    return null;
  }

  return new FigmaService(accessToken, fileKey);
}

