import React from 'react'
import "../styles/community.sass"

export interface P {
    className?: string
}

export interface S {
}

class Community extends React.Component<P, S> {
    // 构造
    constructor(props: any) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'community'}>
                <h1>Community</h1>
            </div>
        );
    }

    componentDidMount(): void {
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return true
    }
}

export default Community
