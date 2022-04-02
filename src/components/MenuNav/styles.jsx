import styled from 'styled-components'
import { css } from 'styled-components'

export const MenuNavReplacer = styled.section`
  height: 64px;
`
export const Categories = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
  ${({ isFixed }) =>
    !isFixed &&
    css`
      position: fixed;
      top: 0;
      z-index: 100;
      padding: 0 6.5%;
      border-bottom: 1px solid rgba(247, 246, 245);
    `};
`
export const Category = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  cursor: pointer;
  ${({ isCurrent }) =>
    isCurrent
      ? css`
          color: rgba(228, 0, 43);
          border-bottom: 1px solid rgba(228, 0, 43, 1);
        `
      : 'color: rgba(157, 157, 157);'};
`
