import React, { ReactNode } from "react";

interface IClientState {
  isTopBelow: boolean;
  isBottomBelow: boolean;
  isTopAbove: boolean;
  isBottomAbove: boolean;
}

interface IViewportWatcherProps {
  children: (state: IClientState) => ReactNode;
}

interface IViewportWatcherState {
  y: number;
  height: number;
}

interface IViewportRect {
  height: number;
}

export default class ViewportWatcher extends React.Component<
  IViewportWatcherProps,
  IViewportWatcherState
> {
  ref = React.createRef<HTMLDivElement>();

  constructor(props: IViewportWatcherProps) {
    super(props);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.state = this.getClientState();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScroll);
    this.updateClientState();
  }

  computeClientState(): IClientState {
    const { height: viewportHeight } = this.getViewportRect();

    return {
      isTopBelow: this.state.y >= viewportHeight,
      isBottomBelow: this.state.y + this.state.height >= viewportHeight,
      isTopAbove: this.state.y < 0,
      isBottomAbove: this.state.y + this.state.height < 0
    };
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }

  onWindowScroll(event: Event) {
    this.updateClientState();
  }

  updateClientState(): void {
    this.setState(this.getClientState());
  }

  getClientState(): IViewportWatcherState {
    return {
      y: this.getClienY() || 0,
      height: this.getClientHeight() || 0
    };
  }

  getClienY() {
    return this.ref.current?.getBoundingClientRect().y;
  }

  getClientHeight() {
    return this.ref.current?.getBoundingClientRect().height;
  }

  getViewportRect(): IViewportRect {
    return {
      height: typeof window === 'undefined' ? 0 : window.innerHeight
    };
  }

  render() {
    const {children, ...rest } = this.props;
    return <div ref={this.ref} {...rest}>{this.props.children(this.computeClientState())}</div>;
  }
}
