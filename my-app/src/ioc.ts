import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import { IProvider } from "./providers/IProvider";
import { NameProvider } from './providers/NameProvider';

const container = new Container();
container.bind<IProvider<string>>("nameProvider").to(NameProvider);

const { lazyInject } = getDecorators(container);

export { lazyInject };