import React from 'react'
import "../styles/mall.sass"

export interface P {
    className?: string
}

export interface S {
}

class Mall extends React.Component<P, S> {
    // 构造
    constructor(props: any) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'mall'}>
                <h1>Mall</h1>
            </div>
        );
    }

    componentDidMount(): void {
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return true
    }
}

export default Mall
