import styled from 'styled-components'
import { css } from 'styled-components'

export const MenuNavReplacer = styled.section`
  height: 64px;
`
export const Categories = styled.section`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
  overflow-y: hidden;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(237, 236, 235);
    border-bottom: 2px solid #fff;
    border-radius: 5px;
  }
  ${({ isFixed }) =>
    !isFixed &&
    css`
      position: fixed;
      top: 0;
      z-index: 100;
      padding: 0 6.5%;
      border-bottom: 1px solid rgba(247, 246, 245);
    `}
  @media (max-width: 930px) {
    overflow-x: scroll;
  }
`
export const Category = styled.a`
  display: flex;
  align-items: center;
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
export const CategoryName = styled.span`
  width: fit-content;
  white-space: nowrap;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
`
