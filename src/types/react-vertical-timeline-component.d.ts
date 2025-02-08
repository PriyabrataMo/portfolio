declare module "react-vertical-timeline-component" {
    import * as React from "react";
  
    interface VerticalTimelineProps {
      animate?: boolean;
      className?: string;
      layout?: "1-column" | "2-columns";
      lineColor?: string;
    }
  
    interface VerticalTimelineElementProps {
      className?: string;
      contentArrowStyle?: React.CSSProperties;
      contentStyle?: React.CSSProperties;
      date?: React.ReactNode;
      dateClassName?: string;
      icon?: React.ReactNode;
      iconClassName?: string;
      iconOnClick?: () => void;
      iconStyle?: React.CSSProperties;
      id?: string;
      position?: "left" | "right";
      style?: React.CSSProperties;
      textClassName?: string;
      visible?: boolean;
    }
  
    export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
    export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
  }