import * as React from "react";
import { lazyInject } from "./ioc";
import { IProvider } from "./providers/IProvider";

export class Hello extends React.Component {
    @lazyInject("nameProvider")
    private readonly nameProvider: IProvider<string>;

    public render() {
        return <h1>Hello {this.nameProvider.provide()}!</h1>;
    }
}