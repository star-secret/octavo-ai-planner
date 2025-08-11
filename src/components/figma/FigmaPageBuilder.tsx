'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FigmaRenderer } from './FigmaRenderer';
import { FigmaService } from '@/services/figma';
import { FigmaFile, FigmaNode, FigmaPage } from '@/types/figma';

export function FigmaPageBuilder() {
  const [figmaService, setFigmaService] = useState<FigmaService | null>(null);
  const [fileKey, setFileKey] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [figmaFile, setFigmaFile] = useState<FigmaFile | null>(null);
  const [selectedPage, setSelectedPage] = useState<FigmaPage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 환경 변수에서 기본값 가져오기
  useEffect(() => {
    const envFileKey = process.env.NEXT_PUBLIC_FIGMA_FILE_KEY;
    const envAccessToken = process.env.NEXT_PUBLIC_FIGMA_ACCESS_TOKEN;
    
    if (envFileKey) setFileKey(envFileKey);
    if (envAccessToken) setAccessToken(envAccessToken);
  }, []);

  const handleConnect = async () => {
    if (!fileKey || !accessToken) {
      setError('파일 키와 액세스 토큰을 입력해주세요.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const service = new FigmaService(accessToken, fileKey);
      const file = await service.getFile();
      
      setFigmaFile(file);
      setFigmaService(service);
      setError(null);
    } catch (err) {
      setError('피그마 파일을 불러오는데 실패했습니다. 토큰과 파일 키를 확인해주세요.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageSelect = (pageId: string) => {
    if (!figmaFile) return;

    // 페이지 찾기
    const findPage = (nodes: FigmaNode[]): FigmaNode | null => {
      for (const node of nodes) {
        if (node.id === pageId) return node;
        if (node.children) {
          const found = findPage(node.children);
          if (found) return found;
        }
      }
      return null;
    };

    const pageNode = findPage([figmaFile.document]);
    if (pageNode) {
      setSelectedPage({
        id: pageNode.id,
        name: pageNode.name,
        nodes: pageNode.children || []
      });
    }
  };

  const getPageOptions = (): { value: string; label: string }[] => {
    if (!figmaFile) return [];

    const pages: { value: string; label: string }[] = [];
    
    const extractPages = (nodes: FigmaNode[]) => {
      for (const node of nodes) {
        if (node.type === 'PAGE') {
          pages.push({ value: node.id, label: node.name });
        }
        if (node.children) {
          extractPages(node.children);
        }
      }
    };

    extractPages([figmaFile.document]);
    return pages;
  };

  return (
    <div className="space-y-6">
      {/* 연결 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>Figma 연결 설정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fileKey">파일 키</Label>
              <Input
                id="fileKey"
                value={fileKey}
                onChange={(e) => setFileKey(e.target.value)}
                placeholder="figma_file_key_here"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accessToken">액세스 토큰</Label>
              <Input
                id="accessToken"
                type="password"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="your_access_token_here"
              />
            </div>
          </div>
          <Button 
            onClick={handleConnect} 
            disabled={loading || !fileKey || !accessToken}
            className="w-full"
          >
            {loading ? '연결 중...' : 'Figma 연결'}
          </Button>
          
          {error && (
            <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 페이지 선택 */}
      {figmaFile && (
        <Card>
          <CardHeader>
            <CardTitle>페이지 선택</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={handlePageSelect}>
              <SelectTrigger>
                <SelectValue placeholder="페이지를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {getPageOptions().map((page) => (
                  <SelectItem key={page.value} value={page.value}>
                    {page.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      )}

      {/* 선택된 페이지 렌더링 */}
      {selectedPage && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedPage.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-4 bg-gray-50 min-h-[400px]">
              {selectedPage.nodes.map((node) => (
                <FigmaRenderer key={node.id} node={node} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 사용법 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>사용법</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>1. Figma에서 파일 키를 복사하세요 (URL에서 추출 가능)</p>
          <p>2. Figma 설정에서 액세스 토큰을 생성하세요</p>
          <p>3. 연결 버튼을 클릭하여 파일을 불러오세요</p>
          <p>4. 원하는 페이지를 선택하면 자동으로 웹페이지가 생성됩니다</p>
        </CardContent>
      </Card>
    </div>
  );
}

