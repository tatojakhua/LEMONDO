import styled from 'styled-components';
import down from '../../assets/selectDown.png';
import filter from '../../assets/filter.png';
import back from '../../assets/backButton.png';
import apple from '../../assets/apple.png';
import grid1 from '../../assets/grid1.png';
import grid2 from '../../assets/grid2.png';

//-- Sort --//
export const StyleSection = styled.section<{ top?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
  height: 92px;

  @media screen and (max-width: 1020px) {
    height: 70px;
    ${(props) => props.top && 'margin-top: 65px;'}
  }
`;

export const MobileOnlySection = styled(StyleSection)`
  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export const StyleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 130px;
  height: 32px;
  border-radius: 30px;
  background-color: rgba(242, 242, 242, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  cursor: pointer;
`;

interface DownButtonProps {
  isHidden: boolean;
}

export const DownButton = styled.img.attrs((props: DownButtonProps) => ({
  src: down.src,
  alt: 'down-button',
  width: '12px',
  height: '7px',
  style: {
    transition: '0.3s',
    transform: props.isHidden ? 'rotate(-180deg)' : 'none',
  },
}))<DownButtonProps>``;

export const FilterIcon = styled.img.attrs({
  src: filter.src,
  alt: 'filter',
})`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;

//-- Main Layout --//

export const StyleInnerContainer = styled.div<{ width: string; end?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${(props) => props.width};
  @media screen and (max-width: 1020px) {
    justify-content: ${(props) => (props.end ? 'end' : 'start')};
    margin-right: ${(props) => props.end && '-5px'};
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyleH2Text = styled.h2`
  width: 42px;
  height: 19px;
  font-family: FiraGo;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: rgba(0, 0, 0, 1);
`;

export const StyleSelectMenu = styled.div<{ $showitem?: string }>`
  width: ${(props) => (props.$showitem ? '130px' : '170px')};
  height: 32px;
  border-radius: 30px;
  background-color: rgba(242, 242, 242, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: ${(props) => (props.$showitem ? 'block' : 'none')};
  }
`;

export const StyleSelectBTN = styled.div`
  display: flex;
  text-align: center;
  align-items: end;
  justify-content: space-around;
  margin-top: 7px;
`;

export const StyleSelectBTNTEXT = styled.span<{ $sortButton?: string }>`
  height: 14px;
  font-family: FiraGo;
  font-weight: 500;
  line-height: 14.4px;
  @media screen and (max-width: 1020px) {
    font-size: 12px;
    margin-left: ${(props) => {
      return props.$sortButton || '0';
    }};
  }
`;

export const StyleUlOptions = styled.ul<{ $showdisplay: string }>`
  display: ${(props) => (props.$showdisplay == 'true' ? 'block' : 'none')};
  position: relative;
  width: 200px;
  height: 222px;
  border-radius: 12px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const StyledOptionSpan = styled.li`
  display: flex;
  height: 22px;
  font-family: FiraGo;
  font-weight: 500;
  line-height: 12px;
  padding-top: 9px;
  margin-left: -10px;
  border-radius: 8px;
  width: calc(100% - 20px);
`;

export const StyledDiv = styled.div<{ $full?: string }>`
  position: absolute;
  width: ${(props) => (props.$full ? '100%' : 'calc(100% - 30px)')};
  height: 2px;
  background: rgba(242, 242, 242, 1);
  bottom: 0;
`;

export const BackButtonIcon = styled.img.attrs({
  src: back.src,
  alt: 'back-button',
})`
  width: 11.04px;
  height: 12px;
  margin-top: 4px;
`;

export const AppleIcon = styled.img.attrs({
  src: apple.src,
  alt: 'apple',
})`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

interface DownButtonIconProps {
  isHidden: boolean;
}

export const DownButtonIcon = styled.img.attrs({
  src: down.src,
  alt: 'down-button',
})<DownButtonIconProps>`
  width: 12px;
  height: 7px;
  transition: 0.3s;
  transform: ${(props) => (props.isHidden ? 'rotate(-180deg)' : 'none')};
`;

export const Grid1Icon = styled.img.attrs({
  src: grid1.src,
  alt: 'grid-1',
})`
  width: 24px;
  height: 24px;
  margin-left: 15px;
`;

export const Grid2Icon = styled.img.attrs({
  src: grid2.src,
  alt: 'grid-2',
})`
  width: 24px;
  height: 24px;
`;
