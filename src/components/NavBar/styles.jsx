import styled from 'styled-components'
import { css } from 'styled-components'

export const NavBarWrapper = styled.section`
  display: flex;
  height: 64px;
  justify-content: center;

  width: 87%;
  @media (max-width: 740px) {
    width: 95%;
  }
  ${({ isFixed }) =>
    isFixed &&
    css`
      @media (max-width: 930px) {
        margin-bottom: 11px;
      }
    `}
`
export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: top 0.3s ease;
  ${({ isFixed }) =>
    !isFixed &&
    css`
      position: fixed;
      top: 0;
      z-index: 10;
      padding: 0 6.5%;
      border-bottom: 1px solid rgba(247, 246, 245);
    `}
  ${({ isVisible, isFixed }) => isVisible && !isFixed && 'top: 64px;'}
    

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-thumb {
    box-sizing: border-box;
    background: rgb(237, 236, 235);
    border-bottom: 2px solid #fff;
    border-radius: 5px;
  }

  @media (max-width: 930px) {
    &:hover {
      overflow-x: scroll;
      height: 75px;
      /* margin: 6px 0; */
    }
  }
  @media (max-width: 500px) {
    &:hover {
      height: 76px;
    }
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
