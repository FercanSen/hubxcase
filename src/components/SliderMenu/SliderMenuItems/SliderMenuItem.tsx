import { FC } from 'react';
import './SliderMenuItem.scss';

interface SliderMenuItemProps {
  IconComponent: FC<{ color?: string }>;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SliderMenuItem: FC<SliderMenuItemProps> = ({ IconComponent, text, isActive, onClick }) => {
  return (
    <div
      className={`slider-menu-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="slider-menu-item__icon">
        {IconComponent && <IconComponent color={isActive ? '#0381FF' : '#666666'} />}
      </div>
      {text}
    </div>
  );
}

export default SliderMenuItem;
