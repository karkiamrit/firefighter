import Calendar from './calendar.icon';
import Facebook from './facebook.icon';
import Instagram from './instagram.icon';
import LinkedIn from './linkedin.icon';
import Logo from '@/common/icons/logo.icon';
import Certificate from '@/common/icons/certificate.icon';
import Career from '@/common/icons/career.icon';
import Video from '@/common/icons/video.icon';
import LeftArrow from '@/common/icons/leftarrow.icon';
import { IconProps } from '@/common/interface/global';
import RightArrow from '@/common/icons/rightarrow.icon';
import LogoSmall from '@/common/icons/logosmall.icon';
import DotIcon from './dot.icon';
import ArrowRight from './arrow-right.icon';
import CircleIcon from './circle.icon';

interface IIconProps extends IconProps {
  type:
    | 'calendar'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'certificate'
    | 'career'
    | 'video'
    | 'dot'
    | 'arrow_right'
    | 'circle'
    | 'left_arrow'
    | 'right_arrow'
    | 'logo_small'
    | string;
}

export default function Icon({ type, color, fill, ...rest }: IIconProps) {
  const iconProps = {
    color,
    fill,
    ...rest,
  };

  return (
    <>
      {
        {
          calendar: <Calendar {...iconProps} />,
          facebook: <Facebook {...iconProps} />,
          instagram: <Instagram {...iconProps} />,
          linkedin: <LinkedIn {...iconProps} />,
          logo: <Logo {...iconProps} />,
          certificate: <Certificate {...iconProps} />,
          career: <Career {...iconProps} />,
          video: <Video {...iconProps} />,
          dot: <DotIcon {...iconProps} />,
          arrow_right: <ArrowRight {...iconProps} />,
          circle: <CircleIcon {...iconProps} />,
          left_arrow: <LeftArrow {...iconProps} />,
          right_arrow: <RightArrow {...iconProps} />,
          logo_small: <LogoSmall {...iconProps} />,
        }[type]
      }
    </>
  );
}
