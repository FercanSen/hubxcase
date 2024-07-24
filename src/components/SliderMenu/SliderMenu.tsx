/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';
import './SliderMenu.scss';

import { DragDealer } from './Helpers/DragDealer';
import SliderMenuItems from './SliderMenuItems/SliderMenuItems';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function SliderMenu() {
  const navigate = useNavigate();
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff: number) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleNavigation = (route: string) => () => {
    navigate(route);
  };

  return (
    <div className="slider-menu">
      <div onMouseLeave={dragState.current.dragStop}>
        <ScrollMenu
          onMouseDown={() => dragState.current.dragStart}
          onMouseUp={() => dragState.current.dragStop}
          onMouseMove={handleDrag}
        >
          <SliderMenuItems onItemClick={handleNavigation} />
        </ScrollMenu>
      </div>
    </div>
  );
}

export default SliderMenu;
