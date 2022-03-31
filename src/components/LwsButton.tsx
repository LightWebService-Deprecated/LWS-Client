import { Component, ReactElement, CSSProperties } from 'react';
import styled from 'styled-components';
import './LwsButton.css';

interface LwsButtonOverrideableStyle {
  width?: string;
  height?: string;
}

interface LwsButtonProps extends LwsButtonOverrideableStyle {
  title: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const LwsStyledButtonBase = styled.button<LwsButtonOverrideableStyle>`
  &:active {
    background: #b4b4fa;
  }
  background: #c8c8fa;
  font-family: Ubuntu Mono;
  padding: 7px 10px;
  height: ${(prop) => prop.height ?? '30px'};
  width: ${(prop) => prop.width ?? '70px'};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;

export function LwsButton({
  title,
  width,
  height,
  type,
}: LwsButtonProps): ReactElement {
  return (
    <LwsStyledButtonBase width={width} height={height} type={type}>
      {title}
    </LwsStyledButtonBase>
  );
}
