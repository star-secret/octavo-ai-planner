'use client';

import React from 'react';
import { FigmaNode } from '@/types/figma';

interface FigmaRendererProps {
  node: FigmaNode;
  className?: string;
}

export function FigmaRenderer({ node, className = '' }: FigmaRendererProps) {
  const renderNode = (node: FigmaNode): React.ReactNode => {
    const baseStyle: React.CSSProperties = {
      position: 'relative',
      width: node.width ? `${node.width}px` : 'auto',
      height: node.height ? `${node.height}px` : 'auto',
      left: node.x ? `${node.x}px` : 'auto',
      top: node.y ? `${node.y}px` : 'auto',
    };

    // 배경색 처리
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b } = fill.color;
        const alpha = fill.opacity || 1;
        baseStyle.backgroundColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${alpha})`;
      }
    }

    // 테두리 처리
    if (node.strokes && node.strokes.length > 0) {
      const stroke = node.strokes[0];
      if (stroke.type === 'SOLID' && stroke.color) {
        const { r, g, b } = stroke.color;
        const alpha = stroke.opacity || 1;
        baseStyle.border = `${node.strokeWeight || 1}px solid rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${alpha})`;
      }
    }

    // 모서리 둥글기 처리
    if (node.cornerRadius) {
      baseStyle.borderRadius = `${node.cornerRadius}px`;
    }

    // 텍스트 스타일 처리
    if (node.style) {
      if (node.style.fontFamily) {
        baseStyle.fontFamily = node.style.fontFamily;
      }
      if (node.style.fontSize) {
        baseStyle.fontSize = `${node.style.fontSize}px`;
      }
      if (node.style.fontWeight) {
        baseStyle.fontWeight = node.style.fontWeight;
      }
      if (node.style.textAlignHorizontal) {
        baseStyle.textAlign = node.style.textAlignHorizontal as 'left' | 'center' | 'right';
      }
    }

    switch (node.type) {
      case 'FRAME':
      case 'GROUP':
        return (
          <div
            key={node.id}
            className={`figma-${node.type.toLowerCase()} ${className}`}
            style={baseStyle}
          >
            {node.children?.map(renderNode)}
          </div>
        );

      case 'RECTANGLE':
        return (
          <div
            key={node.id}
            className={`figma-rectangle ${className}`}
            style={baseStyle}
          />

        );

      case 'TEXT':
        return (
          <div
            key={node.id}
            className={`figma-text ${className}`}
            style={baseStyle}
          >
            {node.characters || ''}
          </div>
        );

      case 'ELLIPSE':
        return (
          <div
            key={node.id}
            className={`figma-ellipse ${className}`}
            style={{
              ...baseStyle,
              borderRadius: '50%',
            }}
          />
        );

      case 'VECTOR':
        return (
          <div
            key={node.id}
            className={`figma-vector ${className}`}
            style={baseStyle}
          />
        );

      case 'COMPONENT':
      case 'INSTANCE':
        return (
          <div
            key={node.id}
            className={`figma-component ${className}`}
            style={baseStyle}
          >
            {node.children?.map(renderNode)}
          </div>
        );

      default:
        return (
          <div
            key={node.id}
            className={`figma-${node.type.toLowerCase()} ${className}`}
            style={baseStyle}
          >
            {node.children?.map(renderNode)}
          </div>
        );
    }
  };

  return <>{renderNode(node)}</>;
}

